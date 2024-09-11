"use client"
import { useCart } from '@mrvautin/react-shoppingcart';
import React from 'react';
 

type props={
    name:string;
    onClick?:()=>void
    detail?:any
} 

const ButtonPage = ({name,onClick,detail}:props) => {
    const { addItem } = useCart();
  return (
    <div>
      <button  onClick={() =>
                addItem({
                  id: detail.id,
                  name: detail.title,
                  price: detail.price,
                  ...detail,
                })} className='bg-cyan-950 text-white font-semibold p-2 rounded-xl '>{name}</button>
    </div>
  );
}

export default ButtonPage;
