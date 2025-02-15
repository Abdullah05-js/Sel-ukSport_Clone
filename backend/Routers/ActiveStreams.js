import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import playlists from "../db/Schemas/playlists.js";
import { loggedIPs } from "../server.js";
import { LimitActiveStreams, LimitPublicStream } from "../RateLimit.js";
import { spawn, exec } from "child_process"
import ffmpegStatic from "ffmpeg-static"
import StreamKeys from "../db/Schemas/StreamKeys.js";
import Stream from "../db/Schemas/Streams.js";
import useRestartStream from "../Hooks/useRestartStream.js";
let StreamKeyindex = [];

// router.post("/admin/rtmpStatus", async (req, res) => {
//     try {
//         const { token } = req.body;
//         const { id } = jwt.verify(token, process.env.JWT_KEY);
//         // const response = await fetch("http://localhost:8080/stat");
//         // const data = await response.text();
//         // const regex = /<name>(.*?)<\/name>/g;
//         const streams = ["realm amadrid/barcoo/10:00", "realm/fener/10:00"];
//         let match;
//         // while ((match = regex.exec(data)) !== null) {
//         //     streams.push(match[1]);
//         // }
//         return res.status(200).json({ streams });
//     } catch (error) {
//         res.status(404).json({
//             status: false
//         })
//     }
// });

router.post("/admin/create", LimitActiveStreams,async (req, res) => {
    try {
        const { name, token, url } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {
            const teamA = name.split("/")[0];
            const teamB = name.split("/")[1];
            const date = name.split("/")[2];
            const newLive = new playlists({ teamA, teamB, date, url })
            await newLive.save();
            console.log(newLive);
            return res.status(200).json(newLive)
        }
        res.status(404).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});

router.put("/admin/edit",LimitActiveStreams ,async (req, res) => {
    try {
        const { token, url, name, liveID } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {

            const teamA = name.split("/")[0];
            const teamB = name.split("/")[1];
            const date = name.split("/")[2];

            const editStream = await playlists.findOneAndUpdate({
                _id: liveID
            }, {
                url,
                teamA,
                teamB,
                date
            })

            console.log(editStream);
            return res.status(200).json({
                status: true
            })
        }
        return res.status(400).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});



router.post("/admin/read",LimitActiveStreams ,async (req, res) => {
    try {
        const { token } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {
            const data = await playlists.find()
            res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
            return res.status(200).json({
                list: data,
                loggedIPs: Array.from(loggedIPs).map(ip => ip)
            })
        }
        return res.status(403).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});


router.post("/admin/delete",LimitActiveStreams ,async (req, res) => {
    try {
        const { objectID, token } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {
            await playlists.findOneAndDelete({ _id: objectID });
            return res.status(200).json({ status: true });
        }
        return res.status(403).json({ status: false });
    } catch (error) {
        return res.status(403).json({ status: false });
    }
})


router.get("/public", LimitPublicStream, async (req, res) => {
    try {
        const data = await playlists.find()
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        return res.status(200).json({
            list: data,
        })
    } catch (error) {
        console.log(error);
        return res.status(403).json({ list: [] })
    }
});

router.get("/1xbet", LimitPublicStream, async (req, res) => {
    try {
        const response = await fetch("https://1xbet.com/LineFeed/GetTopGamesStatZip?lng=ar&country=190&fcountry=190&gr=70&limit=10")
        const data = await response.json();
        return res.status(200).json( data )
    } catch (error) {
        console.log(error);
        return res.status(403).json({ list: [] })
    }
});



import useKick from "../Hooks/useKick.js";
router.post("/start", async (req, res) => {
    try {
        const { token, hls , id } = req.body;
        let status = false
        if (process.env.cloudflare === token) {
            status = true
        }else{
            jwt.verify(token, process.env.JWT_KEY)
            status = true
        }
        
        if (hls && status) {
            const data = await StreamKeys.find();

            if (!data.length || !data[0].keys) {
                return res.status(400).json({ error: "No available stream keys" });
            }

            const keys = data[0].keys;
            const index = Object.keys(keys).find((e) => !StreamKeyindex.includes(e));

            if (!index) {
                return res.status(400).json({ error: "No available stream index" });
            }

            const rtmpUrl = keys[index].link
            const name = keys[index].streamLink
            StreamKeyindex.push(index)
            console.log(`Starting FFmpeg stream to ${rtmpUrl}`);
            console.log("ffmpegStatic: ", ffmpegStatic);

            const ffmpegProcess = spawn(ffmpegStatic, [
                "-re",
                "-i", hls,
                "-c:v", "copy",
                "-c:a", "copy",
                "-f", "flv",
                rtmpUrl
            ]);

            let responded = false;

            ffmpegProcess.on("error", (err) => {
                console.error("FFmpeg error:", err);
                if (!responded) {
                    responded = true
                    return res.status(500).json({ error: "FFmpeg process failed", details: err.message });
                }
            });

            ffmpegProcess.on("exit", (code, signal) => {
                console.log(`FFmpeg exited with code ${code}, signal ${signal}`);
                if (signal !== "SIGTERM") {
                    console.log("RTMP disconnected, restarting...");
                    useRestartStream(hls, process.env.cloudflare);
                }
            });

            const kick = await useKick(name)
            await Stream.findOneAndUpdate({id},{status:true,pid:ffmpegProcess.pid,name,hls:kick.playback_url,veiwers:kick.viewers*12})

            if (!responded) {
                responded = true
                return res.status(200).json({ message: "Stream created", hls: hlsUrl, pid: ffmpegProcess.pid });
            }
        } else {
            return res.status(403).json({ nice: "try" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});



router.post("/stop", async (req, res) => {
    try {
        const { id , token } = req.body;
         jwt.verify(token, process.env.JWT_KEY)
        if (id) {
            const stream = await Stream.findOneAndUpdate({id},{hls:"https://dmithrvllta.cdn.mgmlcdn.com/dubairacing/smil:dubairacing.smil/chunklist.m3u8",status:false})
            process.kill(stream.pid, "SIGTERM")
            return res.status(200).json({ message: "Stream stopped" });
        }
        return res.status(403).json({ nice: "try" });
    } catch (error) {
        res.status(404).json(error.message)
    }
})


router.get("/getLiveLink", async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(403).json({ nice: "try" })
        }
       const response = await Stream.findOne({id})
       return res.status(200).json(response.hls)
    } catch (error) {
        return res.status(404).json(error)
    }
})


export default router