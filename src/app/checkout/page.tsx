"use client";
import React from "react";
import CustomInput from "../_components/CustomInput";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { useCart } from "@mrvautin/react-shoppingcart";
import Link from "next/link";
import { useForm } from "react-hook-form";

const CheckOutPage = () => {
  const { items, totalItemsAmount } = useCart();
  const{register,handleSubmit}=useForm();
  const onSubmit=(data:any)=>{
    console.log("Billing Details---------------",data);
    

  }
  return (
    <div className="grid grid-cols-3 p-10   bg-gradient-to-l from-violet-100 to-fuchsia-200 ">
  
        <div className="grid justify-center col-span-2 ">
          <h1 className="pb-5 font-semibold text-global-font-h3">
            Billing Details
          </h1>
          <div className="flex gap-2">
            <div className="pb-5">
              <h1 className="pb-1">First Name</h1>
              <CustomInput
                
                type="text"
                placeholder={"Enter Your First Name"}
                className={"border border-black rounded-2xl p-5   "}
              />
            </div>
            <div className="pb-5">
              <h1 className="pb-1">Last Name</h1>
              <CustomInput
                type="text"
                placeholder={"Enter Your Last Name"}
                className={"border  border-black rounded-2xl p-5  "}
              />
            </div>
          </div>
          <div className="pb-5">
            <h1 className="pb-1">Phone</h1>
            <CustomInput
              type="text"
              placeholder={"Enter Your Pone Number"}
              className={"border  border-black rounded-2xl p-5 w-full "}
            />
          </div>
          <div className="pb-5">
            <h1 className="pb-1">Email Address</h1>
            <CustomInput
              type="email"
              placeholder={"Enter Your Email"}
              className={"border  border-black rounded-2xl p-5 w-full "}
            />
          </div>
          <div className="pb-5">
            <h1 className="pb-1">Address</h1>
            <CustomInput
              type="text"
              placeholder={"Enter Your Address"}
              className={"border  border-black rounded-2xl p-5 w-full "}
            />
          </div>
          <div className="pb-5">
            <h1 className="pb-1">ZIP Code</h1>
            <CustomInput
              type="text"
              placeholder={"ZIP"}
              className={"border  border-black rounded-2xl p-5 w-full "}
            />
          </div>
          <div className="pb-5">
            <Fieldset className="space-y-8">
              {/* <Legend className="text-lg ">Shipping details</Legend> */}
  
              <Field>
                <Label className="block">Country</Label>
                <Select
                  className="mt-1 block w-full border border-black rounded-2xl p-5 "
                  name="country"
                >
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>United States</option>
                  <option>India</option>
                </Select>
              </Field>
            </Fieldset>
          </div>
        </div>
      
      <div className="grid grid-rows-2 ">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-global-font-h3 font-semibold pb-10">
              {" "}
              Products
            </h1>
            {items.map((items, index) => (
              <h1 key={index} className=" pb-2">
                {items.name} x {items.quantity}
              </h1>
            ))}
            <h1>Total</h1>
          </div>
          <div>
            <h1 className="text-global-font-h3 font-semibold pb-10"> Amount</h1>
            {items.map((items, index) => (
              <h1 key={index} className=" pb-2">
                Rs. {items.price}
              </h1>
            ))}
            <h1 className="font-bold ">Rs. {totalItemsAmount}</h1>
            <div className="pt-5 rounded-md ">
             <Link href={"/confirmorder"}>
                <button className="hover:bg-gradient-to-l from-purple-500 to-pink-500     bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold p-2 rounded-md  ">
                  Confirm Order
                </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
