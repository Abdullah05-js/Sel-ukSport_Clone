import express from "express";
const router = express.Router();


//routers
import MatchsListRouter from "./MatchsList.js";
import AdminLoginRouter from "./AdminLogin.js"
import CreateLiveStream from "./CreateLiveStream.js"

router.use("/Matchs",MatchsListRouter);
router.use("/Admin_dfvkmdfv",AdminLoginRouter);
router.use("/CreateLiveStream",CreateLiveStream);

export default router;