import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';



type Props={
  images:StaticImageData|string;
  name:string;
  description:string;
  price:string;
  linkname?:string
  id?:number
}



const FeaturedCard = ({images,name,description,price,linkname,id}:Props) => {
  return (
    <div className=' w-full flex flex-col'>
     <Link href={"/shop/"+linkname+"/"+id}> <div className='relative w-full h-40'><Image priority fill  className=' '  src={images} alt=''/></div></Link>
      <div className='text-center'>
        <h1 className='text-global-font-h5 md:text-global-font-h4 font-bold text-cyan-900 '>{name}</h1>
        <h2 className='font-semibold text-[12px] text-global-color-blue'>{description}</h2>
        <h3 className='font-bold text-cyan-900 '>{price}</h3>
      </div>
    </div>
  );
}

export default FeaturedCard;
