import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/dbConnect.js";
import bodyParser from "body-parser";
import { LimitUserLogin, LimitCreateLiveStream, LimitActiveStreams, LimitPublicStream, LimitBan, LimitMatches } from "./RateLimit.js";
import BanIP from "./db/Schemas/banIP.js";
import mainRoute from "./Routers/index.js"
import helmet from "helmet";
import UseFetchMatches from "./Hooks/useFetchMatches.js";
dotenv.config();
const app = express();
app.use(helmet())

const allowedOrigin = ['http://localhost:3000'];
const Cors = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(async (req, res, next) => {
  if (req.path === "/api/CheckBan") {
    return next();
  }
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const banned = await BanIP.findOne({ ip });
  if (banned) {
    return res.status(403).json({ message: "Access forbidden" });
  }
  next();
})


// app.use((req, res, next) => {
//   const requestOrigin = req.headers.origin;

//   if (requestOrigin === allowedOrigin) {
//     next();
//   } else {
//     res.status(403).json({ message: 'Access forbidden. ip saved' });
//   }

// });

export const loggedIPs = new Set();

app.use((req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  loggedIPs.add(ip);
  next();
});

app.use(cors(Cors));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  const origin = req.get('Referer')  || req.get('Origin');
  console.log('Headers:',req.url);
  next();
});

app.use("/api/Admin", LimitUserLogin);
app.use("/api/CreateLiveStream/validateStreamKey", LimitCreateLiveStream);
app.use("/api/ActiveStreams/admin/create", LimitActiveStreams);
app.use("/api/ActiveStreams/admin/edit", LimitActiveStreams);
app.use("/api/ActiveStreams/admin/read", LimitActiveStreams);
app.use("/api/ActiveStreams/admin/public", LimitPublicStream);
app.use("/api/BanUser/Ban", LimitBan);
app.use("/api/Matches", LimitMatches);
app.use("/api", mainRoute);

setInterval(UseFetchMatches, 6 * 60 * 60 * 1000);

app.listen(process.env.PORT, async () => {

  await connect();
 UseFetchMatches(); //trun this in production
  console.log(`server working on ${process.env.PORT} port `)
});
