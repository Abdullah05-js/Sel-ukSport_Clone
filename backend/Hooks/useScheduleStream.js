import schedule from "node-schedule"
import useLive from "./useLive";
import StreamLinks from "../db/Schemas/StreamKeys";
const useScheduleStream = async (id, Match) => {
    try {
        const MatchDateUnix = parseInt(Match.Date.match(/\d+/)[0])
        const StreamStartDate = MatchDateUnix - 10 * 60 * 1000 // 10m before the match start 


        //https://jdwel.com/wp-json/jmanager/web/v1/match/159835 gives a match detials by id 
        //https://jdwel.com/wp-json/jmanager/web/v1/live/matches/?today todays match list
        //https://jdwel.com/wp-json/jmanager/web/v1/competitions gives all competitions

        const url = ""


        if (!url) {
            throw new Error("No tv channel provided")
        }

        schedule.scheduleJob(StreamStartDate, () => {
            useLive(url, id)
        })
    } catch (error) {
        console.log("error from useScheduleStream: ", error);
    }
}

export default useScheduleStream;