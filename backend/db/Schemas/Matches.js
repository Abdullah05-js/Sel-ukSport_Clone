import mongoose from "mongoose";

const MachesSchema = mongoose.Schema({
    liveScores: {
        type: Array,
        required: true,
    }
})

const Matches = mongoose.model("Matches", MachesSchema)

export default Matches;