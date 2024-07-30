import React from 'react';
import FooterLinks from './FooterLinks';
import Facebook from "../../../../public/facebook-brands-solid.svg";
import Instagram from "../../../../public/instagram-brands-solid.svg";
import Twitter from "../../../../public/twitter-brands-solid.svg";

const Footer = () => {
  return (
    <div className='flex justify-between p-20 px-30 bg-[#f9fcde] max-md:flex-col max-md:justify-center max-md:gap-10  '>
        <div>
            <h1 className='font-bold text-global-font-h4 max-md:flex max-md:justify-center'>E-Commerce</h1>
        </div>
             

        <div className='flex flex-col gap-5 max-md:gap-2 '>
            <h1 className='font-bold text-global-font-h5 text-center'>Links</h1>
            <div className='font-semibold text-stone-500 max-md:flex max-md:justify-center'><FooterLinks/></div>
        

        </div>
        <div className='flex flex-col justify-center text-center gap-5 max-md:gap-2'>
            <h1 className='font-bold text-global-font-h5'>Get In Touch </h1>
            <p>Near Capitol Mall, Kannur</p>
            <div className='flex justify-between md:px-10 '>
                <Facebook className="w-6"/>
                <Instagram className="w-6"/>
                <Twitter className="w-6"/>

            </div>


        </div>
      
    </div>
  );
}

export default Footer;
