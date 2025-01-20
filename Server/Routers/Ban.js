import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import { loggedIPs ,BannedIps} from "../server.js";
router.post("/BanList", async (req, res) => {
   try {
    const { token } = req.body;
    jwt.verify(token,process.env.JWT_KEY)
    res.status(200).json({  
        loggedIPs:Array.from(BannedIps).map((e) => e) 
    })
   } catch (error) {
    res.status(400).json({
        status:error.message
    })
   }
})

router.post("/Ban", async (req, res) => {
    try {
     const { token,ip} = req.body;
     jwt.verify(token,process.env.JWT_KEY)
     BannedIps.add(ip);
     console.log(BannedIps);
     res.status(200).json({  
         status:`${ip} got banned`
     })
    } catch (error) {
     res.status(400).json({
         status:error.message,
     })
    }
 })




export default router