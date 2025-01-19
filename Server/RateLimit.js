import rateLimit from "express-rate-limit";
import useMail from "./Hooks/useMail.js";

export const LimitUserLogin = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), req.ip);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});


