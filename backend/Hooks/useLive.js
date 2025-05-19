import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { spawn } from "child_process"
import mime from "mime"
import fs from "fs"
import chokidar from "chokidar"
import ffmpegPath from "ffmpeg-static";
import path from "path";
import useMail from "./useMail.js";
import useEndLive from "./useEndLive.js"

export const bucket_Name = process.env.BUCKET_NAME
const bucket_Region = process.env.BUCKET_REGION
const bucket_AccessKey = process.env.BUCKET_ACCESS_KEY
const bucket_SecretKey = process.env.BUCKET_SECRET_KEY

export const s3 = new S3Client({
    endpoint: 'https://s3.eu-south-1.wasabisys.com',
    credentials: {
        accessKeyId: bucket_AccessKey,
        secretAccessKey: bucket_SecretKey
    },
    region: bucket_Region,
    forcePathStyle: true
})


const uploadToS3 = async (filePath, id) => {
    try {
        const S3_PREFIX = `live-stream/${id}/`
        const fileStream = fs.createReadStream(filePath);
        const key = S3_PREFIX + path.basename(filePath);

        const params = {
            Bucket: bucket_Name,
            Key: key,
            Body: fileStream,
            ACL: 'public-read',
            ContentType: mime.getType(filePath),
            CacheControl: filePath.endsWith(".m3u8") ? 'no-store' : "max-age=86400",
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
        const OUTPUT_DIR = `./Outputs/${id}`
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }


        fs.readdirSync(OUTPUT_DIR).forEach(file => {
            if (file.endsWith('.ts') || file.endsWith('.m3u8')) {
                fs.rmSync(path.join(OUTPUT_DIR, file));
            }
        });

        const ffmpeg = spawn(ffmpegPath, [
            '-i', url,
            '-c:v', 'libx264',
            '-c:a', 'aac',
            '-f', 'hls',
            '-hls_time', '5',
            '-hls_list_size', '5',
            '-hls_flags', 'delete_segments',
            '-hls_segment_filename', `${OUTPUT_DIR}/segment_%04d.ts`,
            `${OUTPUT_DIR}/stream.m3u8`
        ]);

        ffmpeg.stderr.on('data', data => console.log(data));
        ffmpeg.on('close', async (code) => {
            console.log(`FFmpeg exited with code ${code}`)

            const MAX_RETRIES = 2
            let retries = 0

            const RetriesService = setInterval(async () => {
                const out = await useLive(url, id)

                if (retries >= MAX_RETRIES || out.isSuccess) {
                    clearInterval(RetriesService)
                    console.log(out.isSuccess ? "Recovered successfully." : "Max retries reached. Giving up.");
                    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
                    useEndLive(OUTPUT_DIR, `live-stream/${id}/`)
                    useMail("Max retries reached. Giving up.\n " + id, url)
                }

                retries++
            }, 1000 * 10)

        });

        chokidar.watch(OUTPUT_DIR).on('add', async (filePath) => await uploadToS3(filePath, id)).on('change', async (filePath) => await uploadToS3(filePath, id)).on("unlink", async (filePath) => await deleteFromS3(filePath, `live-stream/${id}/`)); // watches a dir 


        schedule.scheduleJob(StreamEndDate, () => {
            fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
            useEndLive(OUTPUT_DIR, `live-stream/${id}/`)
        })


        return {
            isSuccess: true,
            error: null
        }

    } catch (error) {

        fs.readdirSync(OUTPUT_DIR).forEach(file => {
            if (file.endsWith('.ts') || file.endsWith('.m3u8')) {
                fs.unlinkSync(path.join(OUTPUT_DIR, file));
            }
        });


        console.log("error from useLive: ", error);

        return {
            isSuccess: false,
            error
        }
    }
}

export default useLive;