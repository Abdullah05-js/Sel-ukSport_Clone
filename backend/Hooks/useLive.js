import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { spawn } from "child_process"
import mime from "mime"
import fs from "fs"
import chokidar from "chokidar"
import ffmpegPath from "ffmpeg-static";
import path from "path";
import useMail from "./useMail.js";
import useClean from "./useClean.js";
import schedule from 'node-schedule';


export const bucket_Name = process.env.BUCKET_NAME
const bucket_Region = process.env.BUCKET_REGION
const bucket_AccessKey = process.env.BUCKET_ACCESS_KEY
const bucket_SecretKey = process.env.BUCKET_SECRET_KEY

export const s3 = new S3Client({
    endpoint: 'https://04be21e3f71094a3ae97abb5cd8fb86c.r2.cloudflarestorage.com',
    credentials: {
        accessKeyId: bucket_AccessKey,
        secretAccessKey: bucket_SecretKey
    },
    region: "auto",
    forcePathStyle: true
})


export const processMap = {

}


const uploadToS3 = async (filePath, id) => {
    try {
        console.log("uploading to s3 ", filePath, id);
        const S3_PREFIX = `live-stream/${id}/`
        const fileStream = fs.createReadStream(filePath);
        const key = S3_PREFIX + path.basename(filePath);

//         Stream bir Veri Kaynağıdır, Verinin Kendisi Değil
// Sizin de belirttiğiniz gibi, fs.createReadStream(filePath) asenkron bir işlem başlatır. Ancak bu satır çalıştığında, fileStream değişkeninin içine dosyanın içeriği konulmaz.

// fileStream değişkeni, dosyanın verisinin kendisi değil, o veriye nasıl ulaşılacağını ve onu parça parça nasıl okunacağını bilen bir nesnedir (object). Bunu bir musluğa benzetebilirsiniz. fs.createReadStream dediğinizde musluğu takmış olursunuz, ama henüz suyu açmamışsınızdır. fileStream nesnesi, bu musluğun kendisidir.

// AWS SDK (v3) Stream'lerle Çalışmak İçin Tasarlanmıştır
// İşin kilit noktası burasıdır. PutObjectCommand'ın Body parametresine fileStream nesnesini (yani musluğu) verdiğinizde, AWS SDK'sı bunun bir "Stream" (Akış) olduğunu anlar.

// SDK şunu yapmaz: "Dur bakalım, bu stream'in içindeki bütün veriyi okuyup bitireyim, sonra S3'e göndereyim."

// Bunun yerine şunu yapar:

// S3'e bir bağlantı açar (yüklemeyi başlatır).
// fileStream'den bir parça veri (chunk) okunmasını ister.
// Dosyadan ilk veri parçası okunur okunmaz, bu parçayı S3'e gönderir.
// Bu parça gönderilirken, fileStream'den bir sonraki parçayı okumaya başlar.
// Dosyadan okunan her yeni parçayı anında S3'e akıtır.
// Bu süreç, dosyanın sonuna gelinene ve fileStream "benden bu kadar, veri bitti" (end olayı) diyene kadar devam eder.

        const params = {
            Bucket: bucket_Name,
            Key: key,
            Body: fileStream,
            ContentType: mime.getType(filePath),
            CacheControl: 'no-store' // 2. tip  filePath.endsWith(".m3u8") ? 'no-store' : "max-age=60",
        }

        const commnad = new PutObjectCommand(params)

        await s3.send(commnad)

    } catch (error) {
        console.log("error from uploadToS3: ", error);
    }
}


export const deleteFromS3 = async (filePath, dir) => {
    try {
        const key = dir + path.basename(filePath);
        const params = {
            Bucket: bucket_Name,
            Key: key
        }

        const command = new DeleteObjectCommand(params);

        const response = await s3.send(command)

        console.log("Deleted from s3: ", response);

    } catch (error) {
        console.log("error from deleteFromS3: ", error);
    }
}

const useLive = async (url, id, StreamEndDate) => {
    try {

        if (!url || !id || !StreamEndDate) throw new Error("Invalid input");


        const OUTPUT_DIR = `./Outputs/${id}`
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }


        fs.readdirSync(OUTPUT_DIR).forEach(file => { // read dir sync çünkü ilk önce sil sonra streaminge başla 
            if (file.endsWith('.ts') || file.endsWith('.m3u8')) {
                fs.unlinkSync(path.join(OUTPUT_DIR, file));
            }
        });

        const ffmpeg = spawn(ffmpegPath, [
            '-i', url,
            '-c:v', 'libx264',
            '-c:a', 'aac',
            '-f', 'hls',
            '-hls_time', 6,
            '-hls_list_size', 5,
            '-hls_flags', 'delete_segments',
            '-hls_segment_filename', `${OUTPUT_DIR}/segment_%05d.ts`,
            `${OUTPUT_DIR}/stream.m3u8`
        ]);

        //ffmpeg.stderr.on('data', data => console.log(data.toString()));
        ffmpeg.on('close', async (code, signal) => {
            console.log(`FFmpeg exited with code ${code},---,${signal}`)

            if (signal === 'SIGTERM') {
                const MAX_RETRIES = 2
                let retries = 0

                const RetriesService = setInterval(async () => {
                    const out = await useLive(url, id, StreamEndDate)

                    if (retries > MAX_RETRIES) {
                        clearInterval(RetriesService)
                        useClean(OUTPUT_DIR, processMap, `live-stream/${id}/`, id)
                        console.log(out.isSuccess ? "Recovered successfully." : "Max retries reached. Giving up.");
                        useMail("Max retries reached. Giving up.\n " + id + "\n", url)
                    } else if (out.isSuccess) {
                        clearInterval(RetriesService)
                        console.log(out.isSuccess ? "Recovered successfully." : "Max retries reached. Giving up.");
                        useMail("Re streaming successfully.\n " + id + "\n", url)
                    }

                    retries++
                }, 1000 * 10)
            }

        });


        ffmpeg.on('error', (err) => {
            console.error("FFmpeg failed to start:", err);
            useClean(OUTPUT_DIR, processMap, `live-stream/${id}/`, id)
        });


        const watcher = chokidar.watch(OUTPUT_DIR)
            .on('add', async (filePath) => {
                try {
                    await uploadToS3(filePath, id);
                } catch (err) {
                    console.error('Upload failed for:', filePath, err);
                }
            })
            .on('change', async (filePath) => {
                try {
                    await uploadToS3(filePath, id);
                } catch (err) {
                    console.error('Upload failed for:', filePath, err);
                }
            })
        // .on("unlink", async (filePath) => {
        //     try {
        //         await deleteFromS3(filePath, `live-stream/${id}/`);
        //     } catch (err) {
        //         console.error('Delete failed for:', filePath, err);
        //     }
        // });


        processMap[id] = { ffmpeg, watcher }

        schedule.scheduleJob(StreamEndDate, () => {
            console.log("\ncleaning and ending the live stream\n");
            useClean(OUTPUT_DIR, processMap, `live-stream/${id}/`)
        })

        return {
            isSuccess: true,
            error: null
        }

    } catch (error) {
        console.log("error from useLive: ", error);

        if (error.message !== "Invalid input")
            useClean(OUTPUT_DIR, processMap, `live-stream/${id}/`, id)


        useMail(error.message)

        return {
            isSuccess: false,
            error
        }
    }
}

export default useLive;
