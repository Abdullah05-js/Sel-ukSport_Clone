import Matches from "../db/Schemas/Matches.js";
import { randomUUID } from "crypto";
import useScheduleStream from "./useScheduleStream.js";
import playlists from "../db/Schemas/playlists.js";

const UseFetchMatches = async () => {
    try {
        const date = new Date();
        const TargetDate = date.toISOString().split("T")[0]
        date.setDate(date.getDate() + 1)
        const startBefore = date.toISOString().split("T")[0]

        console.log(TargetDate, startBefore);

        const filgoalResponse = await fetch(`https://www.filgoal.com/matches/ajaxlist?date=${TargetDate}`); // arabic free daily matchs list 
        let filgoalResult = await filgoalResponse.json();

        await Matches.deleteMany();
        await playlists.deleteMany();
        filgoalResult = filgoalResult.filter((m) => m.ChampionshipId === 1362 || m.ChampionshipId === 1367 || m.ChampionshipId === 1373 || m.ChampionshipId === 1574 || m.ChampionshipId === 1379 || m.ChampionshipId === 1380 || m.ChampionshipId === 1453 || m.ChampionshipId === 1384 || m.ChampionshipId === 1390 || m.ChampionshipId === 1391 || m.ChampionshipId === 1284 || m.ChampionshipId === 1223).map((e) => {
            const id = randomUUID()
            const date = parseInt(e.Date.match(/\d+/)[0])
            const Match = {
                id,
                channel: e.TvCoverage[0]?.TvChannelName.toLocaleLowerCase() ?? "",
                title: e.Slug,
                StartTime: date,
                EndTime: date + 2 * 60 * 60 * 1000,
                teamA: e.HomeTeamName,
                teamA_logo: e.HomeTeamLogoUrl.split("//")[1],
                teamB: e.AwayTeamName,
                teamB_logo: e.AwayTeamLogoUrl.split("//")[1],
                voteA: 0,
                voteB: 0,
                competition_name: e.ChampionshipName,
                stadium: e.StadiumName,
                week: e.WeekOrRound
            }

            return Match
        })

        filgoalResult.sort((a, b) => {
            const aTime = a.StartTime
            const bTime = b.StartTime
            if (aTime > bTime)
                return 1
            else if (aTime < bTime)
                return -1

            return 0
        })

        const newMatchesList = new Matches({
            rows: filgoalResult.length,
            Matches: filgoalResult,
        })
        await newMatchesList.save()

        console.log("----------------------------------------------------------\nFetched the latest matches successfuly\n----------------------------------------------------------");

        filgoalResult.forEach(async (match) => {
            if (match.channel.includes("bein")) {
                const newMatch = new playlists({
                    id: match.id,
                    title: match.title,
                    StartTime: match.StartTime,
                    teamA: match.teamA,
                    teamB: match.teamB,
                })
                await newMatch.save()
                // useScheduleStream(match.id, match) //commanding this will make the system dont schedule stream
            }
        });

        // for test 

        // [{
        //         id: "13asc-1wqq3dsad-12sd",
        //         channel: "trt1",
        //         title: "trt 1 yayin testi",
        //         StartTime: (new Date()).getTime() + 3 * 60 * 1000,
        //         EndTime: (new Date()).getTime() + 40 * 60 * 1000,
        //         teamA: "galatasaray",
        //         teamA_logo: "",
        //         teamB: "liverpool",
        //         teamB_logo: "",
        //         voteA: 0,
        //         voteB: 0,
        //         competition_name: "champions league",
        //         stadium: "kou",
        //         week: 39
        //     }].forEach(async (match) => {
        //         if (match.channel) {
        //             console.log("useScheduleStream in the loop");
        //             const newMatch = new playlists({
        //                 id: match.id,
        //                 title: match.title,
        //                 StartTime: match.StartTime,
        //                 teamA: match.teamA,
        //                 teamB: match.teamB,
        //             })
        //             await newMatch.save()
        //             useScheduleStream(match.id, match)
        //         }
        //     });

    } catch (error) {
        console.log("error from UseFetchMatches: ", error);
    }
}

export default UseFetchMatches;
