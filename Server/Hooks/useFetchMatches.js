import Matches from "../db/Schemas/Matches.js";
const UseFetchMatches = async () => {
    const date = new Date();
    const TargetDate = date.toISOString().split("T")[0];

    try {
        const response = await fetch(`https://www.goal.com/api/live-scores/refresh?edition=ar&date=${TargetDate}&tzoffset=180`);
        const result = await response.json();
        await Matches.deleteMany();
        const newMatchesList = new Matches({
            liveScores: result.liveScores,
            serverDate: result.serverDate
        })
        await newMatchesList.save()
        console.log("Fetched successfully");
    } catch (error) {
        console.log(error);
    }
}

export default UseFetchMatches;
