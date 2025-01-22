import express from "express"
const router = express.Router();

import BanIP from "../db/Schemas/banIP.js";
router.post("/", async (req, res) => {
    try {
        const banned = await BanIP.findOne({ ip: req.ip });
        res.status(200).json({
            status: banned ? true : false
        })
    } catch (error) {
        res.status(400).json({
            status: false
        })
    }
})


export default router;