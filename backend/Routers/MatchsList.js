import express from "express"
const router = express.Router();
import Matches from "../db/Schemas/Matches.js";

router.get("/", async (req, res) => {


    const AllMatches =await Matches.find({});
    
    console.log(AllMatches);
    
    res.status(200).json(AllMatches[0]);
})


export default router