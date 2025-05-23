import dotenv from "dotenv"
dotenv.config();
import nodemailer from "nodemailer";

const useMail = async (name, ip = "") => {

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
      <h1>THODEX.LİVE</h1>
    </div>
    <div>
      <p>${name}</p>
      <p>${ip}</p>
    </div>
    <div >
     
    </div>
  </div>
`
  try {
    await transporter.sendMail({
      from: "thodex.live <kurasporthd@gmail.com>",
      to: "abdallhameed2005@gmail.com",
      subject: "Önemli",
      html: html,
  
    })
  } catch (error) {
    console.log(error);
  }

  console.log("mail send successfully");

}


export default useMail;