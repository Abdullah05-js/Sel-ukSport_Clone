import mongoose from "mongoose";

const MachesSchema = mongoose.Schema({
    rows: {
        required: true,
        type: Number
    },
    Matches: {
        required: true,
        type: [Object]
    }
})

const Matches = mongoose.model("Matches", MachesSchema)

export default Matches;