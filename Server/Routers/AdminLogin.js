import speakeasy from "speakeasy";
import express from "express"
const router = express.Router();

router.post("/validOTP", async (req, res) => {
    const {UserToken} = req.body
    const verify = speakeasy.totp.verify({
        secret: process.env.validLoginKey,
        encoding: 'base32',
        token: UserToken,
        window:1 // bu 30 saniye geçikme için
    })
   

    if (verify) {
        return res.status(200).json({
            status: verify
        })
    }

    res.status(403).json({
        status: false
    })
})

router.post("/login", async (req, res) => {
    const {password,userName} = req.body;

  res.status(200).json({
    status:password === process.env.pass && userName === process.env.user
  })
})



// router.post("/createToken",async (req,res) => {

//    const key =  speakeasy.generateSecret()


//     res.status(200).json(key)
// })

export default router