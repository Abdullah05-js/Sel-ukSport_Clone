import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/dbConnect.js";
import bodyParser from "body-parser";
import { LimitUserLogin, LimitCreateLiveStream, LimitActiveStreams, LimitPublicStream, LimitBan } from "./RateLimit.js";
import mainRoute from "./Routers/index.js"
import helmet from "helmet";
import schedule from "node-schedule"

import UseFetchMatches from "./Hooks/useFetchMatches.js";
dotenv.config();
const app = express();
//----------
// //for cloudflare
app.set('trust proxy', 1);
//----------
app.use(helmet())
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//-------------------------
//Rate Limits
app.use("/api/Admin", LimitUserLogin);
app.use("/api/CreateLiveStream/validateStreamKey", LimitCreateLiveStream);
app.use("/api/ActiveStreams/admin/create", LimitActiveStreams);
app.use("/api/ActiveStreams/admin/edit", LimitActiveStreams);
app.use("/api/ActiveStreams/admin/read", LimitActiveStreams);
app.use("/api/BanUser/Ban", LimitBan);
//-------------------------
app.use("/api", mainRoute);

app.use("/hls", express.static('./hls'))

schedule.scheduleJob("0 8 * * *", UseFetchMatches)

app.listen(process.env.PORT, async () => {
  console.clear()
  await connect();
  await UseFetchMatches(); //un commant this in production

  console.log(`               
           |__   __| |         
              | |  | |__   ___ 
              | |  | '_ \ / _ \
              | |  | | | | (_) 
              |_|  |_| |_|\___/
          
              thodex.live              
🚀 Server running on http://localhost:${process.env.PORT}
🌐 Public URL: https://thodex.live
📅 Started at: ${(new Date()).toLocaleDateString()}

`)
});
