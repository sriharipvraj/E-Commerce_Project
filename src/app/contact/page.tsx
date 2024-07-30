import React from "react";
import cimg from "../../../public/contactusimage.jpg";
import Image from "next/image";
import Location from "../../../public/location.svg";
import Phone from "../../../public/call.svg";
import Mail from "../../../public/Email.svg";

const ContactUs = () => {
  return (
    <div className="w-full ">
      <div className="relative ">
        <Image className="h-[40rem] object- " src={cimg} alt="" />
      </div>
      <div className="absolute inset-0 top-32 md:p-36 md:px-56 flex flex-col md:gap-10 ">
        <div className="flex flex-col items-center md:gap-5 ">
          <h1 className="font-extrabold text-cyan-900 text-global-font-h5 md:text-global-font-h3">
            Contact Us
          </h1>
          <p className="text-cyan-900 font-semibold md:font-[30px]">
            Feel free to reach out to us with any questions, concerns, or
            feedback. Our team is dedicated to providing you with the support
            and assistance you need. Contact us today and let us know how we can
            help!
          </p>
        </div>


        <div className="grid  md:grid-cols-3 gap-2 bg-slate-300 px-3 py-2 bg-opacity-40 rounded-md ">


          <div className="flex items-center ">
            <div className="w-8 ">
              <Location />
            </div>
            <div className="flex flex-col">
              <h1 className="text-center font-bold max-md:text-[15px]">ADDRESS</h1>
              <p>Near Capitol Mall Kannur-2</p>
            </div>
          </div>



          <div className="flex items-center">
            <div className="w-8">
              <Phone />
            </div>
            <div className="flex flex-col">
              <h1 className="text-center font-bold">CALL</h1>
              <p>+91 8921853696</p>
            </div>
          </div>




          <div className="flex items-center gap-1">
            <div className="w-8">
              <Mail />
            </div>
            <div className="flex flex-col">
              <h1 className="text-center font-bold">EMAIL</h1>
              <p>srihari@ecommerce.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
