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

        //Todo  re Build this hook with bein sport api https://www.beinsports.com/api/opta/tv-event?searchKey=&startBefore=2025-05-18T00:59:59.999Z&endAfter=2025-05-17T00:00:00.000Z&limit=3000&channelIds=7836FEA9-6B39-4A1A-8352-DC5FCB97A16C&channelIds=FD1DD7DD-1E7B-4AA2-8682-BFA17338E653&channelIds=8AEA2426-D451-4BA5-BF48-114A1F04B1A8&channelIds=DB9361E8-B3EB-4D6F-9A82-75B5F09E2F92&channelIds=964E6246-CA95-410B-82C4-EA75DD979435&channelIds=E24D9C11-A8B4-4C7F-AD3E-B3364FB6D5A2&channelIds=A892063B-A5D9-4199-95AC-6A214515FA6B

        console.log(TargetDate, startBefore);

        const filgoalResponse = await fetch(`https://www.filgoal.com/matches/ajaxlist?date=${TargetDate}`);
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

        filgoalResult.forEach(async ({ id,
            title,
            StartTime,
            teamA,
            teamB,
            channel
        }) => {
            if (channel.includes("bein")) {
                const newMatch = new playlists({
                    id,
                    title,
                    StartTime,
                    teamA,
                    teamB,
                })
                await newMatch.save()
                // useScheduleStream(match.id, match)
            }
        });



    } catch (error) {
        console.log("error from UseFetchMatches: ", error);
    }
}

export default UseFetchMatches;
