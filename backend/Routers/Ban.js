import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import BanIP from "../db/Schemas/banIP.js";
router.post("/BanList", async (req, res) => {
    try {
        const { token } = req.body;
        jwt.verify(token, process.env.JWT_KEY)
        const BannedIps = await BanIP.find();
        res.status(200).json({
            loggedIPs: BannedIps
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
})

router.post("/Ban", async (req, res) => {
    try {
        const { token, ip } = req.body;
        jwt.verify(token, process.env.JWT_KEY)
        const newBan = new BanIP({
            ip,
            date: new Date().toISOString()
        })
        await newBan.save();
        res.status(200).json({
            status: `${ip} got banned`,
            ip: newBan
        })
    } catch (error) {
        res.status(400).json({
            status: error.message,
        })
    }
})




export default router