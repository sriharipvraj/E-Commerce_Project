import React from "react";
import FooterLinks from "./FooterLinks";
import Facebook from "../../../../public/facebook-brands-solid.svg";
import Instagram from "../../../../public/instagram-brands-solid.svg";
import Twitter from "../../../../public/twitter-brands-solid.svg";

const Footer = () => {
  return (
    <div className="flex justify-between p-10 px-30 bg-gradient-to-r from-violet-500 to-fuchsia-500 max-md:flex-col max-md:justify-center max-md:gap-10 ">
      <div>
        <h1 className="font-bold text-global-font-h4 max-md:flex max-md:justify-center text-white hover:text-global-color-blue">
          E-Commerce
        </h1>
      </div>

      <div className="flex flex-col gap-5 max-md:gap-2 ">
        <h1 className="font-bold text-global-font-h5 text-center text-white">
          Links
        </h1>
        <div className="font-bold text-white max-md:flex max-md:justify-center">
          <FooterLinks />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center gap-5 max-md:gap-2 text-white">
        <h1 className="font-bold text-global-font-h5">Get In Touch </h1>
        <p>Near Capitol Mall, Kannur</p>
        <div className="flex justify-between md:px-10 ">
          <Facebook className="w-6" />
          <Instagram className="w-6" />
          <Twitter className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
