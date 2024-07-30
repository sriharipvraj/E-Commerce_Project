"use client";
import React, { useState } from "react";
import cImg1 from "../../../public/_bannerimages/b15.jpg";
import cImg2 from "../../../public/_bannerimages/b16.jpg";
import cImg3 from "../../../public/_bannerimages/b14.jpg";
import Image from "next/image";
import Next from "../../../public/greater-than-solid.svg";
import Previous from "../../../public/less-than-solid.svg";
import clsx from "clsx";
import cn from "@/utils/tailwind";

const Carousal = () => {
  const carousalImages = [
    {
      Image: cImg1,
      text: {
        heading: "Offer Season !",
        subheading: "Upto 50% Off!!",
        description: "Grab yor discount before season ends",
      },
    },
    {
      Image: cImg2,
      text: {
        heading: "Exciting Gifts ! ! ! !",
        subheading: "Get exciting gifts for every purchase",
        description: "Dont forget your gift for purchase above 9999/-",
      },
    },
    {
      Image: cImg3,
      text: {
        heading: "Free Delivery",
        subheading: "Delivery at your door for free",
        description:
          "Free delivery at your door step for purchase above 5999/-",
      },
    },
  ];
  const length = carousalImages.length;

  const [carousalIdx, setCarousalIdx] = useState(0);

  const next = () => {
    setCarousalIdx(carousalIdx + 1);
    if (carousalIdx === length - 1) {
      setCarousalIdx(0);
    }
  };
  const previous = () => {
    if (carousalIdx <= 0) {
      setCarousalIdx(length - 1);
    } else {
      setCarousalIdx(carousalIdx - 1);
    }
  };

  return (
    <div className="relative w-full h-[30rem] ">
      <Image
        className="absolute h-full  inset-0 object-cover"
        src={carousalImages[carousalIdx].Image}
        alt=""
      />
      <div className={cn("absolute inset-0 flex flex-col items-center justify-center ",{

      })}>
        <h1 className="font-bold md:text-global-font-h1 text-[20px] ">
          {carousalImages.at(carousalIdx)?.text.heading}
        </h1>
        <p className="text-[12px] md:text-global-font-h4">
          {carousalImages.at(carousalIdx)?.text.subheading}
        </p>
        <p className="font-bold text-[9px] md:text-global-font-h5 ">
          {carousalImages.at(carousalIdx)?.text.description}
        </p>
      </div>
      <div
        className="md:w-5 absolute top-60 md:left-10 left-6 md:hover:w-10 hover:w-5  hover:bg-[#0d2942] md:hover:p-2 hover:p-1 w-2   "
        onClick={previous}
      >
        <Previous />
      </div>
      <div
        className="md:w-5 w-2 absolute top-60 md:right-10  right-6  md:hover:w-10 hover:w-5  hover:bg-[#0d2942] md:hover:p-2 hover:p-1   "
        onClick={next}
      >
        <Next />
      </div>
    </div>
  );
};

export default Carousal;
