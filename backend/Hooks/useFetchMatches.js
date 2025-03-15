import Matches from "../db/Schemas/Matches.js";
const UseFetchMatches = async () => {
    const date = new Date();
    const TargetDate = date.toISOString().split("T")[0];
    try {
        console.log(TargetDate);
        const response = await fetch(`https://www.filgoal.com/matches/ajaxlist?date=${TargetDate}`);
        let result = await response.json();
        await Matches.deleteMany();

        result.sort((a, b) => {
            if (Number(a.Date.split("Date(")[1].split(")")[0]) > Number(b.Date.split("Date(")[1].split(")")[0]))
                return 1
            else if (Number(a.Date.split("Date(")[1].split(")")[0]) < Number(b.Date.split("Date(")[1].split(")")[0]))
                return -1

            return 0
        })


        result = result.filter((e) => e.ChampionshipId === 1362 || e.ChampionshipId === 1367 || e.ChampionshipId === 1373 || e.ChampionshipId === 1574 || e.ChampionshipId === 1379 || e.ChampionshipId === 1380 || e.ChampionshipId === 1453 || e.ChampionshipId === 1384 || e.ChampionshipId === 1390 || e.ChampionshipId === 1391 || e.ChampionshipId === 1284 || e.ChampionshipId === 1223)

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
