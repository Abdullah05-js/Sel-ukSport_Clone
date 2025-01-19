import express from "express"
const router = express.Router();
import useMail from "../Hooks/useMail.js";

router.post("/CreateLiveStream", async (req, res) => {
    const { streamName } = req.body;
    if (!streamName) {
        useMail(req.get('User-Agent'),`${req.ip} \n this user tryed to create live stream`);
        return res.status(400).json({ error: "Stream name is required" });
    }
    const streamUrl = `rtmp://yourdomain.com/live/${streamName}`;
    res.status(200).json({ message: "Stream created", streamUrl });
})



router.post("/validateStreamKey", (req, res) => {
    const { name, args } = req.body;
    const token = args?.key;
    if (token !== process.env.validStreamKey) {
        useMail(req.get('User-Agent'),`${req.ip} \n this user tryed to validate stream key`);
        return res.status(403).send("Forbidden"); 
    }
    res.status(200).send("OK"); 
});



export default router