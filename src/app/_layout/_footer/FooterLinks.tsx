import Link from 'next/link';
import React from 'react';

const FooterLinks = () => {
    const footerLink=[
        {
            name:"Login",
            link:"/login"
        },
        {
            name:"Contact",
            link:"/contact"
        },
        {
            name:"Shop",
            link:"/shop"
        }
    ]
  return (
    <div>
      {footerLink.map((i,idx)=>(
        <Link className='p-3' href={i.link}>{i.name}</Link>
      ))}
    </div>
  );
}

export default FooterLinks;
