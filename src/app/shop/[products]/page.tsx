import React from "react";
import FeaturedCard from "@/app/_components/FeaturedCard";

const page = async (params: any) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${params.params.products}`
  );
  const productList = await res.json();
  const data = await productList.products;


  return (
    <div className="flex flex-col items-center p-10 md:p-20 ">
      <div>
        <h1 className="font-bold text-global-font-h5 md:text-global-font-h2 p-5 text-cyan-900 capitalize">
          {params.params.products}
        </h1>
      </div>
      <div className="flex   items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {data.map((item: any, idx: number) => (
            <FeaturedCard
              linkname={params.params.products}
              key={idx}
              images={item.images.at(0)}
              name={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
