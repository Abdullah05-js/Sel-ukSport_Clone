import mongoose from "mongoose";


const StreamsSchema = mongoose.Schema({
   keys:Object
})



const StreamKeys = mongoose.model("StreamKeys", StreamsSchema)

export default StreamKeys;