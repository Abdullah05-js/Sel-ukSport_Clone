import schedule from "node-schedule"
import useLive from "./useLive.js"
import StreamLinks from "../db/Schemas/StreamKeys.js";


const useScheduleStream = async (id, Match) => {
    try {
        const MatchDateUnix = Match.StartTime
        const StreamStartDate = MatchDateUnix - 5 * 60 * 1000 // 5m before the match start 
        const StreamEndDate = MatchDateUnix + 2 * 60 * 60 * 1000

        const url = await StreamLinks.findOne({
            name: Match.channel,
        })

        console.log("useScheduleStream in the func", url);


        if (!url) {
            throw new Error("No tv channel provided")
        }

        schedule.scheduleJob(StreamStartDate, () => {
            console.log("scheduling stream -> ", StreamEndDate);
            useLive(url.links[0], id, StreamEndDate)
        })



    } catch (error) {
        console.log("error from useScheduleStream: ", error);
    }
}

export default useScheduleStream;