import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import {
  LimitUserRegister,
} from "./RateLimits.js";
import mainRoute from "./Routers/index.js";
dotenv.config({path:"../.env"});
const app = express();
const Cors = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  maxAge: 600,
};

app.use(cors(Cors));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users/register", LimitUserRegister);


app.use("/api", mainRoute);

app.listen(process.env.PORT, async () => {

  await connect();
  console.log(`server working on ${process.env.PORT} port `);
});
