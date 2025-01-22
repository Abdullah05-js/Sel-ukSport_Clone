import mongoose from "mongoose";


const playlistsSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    teamA:{
        type:String,
        required:true,
    },
    teamB:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    }
})


const playlists = mongoose.model("playlists",playlistsSchema);

export default playlists;