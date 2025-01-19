import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


const useMail = async (name, ip) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASS,
    },
  })


  const html = `
  <div >
    <div >
      <h1>APOSPORT.COM</h1>
    </div>
    <div>
      <p>Admin there is a Suspected moves from a user</p>
      <p>${name}</p>
      <p>${ip}</p>
    </div>
    <div >
     
    </div>
  </div>
`
  await transporter.sendMail({
    from: "APORSPORT.COM <kurasporthd@gmail.com>",
    to: "abdallhameed2005@gmail.com",
    subject: "Önemli",
    html: html,

  })

  console.log("mail send successfully");

}

export default useMail;