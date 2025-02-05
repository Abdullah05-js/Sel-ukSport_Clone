import express from "express"
const router = express.Router();
import Matches from "../db/Schemas/Matches.js";
import { LimitMatches } from "../RateLimit.js";
import rateLimit from "express-rate-limit";

router.get("/get", LimitMatches, async (req, res) => {
    try {

        const AllMatches = await Matches.find({});

        res.status(200).json(AllMatches[0]);
    } catch (error) {
        res.status(404)
    }
})


export let totoalMatches = async () => {
    const matches = await Matches.find();
    let total = 0;
    matches[0].liveScores.forEach(element => {
        total += element.matches.length
    });
    return total
}



router.put("/vote", rateLimit({
    windowMs: 12 * 60 * 60 * 1000,
    max: totoalMatches()+1,
    message: "Your ip have been saved",
    handler: (req, res) => {
        console.log(req.ip);
        res.status(429).json({ status: "ip saved.", ip: req.ip });
    },
}), async (req, res) => {
    try {
        const { index, select, id } = req.body;
        const indexes = index.split("-");
        const updatePathA = `liveScores.${indexes[0]}.matches.${indexes[1]}.teamA.full`
        const updatePathB = `liveScores.${indexes[0]}.matches.${indexes[1]}.teamB.full`
        const AllMatches = await Matches.find({});
        if (!AllMatches) {
            res.status(404)
        }
        const teamA = AllMatches[0].liveScores[indexes[0]].matches[indexes[1]].teamA.full
        const teamB = AllMatches[0].liveScores[indexes[0]].matches[indexes[1]].teamB.full
        const target = select ? updatePathA : updatePathB
        await Matches.findOneAndUpdate({ _id: id }, {
            $set: {
                [target]: select ? teamA + 1 : teamB + 1,
            }
        })

        res.status(200).json({ status: true })
    } catch (error) {
        res.status(403).json({ status: false })
    }
})


export default router