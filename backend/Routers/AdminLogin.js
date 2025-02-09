import speakeasy from "speakeasy";
import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import useMail from "../Hooks/useMail.js";
dotenv.config();


router.post("/validOTP", async (req, res) => {
  try {
    const { UserToken } = req.body
    const verify = speakeasy.totp.verify({
      secret: process.env.validLoginKey,
      encoding: 'base32',
      token: UserToken,
      window: 2 // bu 30 saniye geçikme için
    })

    if (verify) {
      const token = jwt.sign({ id: req.ip }, process.env.JWT_KEY, {
        expiresIn: 60 * 30,
      })
      if (token) {
        useMail(req.get('User-Agent'), `${req.ip} \n tryed to login`);
        return res.status(200).json({
          status: true,
          token
        })
      }
    }
      
     return res.status(403).json({
        status: verify
      })
    } catch (error) {
      res.status(403).json({
        status: false,
      })
    }
  })

router.post("/login", async (req, res) => {
  const { password, userName } = req.body;
  console.log("loged in");
  const status = process.env.pass === password && userName === process.env.user
  res.status(200).json({
    status
  })
})



// router.post("/createToken",async (req,res) => {

//    const key =  speakeasy.generateSecret()


//     res.status(200).json(key)
// })

export default router