import mongoose from "mongoose";

const BanIPSchema = mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

const BanIP = mongoose.model("BanIP", BanIPSchema)

export default BanIP;