import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import playlists from "../db/Schemas/playlists.js";
import { LimitActiveStreams } from "../RateLimit.js";

// you can customize this routes for you admin page 

router.post("/admin/create", LimitActiveStreams, async (req, res) => {
    try {

        return res.status(404).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});

router.put("/admin/edit", LimitActiveStreams, async (req, res) => {
    try {
      
        return res.status(400).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});



router.post("/admin/read", async (req, res) => {
    try {
      
        return res.status(403).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});


router.post("/admin/delete", LimitActiveStreams, async (req, res) => {
    try {
       
        return res.status(403).json({ status: false });
    } catch (error) {
        return res.status(403).json({ status: false });
    }
})


router.get("/public", async (req, res) => {
    try {
        const data = await playlists.find()
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
        return res.status(403).json([])
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



router.post("/start", async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: error.message });
    }
});



router.post("/stop", async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).json(error.message)
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