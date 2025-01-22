import express from "express"
const router = express.Router();
import useMail from "../Hooks/useMail.js";
// import { v4 as uuidv4 } from 'uuid';

// router.post("/CreateLiveStream", async (req, res) => {
//     const { streamName,streamKey} = req.body;
//     if (!streamName) {
//         useMail(req.get('User-Agent'),`${req.ip} \n this user tryed to create live stream`);
//         return res.status(400).json({ error: "Stream name is required" });
//     }

//     if(process.env.validStreamKey !== streamKey)
//     {
//         useMail(req.get('User-Agent'),`${req.ip} \n this user tryed to create live stream`);
//         return res.status(400).json({ error: "Your ip saved" });
//     }

//     const streamUrl = `rtmp://yourdomain.com/live/${streamName}`;
//     res.status(200).json({ message: "Stream created", streamUrl , streamKey : process.env.validStreamKey });
// })





router.post("/validateStreamKey", (req, res) => {
    const { name, args } = req.body;
    const token = args?.key;
    if (token === process.env.validStreamKey) {
        res.status(200).send("OK");
        useMail(req.get('User-Agent'), `${req.ip} \n stream created successfully \n stream name:${name}`);
        return;
    }
    useMail(req.get('User-Agent'), `${req.ip} \n this user tryed to validate stream key`);
    return res.status(403).send("Forbidden");
});



export default router