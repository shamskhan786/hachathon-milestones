import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
<div className='w-full h-[850px] flex justify-center items-center'>
   
<div className='w-[86%] h-full bg-gray-200 flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 '>
   {/* left containt */}
   <div className='w-[700px] h-full flex justify-center items-center '>
      <div className='w-[557px] h-[337px]'> 
        <div className='text-gray-500'><p>Welcome to chairy</p></div>
        <div className='text-[60px] font-bold'>Best Furniture
Collection for your
interior.</div>
<button className='w-[171px] h-[50px] rounded-md bg-blue-700 text-white hover:bg-blue-400 hover:text-black'>Shop Now</button>
</div> 
   </div>

   {/* Right containt */}
   <div className='flex justify-center items-center'>
  <div className='w-[557px] h-[584px]'>
  <Image
              src="/images/hero-section-image-01.png"
              alt=""
              width={434}
              height={584}
            />
  </div>
   </div>
</div>
    
</div>
  )
}
