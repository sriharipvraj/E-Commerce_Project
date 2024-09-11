"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import del from "../../../public/x-mark.png";
import Proimg from "../../../public/_featuredProductImg/perfume.jpg";
import { useCart } from "@mrvautin/react-shoppingcart";
import Link from "next/link";

const CartPage = () => {
  const [isClient,setIsClient]=useState(false)
  const { items, removeItem, updateItemQuantity,cartTotal } = useCart();
  useEffect(() => {
    if(!isClient){
      setIsClient(true)
    }
  }, [isClient]);

  if(!isClient){
    return
  }
  return (
    <div>
      <h1 className="text-global-font-h1 font-extrabold text-center text-cyan-900 pt-8">
        Your Cart
      </h1>

      <div className=" grid grid-rows-2 md:grid-cols-3 md:p-10 md:py-20 md:gap-3  text-center font-semibold">
        <div className="md:hidden"></div>

        <div className="max-md:hidden col-span-2 md:gap-5">
          <table className="border-separate border-spacing-2 bg-slate-100 p-8 border-slate-500 md:w-full text-center  md:table-auto">
            <thead>
              <tr>
                <th className="  bg-slate-400">Product</th>
                <th className=" bg-slate-400">Price</th>
                <th className=" bg-slate-400">Quantity</th>
                <th className=" bg-slate-400">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((items, idx) => (
                <tr key={idx} className="p-5">
                  <td className="flex items-center justify-center gap-2 p-5">
                    <Image className="w-10" src={items.image} alt="" />
                    <h2>{items.name}</h2>
                  </td>
                  <td>{items.price}</td>
                  <td className="p-5">
                    <div className="flex items-center justify-center gap-5">
                      <button
                        onClick={() => updateItemQuantity(items, "decrease", 1)}
                      >
                        -
                      </button>
                      <div>{items.quantity}</div>
                      <button
                        onClick={() => updateItemQuantity(items, "increase", 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-5">{items.itemTotal}</td>
                  <td className="">
                    <Image
                      onClick={() => removeItem(items)}
                      className="w-7"
                      src={del}
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-100 pb-10">
          <div>
            <h1 className="p-10">Cart Total</h1>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <h1>Shipping</h1>
            <h1>20</h1>
            <h1>Total</h1>
            <h1>{ cartTotal.toFixed(2)}</h1>
          </div>
          <div className="p-4">
         <Link href={"/checkout"}>
              <button className="border border-black p-2 px-4 rounded-lg">
                Check Out
              </button>
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
