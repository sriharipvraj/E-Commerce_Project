import React from 'react';
import img1 from "../../../public/_featuredProductImg/perfume.jpg";
import img2 from "../../../public/_featuredProductImg/watch.jpg";
import img3 from "../../../public/_featuredProductImg/wallet.jpg";
import img4 from "../../../public/_featuredProductImg/sunglass.jpg";
import img5 from "../../../public/_featuredProductImg/men.jpg";
import img6 from "../../../public/_featuredProductImg/kids.jpg";
import img7 from "../../../public/_featuredProductImg/women.jpg";
import FeaturedCard from './FeaturedCard';


const Featured = () => {
    const featuredProductsList=[
        {
            image:img1,
            name:"Perfumes",
            description:"Long lasting fragrance",
            price:"$150 Onwards"
        },
        {
            image:img2,
            name:"Watches",
            description:"Value your time",
            price:"$200 Onwards"
        },
        {
            image:img3,
            name:"Wallet",
            description:"Leather Wallets ",
            price:"$100 Onwards"
        },
        {
            image:img4,
            name:"Sunglass",
            description:"stylish designs",
            price:"$50 Onwards"
        },
        {
            image:img5,
            name:"Men Accessories",
            description:"Enhance your manhood",
            price:"$80 Onwards"
        },
        {
            image:img6,
            name:"Kids Toys",
            description:"Happy Kids ",
            price:"$20 Onwards"
        },
        {
            image:img7,
            name:"Women Accessories",
            description:"Feminine Urge ",
            price:"$20 Onwards"
        }
    ]
  return (
    <div className='flex flex-col items-center p-10 md:p-20 '>
      <div>
        <h1 className='font-bold text-global-font-h5 md:text-global-font-h2 p-5 text-cyan-900'>Featured Products</h1>
      </div>
      <div className='flex   items-center justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 '>
          {featuredProductsList.map((i,idx)=>(
                   <FeaturedCard key={idx} images={i.image} name={i.name} description={i.description} price={i.price}/>
          ))}
      </div>
       
      </div>
    </div>
  );
}

export default Featured;
