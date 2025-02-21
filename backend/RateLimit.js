import rateLimit from "express-rate-limit";
import useMail from "./Hooks/useMail.js";

export const LimitUserLogin = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to login`);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});

export const LimitCreateLiveStream = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to create live stream`);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});


export const LimitActiveStreams = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 165,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to LimitActiveStreams`);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});



export const LimitPublicStream = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n tryed to LimitPublicStream`);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});

export const LimitBan = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n is you master?`);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  }
});


export const LimitMatches = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 40,
  message: "Your ip have been saved",
  handler: (req, res) => {
    console.log(req.ip);
    useMail(req.get('User-Agent'), `${req.ip} \n is you master?`);
    res.status(429).json({ status: "ip saved.", ip: req.ip })
  },
});

// export const LimitMatchesVote = rateLimit({
//   windowMs: 12 * 60 * 60 * 1000,
//   max: totoalMatches,
//   message: "Your ip have been saved",
//   handler: (req, res) => {
//     console.log(req.ip);
//     res.status(429).json({ status: "ip saved.", ip: req.ip });
//   },
// });
