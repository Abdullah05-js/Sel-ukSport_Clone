import mongoose from "mongoose";


const playlistsSchema = mongoose.Schema({
    id: String,
    title: String,
    StartTime: Number,
    teamA: String,
    teamB: String,
})


const playlists = mongoose.model("playlists", playlistsSchema);

export default playlists;