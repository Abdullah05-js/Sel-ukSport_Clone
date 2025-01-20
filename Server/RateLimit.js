import rateLimit from "express-rate-limit";
import useMail from "./Hooks/useMail.js";

export const LimitUserLogin = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to login` );
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});

export const LimitCreateLiveStream = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to create live stream` );
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});


export const LimitActiveStreams = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to create live stream` );
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});


export const LimitBan = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n is you master?` );
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});


