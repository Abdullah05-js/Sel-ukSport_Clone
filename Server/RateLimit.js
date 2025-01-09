import rateLimit from "express-rate-limit";


export const LimitUserLogin = rateLimit({
  windowMs: 5 * 60 * 10000,
  max: 5,
  message: "LAN spamlama aq ya görüyorum seni ip'in de var piç",
});
