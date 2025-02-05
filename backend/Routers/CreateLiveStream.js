import express from "express"
const router = express.Router();
import useMail from "../Hooks/useMail.js";
import BanIP from "../db/Schemas/banIP.js";
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



router.post("/isValidStremKey", async (req, res) => {
    const {name,addr} = req.body;
    const banned = await BanIP.findOne({ip:addr});
    if(banned)
    {
        return res.status(403)
    }
    if(name === proccess.env.validStreamKey)
    {
        return res.status(200)
    }
    else
    {
        return res.status(403)
    }
})

export default router