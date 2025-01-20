import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import playlists from "../db/Schemas/playlists.js";
router.post("/admin/rtmpStatus", async (req, res) => {
    try {
        const { token } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        // const response = await fetch("http://localhost:8080/stat");
        // const data = await response.text();
        // const regex = /<name>(.*?)<\/name>/g;
        const streams = ["realm amadrid/barcoo/10:00", "realm/fener/10:00"];
        let match;
        // while ((match = regex.exec(data)) !== null) {
        //     streams.push(match[1]);
        // }
        return res.status(200).json({ streams });
    } catch (error) {
        res.status(404).json({
            status: false
        })
    }
});



router.post("/admin/create", async (req, res) => {
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

router.put("/admin/edit", async (req, res) => {
    try {
        const { token, url , liveID } = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {
          await  playlists.findOneAndUpdate({
                _id:liveID
            },{
                url
            })
            return res.status(200).json({
                status: true
            })
        }
       return res.status(40).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});



router.post("/admin/read", async (req, res) => {
    try {
        const { token} = req.body;
        const { id } = jwt.verify(token, process.env.JWT_KEY);
        if (id) {
            const data = await  playlists.find()
            console.log(data);
            
            return res.status(200).json({
                list:data,
            })
        }
       return res.status(40).json({ status: false });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false })
    }
});


router.post("/public", async (req, res) => {
    try {
            const data = await  playlists.find()
            return res.status(200).json({
                list:data,
            })
    } catch (error) {
        console.log(error);
        return res.status(403).json({ list: [] })
    }
});

export default router