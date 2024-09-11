import cn from '@/utils/tailwind';
import  Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from "../../../public/_categoryimages/men.jpg"



type Props={
    src?:StaticImageData;
    className?:String;
    alt?:String;
    name:String;
}

const CategoryCard = ({src,className,alt,name}:Props) => {
  return (
   <Link href={"/shop/"+ name}>
      <div className= {cn("w-full h-96 relative",className
  
      )}>
        <Image className="absolute object-cover" alt='' fill src={src?src:img}/>
        <div className='absolute bottom-10 left-10 bg-slate-100 px-2 font-semibold capitalize'>{name}</div>
      </div>
   </Link>
  );
}

export default CategoryCard;
