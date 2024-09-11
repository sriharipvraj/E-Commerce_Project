import React from "react";
import menImg from "../../../public/_categoryimages/men.jpg";
import womenImg from "../../../public/_categoryimages/women.jpg";
import kidsImg from "../../../public/_categoryimages/kids.jpg";
import accessoriesImg from "../../../public/_categoryimages/accessories.jpg";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

const Category = () => {
  const categoryList = [
    {
      image: menImg,
      categoryName: "men",
    },
    {
      image: womenImg,
      categoryName: "women",
    },
    {
      image: accessoriesImg,
      categoryName: "accessories",
    },
    {
      image: kidsImg,
      categoryName: "kids",
    },
  ];

  return (
    <div className="md:p-10 flex flex-col items-center ">
      <div>
        <h1 className="text-global-font-h6 md:text-global-font-h1 font-extrabold text-cyan-900" >Categories</h1>
      </div>
      <div>
        <p className="text-cyan-500 font-semibold md:font-bold p-3" >Shop for your whole family</p>
      </div>
      <div className="grid md:grid-cols-3 w-3/4 gap-5 md:h-3/4 h-1/2 grid-cols-1">
        <div className="" >
         
            <CategoryCard
              src={categoryList[0].image}
              name={categoryList[0].categoryName}
            />
         
        </div>
        <div>
          <CategoryCard
            src={categoryList[1].image}
            name={categoryList[1].categoryName}
          />
        </div>
        <div className="flex flex-col md:gap-0.5 gap-5 ">
            <div ><CategoryCard
            src={categoryList[2].image}
            name={categoryList[2].categoryName}
            className={"md:h-48"}
          /></div>
          <div >
          <CategoryCard
            src={categoryList[3].image}
            name={categoryList[3].categoryName}
            className={"md:h-48"}
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
