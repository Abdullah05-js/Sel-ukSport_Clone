import express from "express";
const router = express.Router();


//routers
import MatchsListRouter from "./MatchsList.js";
import AdminLoginRouter from "./AdminLogin.js"
import ActiveStreams from "./ActiveStreams.js"
import Banlist from "./Ban.js"
import CheckBan from "./CheckBan.js"

router.use("/Matchs", MatchsListRouter);
router.use("/Admin", AdminLoginRouter);
router.use("/ActiveStreams", ActiveStreams);
router.use("/BanUser", Banlist);
//router.use("/CheckBan", CheckBan);
export default router;