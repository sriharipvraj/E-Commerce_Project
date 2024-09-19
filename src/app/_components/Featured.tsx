import React from "react";
import img1 from "../../../public/_featuredProductImg/perfume.jpg";
import img2 from "../../../public/_featuredProductImg/watch.jpg";
import img3 from "../../../public/_featuredProductImg/wallet.jpg";
import img4 from "../../../public/_featuredProductImg/sunglass.jpg";
import img5 from "../../../public/_featuredProductImg/men.jpg";
import img6 from "../../../public/_featuredProductImg/kids.jpg";
import img7 from "../../../public/_featuredProductImg/women.jpg";
import FeaturedCard from "./FeaturedCard";
import { frontendApi } from "../api/fontendApi";

const Featured = async () => {
  const response = await frontendApi.HomeFeaturedProducts();
  console.log("kshdgcvkcv", response.data.data.featuredProducts);
  const homeFeatured = response.data.data.featuredProducts;

  return (
    <div className="flex flex-col items-center p-10 md:p-20 ">
      <div>
        <h1 className="font-bold text-global-font-h5 md:text-global-font-h2 p-5 text-cyan-900">
          Featured Products
        </h1>
      </div>
      <div className="flex   items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {homeFeatured.map((i: any, idx: any) => (
            <FeaturedCard
              key={idx}
              images={i.productImage}
              name={i.productName}
              description={i.productDescription}
              price={i.productPrice}
              id={i._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
