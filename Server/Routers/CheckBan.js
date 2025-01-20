import express from "express"
const router = express.Router();
import { BannedIps, loggedIPs } from "../server.js";
router.post("/", async (req, res) => {
    try {
        res.status(200).json({
            status: BannedIps.has(req.ip)
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
})


export default router;