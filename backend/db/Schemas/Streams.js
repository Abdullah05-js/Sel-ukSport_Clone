import mongoose from "mongoose";


const StreamsSchema = mongoose.Schema({
    pid:Number,
    id:String,
    name:String,
    status:Boolean,
    hls:String,
    veiwers:Number,
})



const Stream = mongoose.model("Stream",StreamsSchema)

export default Stream;