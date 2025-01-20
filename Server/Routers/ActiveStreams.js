import express from "express"
const router = express.Router();


router.post("/", async (req, res) => {
    const response = await fetch("http://localhost:8080/stat");
    const data = await response.text();
    const regex = /<name>(.*?)<\/name>/g;
        const streams = [];
        let match;
        while ((match = regex.exec(data)) !== null) {
            streams.push(match[1]);
        }

    res.status(200).json({streams});
});



export default router