import cn from '@/utils/tailwind';
import  Image, { StaticImageData } from 'next/image';
import React from 'react';



type Props={
    src:StaticImageData;
    className?:String;
    alt?:String;
    name:String;
}

const CategoryCard = ({src,className,alt,name}:Props) => {
  return (
    <div className= {cn("w-full h-96 relative",className

    )}>
      <Image className="absolute object-cover" alt='' fill src={src}/>
      <div className='absolute bottom-10 left-10 bg-slate-100 px-2 font-semibold'>{name}</div>
    </div>
  );
}

export default CategoryCard;
