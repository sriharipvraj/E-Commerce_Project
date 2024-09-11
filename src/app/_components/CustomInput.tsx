import cn from "@/utils/tailwind";
import React, { HTMLInputTypeAttribute } from "react";
import {  UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  className: string;
  register?: UseFormRegisterReturn;
  
};

const CustomInput = ({ type, placeholder, className,register }: Props) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...register}
        
      />
    </div>
  );
};

export default CustomInput;
