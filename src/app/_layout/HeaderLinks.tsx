import Link from 'next/link';
import React from 'react';

const HeaderLinks = () => {
    const headerLink=[
        {
            name:"HOME",
            link:"/"
        },
        {
            name:"SHOP",
            link:"/shop"
        },
        {
            name:"CONTACT",
            link:"/contact"
        },
        {
            name:"LOGIN",
            link:"/login"
        },

    ]
    return (
    <div className='font-bold flex gap-12 text-white max-md:flex-col '>
        {headerLink.map((i,idx)=>(
            <Link key={idx} className='hover:text-global-color-blue' href={i.link}>{i.name}</Link>
        ))}
      
    </div>
  );
}

export default HeaderLinks;
