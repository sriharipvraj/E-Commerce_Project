import React from 'react';
import CategoryCard from '../_components/CategoryCard';


const shopPage = async() => {
const response= await fetch('https://dummyjson.com/products/category-list');
const categoryList =await response.json();
// console.log(categoryList);



  return (
    <div className=''>
      <div>
        <h1 className='text-center font-extrabold text-global-font-h1 text-cyan-900 p-5 md:py-20'>Categories</h1>
      </div>
     <div className='grid md:grid-cols-3 md:gap-3 md:p-10 md:px-56 '>
      {categoryList.map((item:any,idx:number)=>(
        <div className='grid  ' key={idx}>
          <CategoryCard className={"md:h-60"}  name={item} />
          
        </div>
        
      ))}
      
     
     </div>
    </div>
  );
}

export default shopPage;
