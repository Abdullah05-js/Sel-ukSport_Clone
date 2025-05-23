import express from "express";
const router = express.Router();

//routers
import MatchsListRouter from "./MatchsList.js";
import AdminLoginRouter from "./AdminLogin.js"
import ActiveStreams from "./ActiveStreams.js"

router.use("/Matchs", MatchsListRouter);
router.use("/Admin", AdminLoginRouter);
router.use("/ActiveStreams", ActiveStreams);
export default router;