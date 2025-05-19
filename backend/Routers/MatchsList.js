import express from "express"
const router = express.Router();
import Matches from "../db/Schemas/Matches.js";
import { LimitMatches } from "../RateLimit.js";
import rateLimit from "express-rate-limit";

router.get("/get", LimitMatches, async (req, res) => {
    try {

        const AllMatches = await Matches.find();
        if (!AllMatches[0]) {
            throw new Error("500")
        }
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        res.status(200).json(AllMatches[0]);
    } catch (error) {
        res.status(404).json(
            error
        )
    }
})


export let totoalMatches = async () => {
    const matches = await Matches.find();
    let total = matches[0]?.Matches.length;
    return total
}



router.put("/vote", rateLimit({
    windowMs: 12 * 60 * 60 * 1000,
    max: totoalMatches() + 1,
    message: "Your ip have been saved",
    handler: (req, res) => {
        console.log(req.ip);
        res.status(429).json({ status: "ip saved.", ip: req.ip });
    },
}), async (req, res) => {
    try {
        const { index, select } = req.body;
        const updatePathA = `Matches.${index}.voteA`
        const updatePathB = `Matches.${index}.voteB`
        console.log(index, select, updatePathA);
        const AllMatches = await Matches.find({});
        if (!AllMatches) {
            res.status(404)
        }
        console.log(AllMatches);
        const teamA = AllMatches[0].Matches[index].voteA
        const teamB = AllMatches[0].Matches[index].voteB
        const target = select ? updatePathB : updatePathA
       const editedObject =  await Matches.findOneAndUpdate({ _id: AllMatches[0]._id }, {
            $set: {
                [target]: select ? teamB + 1 : teamA + 1,
            }
        })
        console.log(editedObject);
        res.status(200).json({ status: true })
    } catch (error) {
        console.log(error);
        res.status(403).json({ status: false })
    }
})


export default router