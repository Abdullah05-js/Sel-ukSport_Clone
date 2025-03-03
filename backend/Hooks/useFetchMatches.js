import Matches from "../db/Schemas/Matches.js";
const UseFetchMatches = async () => {
    const date = new Date();
    const TargetDate = date.toISOString().split("T")[0];
    try {
        console.log(TargetDate);
        const response = await fetch(`https://www.filgoal.com/matches/ajaxlist?date=${TargetDate}`);
        const result = await response.json();

        await Matches.deleteMany();

        result.sort((a, b) => {
            if (Number(a.Date.split("Date(")[1].split(")")[0]) > Number(b.Date.split("Date(")[1].split(")")[0]))
                return 1
            else if (Number(a.Date.split("Date(")[1].split(")")[0]) < Number(b.Date.split("Date(")[1].split(")")[0]))
                return -1

            return 0
        })

        const newMatchesList = new Matches({
            liveScores: result,
        })
        await newMatchesList.save()

        console.log("Fetches the latest matches successfuly");
    } catch (error) {
        console.log(error);
    }
}

export default UseFetchMatches;
