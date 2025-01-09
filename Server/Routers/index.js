import express from "express";
const router = express.Router();


//routers
import PostRouter from "./post.js";


router.use("/post", PostRouter);


export default router;