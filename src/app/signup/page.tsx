import React from 'react';
import loginImg from "../../../public/loginbg.jpg";
import Link from "next/link";
import CustomInput from "../_components/CustomInput";
import Image from 'next/image';
const SignUpPage = () => {
  return (
    <div className="relative h-[35rem]">
    <Image className="" fill src={loginImg} alt="" />

    <div className="absolute inset-0 z-50 flex flex-col justify-center items-center ">
     <div className="bg-white p-10 flex flex-col justify-center items-center text-center gap-7 w-1/4 rounded-lg ">
          <div className="w-full">
            <h1 className="text-global-font-h4 text-cyan-900 font-bold">Create your account</h1>
            <p className="text-[14px] font-semibold">Please enter your details! </p>
          </div>
          <div className="flex flex-col gap-3 w-full ">
           <div><CustomInput type='email' placeholder={"Email"} className={"w-full border rounded-xl p-1 px-3"}/></div>
           <div><CustomInput type='password' placeholder={"Password"} className={"w-full border rounded-xl p-1 px-3"}/></div>
           <div><CustomInput type='password' placeholder={"Confirm Password"} className={"w-full border rounded-xl p-1 px-3"}/></div>
           
          </div>
          <div className="w-full">
            <button className="border w-full rounded-2xl py-1 font-semibold bg-[#FFC300] hover:bg-[#fcdc56]">Sign Up</button>
          </div>
          <div className="flex font-semibold gap-1">
            <h2>Already have an account?</h2>
            <Link className="text-[#b630c8]" href="/login">Login</Link>
          </div>
        </div>
     </div>
  </div>
  );
}

export default SignUpPage;
