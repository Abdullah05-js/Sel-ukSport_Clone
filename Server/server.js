import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./db/dbConnect.js";
import bodyParser from "body-parser";
import { LimitUserLogin } from "./RateLimit.js";
import mainRoute from "./Routers/index.js"
import UseFetchMatches from "./Hooks/useFetchMatches.js";
dotenv.config({ path: "../.env" });
const app = express();
// app.set('trust proxy', true);
const allowedOrigin = 'http://localhost:3000';
const Cors = {
  origin: (origin, callback) => {
    if (origin === allowedOrigin || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  maxAge: 600,
};

// app.use((req, res, next) => {
//   const requestOrigin = req.headers.origin;

//   if (requestOrigin === allowedOrigin) {
//     next();
//   } else {
//     res.status(403).json({ message: 'Access forbidden. ip saved' });
//   }

// });


app.use(cors(Cors));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/Admin_dfvkmdfv", LimitUserLogin);
app.use("/api", mainRoute);

app.get("/test", (req, res) => {
  res.status(200).json({
    password: "4wdcsk,A1",
    userName: "aposportHD",
  })
});

setInterval(UseFetchMatches,6 * 60 * 60 * 1000);


app.listen(process.env.PORT,async () => {

  await connect();
  //UseFetchMatches(); trun this in production
  console.log(`server working on ${process.env.PORT} port `)
});
