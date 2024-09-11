import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center  p-32'>
      <div className='pb-5'><h1 className='text-global-font-h2 font-extrabold text-purple-900'>Thank You For Your Order</h1></div>
      <div className='pb-5 text-pink-700'>
        <h1 className='font-extrabold'>Estimated Delivery</h1>
        <h1 className='text-center font-semibold'>June 5,2025</h1>
      </div>
      <div className='pb-5 font-semibold text-gray-700 text-center'>
        <p>We emailed you a order confirmation,<br/> and we will notify you when order has shipped.</p>
      </div>
      <div className='flex gap-3'>
       <div> <Link href={"/orderdetails"}><button className='border p-2 px-8 hover:bg-gradient-to-l from-purple-500 to-pink-500     bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg'>Order Details</button></Link></div>
        <div><Link href={"/shop"}><button className='border p-2 hover:bg-gradient-to-r from-purple-500 to-pink-500     bg-gradient-to-l from-purple-500 to-pink-500 text-white rounded-lg'>Continue Shopping</button></Link></div>
      </div>

    </div>
  );
}

export default page;
