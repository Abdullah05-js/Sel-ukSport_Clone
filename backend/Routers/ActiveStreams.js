import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import playlists from "../db/Schemas/playlists.js";
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

router.post("/admin/create", LimitActiveStreams, async (req, res) => {
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

router.put("/admin/edit", LimitActiveStreams, async (req, res) => {
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



router.post("/admin/read",async (req, res) => {
    try {
        const { token } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {
            const data = await playlists.find()
            return res.status(200).json({
                list: data,
                loggedIPs: []
            })
        }
        return res.status(403).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});


router.post("/admin/delete", LimitActiveStreams, async (req, res) => {
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


router.get("/public", async (req, res) => {
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

router.get("/1xbet", async (req, res) => {
    try {
        const response = await fetch("https://1xbet.com/LineFeed/GetTopGamesStatZip?lng=ar&country=190&fcountry=190&gr=70&limit=10")
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(403).json({ list: [] })
    }
});



import useKick from "../Hooks/useKick.js";
router.post("/start", async (req, res) => {
    try {
        const { token, target } = req.body;
        if (!token) {
            return res.status("403").json({ nice: "try :>" })
        }
        let status = false
        if (process.env.cloudflare === token) {
            status = true
        } else {
            jwt.verify(token, process.env.JWT_KEY)
            status = true
        }

        const hls = target.split("|")[1]
        const id = target.split("|")[0]

        const hlsResonse = await fetch(hls)
        if(hlsResonse.status != 200)
        {
            throw new Error("hls link problem")
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
            console.log(`Starting FFmpeg stream to ${name},${rtmpUrl}`);

            const ffmpegProcess = spawn('ffmpeg', [
                "-re",
                "-headers", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36\r\n",
                "-i", hls,
                "-c:v", "copy",
                "-c:a", "copy",
                "-f", "flv",
                rtmpUrl
            ]);

            // const ffmpegProcess = spawn(ffmpegStatic, [
            //     "-re",
            //     "-headers", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36\r\n",
            //     "-i", hls,
            //     "-c:v", "libx264", // Convert HEVC to H.264
            //     "-preset", "ultrafast", // Faster encoding
            //     "-c:a", "aac", // Convert audio to AAC
            //     "-b:a", "128k",
            //     "-f", "flv",
            //     rtmpUrl
            // ]);

            ffmpegProcess.stdout.on("data", (data) => {
                console.log(data.toString());
            })
            ffmpegProcess.stderr.on("data", (data) => {
                console.log(data.toString());
            })


            let responded = false;

            const time = setTimeout(async () => {
              try {
                const kick = await useKick(name)
                const response = await fetch(kick.data.playback_url)
                const streamLink = await response.text();
                const link = streamLink.split("\n").find((e) => e.includes("https"))
                await Stream.findOneAndUpdate({ id }, { status: true, pid: ffmpegProcess.pid, name, hls: link, veiwers: kick.data.viewers * 12 })
              } catch (error) {
                console.log("from setTimeOut :",error);
              }
            }, 40000);

            const loop = setInterval(async () => {
                try {
                    const kick = await useKick(name);
                    const response = await fetch(kick.data.playback_url)
                    const streamLink = await response.text();
                    const link = streamLink.split("\n").find((e) => e.includes("https"))
                    await Stream.findOneAndUpdate({ id }, { status: true, pid: ffmpegProcess.pid, name, hls: link, veiwers: kick.data.viewers * 12 })
                } catch (error) {
                    console.log("from interval: ",error);
                }
            }, 1000 * 60);

            ffmpegProcess.on("error", (err) => {
                console.error("FFmpeg error:", err);
                clearTimeout(time)
                clearInterval(loop)
                if (!responded) {
                    responded = true
                    return res.status(500).json({ error: "FFmpeg process failed", details: err.message });
                }
            });

            ffmpegProcess.on("exit", (code, signal) => {
                console.log(`FFmpeg exited with code ${code}, signal ${signal}`);
                clearTimeout(time)
                clearInterval(loop)
                if (signal === "SIGTERM" || code === 0 || code === 255) {
                    console.log("FFmpeg stopped normally, not restarting.");
                    return;
                }

                console.log("RTMP disconnected, restarting...");
                useRestartStream(target, process.env.cloudflare);
            });


            if (!responded) {
                responded = true
                return res.status(200).json({ name, pid:ffmpegProcess.pid,id });
            }


        } else {
            return res.status(403).json({ name:"error", pid:0,id:"error"});
        }
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: error.message });
    }
});



router.post("/stop", async (req, res) => {
    try {
        const { id, token } = req.body;
        if (!token) {
            return res.status("403").json({ nice: "try :>" })
        }
        jwt.verify(token, process.env.JWT_KEY)
        if (id) {
            const stream = await Stream.findOneAndUpdate({ id }, { hls: "https://dmithrvllta.cdn.mgmlcdn.com/dubairacing/smil:dubairacing.smil/chunklist.m3u8", status: false,name:"",pid:""})
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
        const response = await Stream.findOne({ id })
        return res.status(200).json(response.hls)
    } catch (error) {
        return res.status(404).json(error)
    }
})


router.get("/StreamsList", async (req, res) => {
    try {
        const { token } = req.query
        if (!token) {
            return res.status("403").json({ nice: "try :>" })
        }
        jwt.verify(token, process.env.JWT_KEY)
        const Streams = await Stream.find()
        return res.status(200).json({
            Streams
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ nice: "try :>" })
    }
})





export default router