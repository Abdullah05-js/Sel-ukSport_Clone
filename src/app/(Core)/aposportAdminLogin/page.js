"use client"
import { InputOtp } from "@heroui/input-otp";
import { Input } from "@heroui/input";
import GradientText from "@/componets/GradientText/GradientText";
import Image from "next/image";
import logo from "@/Photos/APO_Big.png"
import axios from "axios"
import React, { useState } from "react";
import BanForm from "@/componets/Admin/BanForm";



export default function page() {
  const [Form, setForm] = useState({
    password: "",
    userName: "",
  })
  const [Status, setStatus] = useState({
    isLoged: false,
    isOtp: false
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Form.password !== "" && Form.userName !== "") {
        const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/Admin/login", Form);
        console.log(response);

        if(response.data.status)
        {
          setStatus({ ...Status, isLoged: response.data.status })
        }
        else
        {
          alert("password or ID wrong ip saved");
        }
      }
      else {
        alert("");
      }
    } catch (error) {
      console.log(error);
      alert("password or ID wrong ip saved");
    }
  }

  const handleSubmitOtp = async (e) => {

    try {
      if (e) {
        const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/Admin/validOTP", {
          UserToken: e
        });

        if(response.data.status)
          {
            setStatus({ ...Status, isOtp: response.data.status });
            localStorage.setItem("token", JSON.stringify(response.data.token));
          }
          else
          {
            alert("password or ID wrong ip saved");
          }
      }
      else {
        alert("");
      }
    } catch (error) {
      console.log(error);
      alert("password or ID wrong ip saved");
    }
  }

  const FormHtml = () => {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
        <Input
          className="max-w-xs"
          label="ID"
          required
          onChange={(e) => setForm({ ...Form, userName: e.target.value })}
          type="text"
          variant="bordered"
          value={Form.userName}
          color="success"
        />

        <Input
          className="max-w-xs"
          label="Password"
          required
          onChange={(e) => setForm({ ...Form, password: e.target.value })}
          type="password"
          variant="bordered"
          value={Form.password}
          color="success"
        />

        <GradientText
          colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
          animationSpeed={2}
          showBorder={true}
          className="text-xl font-bold p-2  text-center"
        >
          <button type="submit text-2xl font-bold">Submit</button>
        </GradientText></form>
    )
  }

  const FormHtmlOtp = () => {
    return (
      <>
        <InputOtp size="lg" length={6} onComplete={handleSubmitOtp} variant={"bordered"} color="success" />
      </>
    )
  }

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen overflow-auto gap-4">

      <GradientText
        colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
        animationSpeed={2}
        className="text-xl font-bold p-2  text-center"
      >
        <h1 className="text-2xl">Admin Panel</h1>
      </GradientText>
      <GradientText
        colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
        animationSpeed={3}
        showBorder={true}
        className="text-xl font-bold p-2  text-center"
      >
        <Image src={logo} className='object-cover rounded-lg' alt="kura.com" />
      </GradientText>


      {
        !Status.isLoged ? <FormHtml /> : !Status.isOtp ? <FormHtmlOtp /> : <BanForm />
      }



    </div>
  );
}
