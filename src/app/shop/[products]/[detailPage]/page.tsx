
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../../../public/_featuredProductImg/men.jpg";
import ButtonPage from "@/_components/page";


const DetailPage = async (params: any) => {
 
  const res = await fetch(
    `https://dummyjson.com/products/${params.params.detailPage}`
  );
  const detail = await res.json();

  console.log(detail);

  return (
    <div className="grid  md:grid-cols-2 md:gap-10 md:p-20 md:px-80  p-5  ">
      <div className="grid justify-end relative  ">
        <Image
          fill
          className="object-contain"
          src={detail.images.at(0)}
          alt=""
        />
      </div>
      <div className="grid md:grid md:justify-start justify-center ">
        <div className="md:text-center text-center flex flex-col  md:justify-center">
          <h1 className="text-cyan-900 md:text-global-font-h4 text-global-font-h4 font-extrabold">
            {detail.title}
          </h1>
          <h2 className="text-global-color-blue font-bold md:text-global-font-h5 text-global-font-h5">
            {detail.description}
          </h2>
          <h3 className="text-cyan-900 font-extrabold">Rs.{detail.price}</h3>
          <div>
            <ButtonPage
             detail={detail}
              
              name={"Buy Now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
