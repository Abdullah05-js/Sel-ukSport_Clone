import schedule from "node-schedule"
import useLive from "./useLive.js"
import StreamLinks from "../db/Schemas/StreamKeys.js";


const useScheduleStream = async (id, Match) => {
    try {
        const MatchDateUnix = Match.StartTime
        const StreamStartDate = MatchDateUnix - 5 * 60 * 1000 // 5m before the match start 
        const StreamEndDate = MatchDateUnix + 2 * 60 * 60 * 1000

        // artık bu apiden çek filterle maç listesi burdan  https://www.beinsports.com/api/opta/tv-event?searchKey=&startBefore=2025-05-17T20%3A59%3A59.999Z&endAfter=2025-05-16T21%3A00%3A00.000Z&limit=3000&channelIds=7836FEA9-6B39-4A1A-8352-DC5FCB97A16C&channelIds=FD1DD7DD-1E7B-4AA2-8682-BFA17338E653

        const url = StreamLinks.findOne({
            name: Match.channel,
        })

        if (!url) {
            throw new Error("No tv channel provided")
        }

        schedule.scheduleJob(StreamStartDate, () => {
            useLive(url, id, StreamEndDate)
        })



    } catch (error) {
        console.log("error from useScheduleStream: ", error);
    }
}

export default useScheduleStream;