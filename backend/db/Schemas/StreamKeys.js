import mongoose from "mongoose";


const StreamsSchema = mongoose.Schema({
   name: {
      required: true,
      type: String
   },
   links: {
      required: true,
      type: [String]
   }
})



const StreamLinks = mongoose.model("StreamLinks", StreamsSchema)

export default StreamLinks;