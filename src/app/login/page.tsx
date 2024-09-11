"use client"
import Image from "next/image";
import React, { useState } from "react";
import loginImg from "../../../public/loginbg.jpg";
import Link from "next/link";
import CustomInput from "../_components/CustomInput";
import { Form, useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const logInSchema = z.object({
  email:z.string().email('Invalid Email'),
  password:z.string().min(8,'Minimum 8 characters required')
})
type typeOfLoginSchema = z.infer<typeof logInSchema >


const LoginPage = () => {
  
  const {
   register,
   handleSubmit,
   formState:{errors}

  }=useForm<typeOfLoginSchema>({
    resolver:zodResolver(logInSchema)
  })

  const onSubmit=(data:any)=>{

console.log("data::::",data);  
  }
    console.log("errors:::",errors);
    
  return (
    <div className="relative md:h-[35rem] h-[28rem]">
      <Image className="" fill src={loginImg} alt="" />

      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center ">
       <form onSubmit={handleSubmit(onSubmit)} className="bg-white md:p-10 flex flex-col justify-center items-center text-center gap-7 p-5 w-3/4  md:w-1/4 rounded-lg ">
            <div className="w-full">
              <h1 className="text-global-font-h4 text-cyan-900 font-bold">Log in to your account</h1>
              <p className="text-[14px] font-semibold">Please enter your details! </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
             <div>
              <CustomInput register={register("email")} type='email' placeholder={"Email"}  className={"w-full border rounded-xl p-1 px-3"}/>
              <p>{errors.email?.message}</p>
             </div>
             <div><CustomInput type='password'   placeholder={"Password"} className={"w-full border rounded-xl p-1 px-3"}/></div>
             <div>
              {/* <input {...register("email")} type="email" placeholder="Email" />

              <input {...register("password")} type="password" placeholder="password" />
              <p className="text-red-600">{errors.password?.message}</p> */}
             </div>
             
            </div>
            <div className="w-full">
              <button type="submit"  className="border w-full rounded-2xl py-1 font-semibold bg-[#FFC300] hover:bg-[#fcdc56]">Log In</button>
            </div>
            <div className="flex font-semibold gap-1">
              <h2 >Dont have an account?</h2>
              <Link className="text-[#b630c8]" href="/signup">SignUp</Link>
            </div>
          </form>
       </div>
    </div>
  );
};

export default LoginPage;
