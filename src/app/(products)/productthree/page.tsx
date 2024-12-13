import React from 'react'
import Image from 'next/image'
 import { FiShoppingCart } from 'react-icons/fi'
import SinglePageTwo from '@/app/singlepage/singlepageTwo/page'

export default function SinglePage() {
  return (
    <div id='one'>
           <div className="w-full h-[600px] flex justify-center items-center mt-16">
             <div className="w-[86%] h-fullflex justify-center items-center">
                <div className="w-full h-[80%] flex justify-between">
                     {/* left containt */}
                     <div className='w-1/2 h-full '>
                     <Image
                  src="/images/product-03.png"
                  alt="image"
                  width="480"
                  height="480"
                  className='rounded-none'
                ></Image>
                     </div>
                      {/* Right containt */}
                      <div className='flex-row justify-center items-center mr-10'>
                       <div className='border-b-2 h-[250px]'>
                        <p className='text-[60px] font-bold'>Library Stool <br />Chair</p>
                        <button className='bg-cyan-600 text-white rounded-xl px-3'>$20.00 USD</button>
                       </div>
                        <div className='mt-5'>
                          <p className='text-gray-500'>
                          Lorem ipsum dolor sit amet, consectetur adipiscingfffff <br /> elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br />sit amet, consectetur adipiscing
                          </p>
                          <button className='bg-cyan-600 text-white rounded-md px-10 py-3 mt-5 flex'>  <FiShoppingCart className="w-[25px] h-[25px] mr-5" /> Add To Card</button>

                        </div>
                     </div>
                    
                </div>

             </div>
         </div>
         <SinglePageTwo/>
    </div>
  )
}
