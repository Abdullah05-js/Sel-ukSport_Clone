import express from "express"
const router = express.Router();
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { spawn } from "child_process"
import mime from "mime"
import fs from "fs"
import chokidar from "chokidar"
import ffmpegPath from "ffmpeg-static";
import path from "path";
import { randomUUID } from "crypto";
import useMail from "./useMail";



const bucket_Name = process.env.BUCKET_NAME
const bucket_Region = process.env.BUCKET_REGION
const bucket_AccessKey = process.env.BUCKET_ACCESS_KEY
const bucket_SecretKey = process.env.BUCKET_SECRET_KEY



const s3 = new S3Client({
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
        const fileContent = fs.readFileSync(filePath);
        const key = S3_PREFIX + path.basename(filePath);

        const params = {
            Bucket: bucket_Name,
            Key: key,
            Body: fileContent,
            ACL: 'public-read',
            ContentType: mime.getType(filePath)
        }

        const commnad = new PutObjectCommand(params)

        await s3.send(commnad)

    } catch (error) {
        console.log("error from uploadToS3: ", error);
    }
}


const useLive = async (url, id) => {
    try {
        const OUTPUT_DIR = `backend/Outputs/stream-${id}`
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
            '-hls_segment_filename', `${OUTPUT_DIR}/segment_%03d.ts`,
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
                    useMail("Max retries reached. Giving up.\n " + id, url)
                }

                retries++
            }, 1000 * 10)

        });



        chokidar.watch(OUTPUT_DIR).on('add', async (filePath) => await uploadToS3(filePath, id)).on('change', async (filePath) => await uploadToS3(filePath, id)); // watches a dir 



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