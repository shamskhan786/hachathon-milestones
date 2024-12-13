import React from 'react'
import Image from 'next/image'
 import { FiShoppingCart } from 'react-icons/fi'
import { CiHeart } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Cart() {
  return (
    <div>
           <div className="w-full h-[400px] flex justify-center items-center mt-16">
             <div className="w-[86%] h-full flex justify-center items-center">
                <div className="w-full h-[80%] flex justify-between">
                     {/* left containt */}
                   <div className=''>
                   <div className='w-[750px] h-[200px] flex justify-between items-center border-b-2 border-gray-200'>
                  <div className='flex'>
                  <div className='w-[150px] h-[150px]'>
                    <Image
                  src="/images/product-02.png"
                  alt="image"
                  width="150"
                  height="150"
                  className='rounded-none'
                ></Image>
                  </div>
                 <div className='flex items-center text-gray-500 ml-5 '>
                     <div>
                        <p className='text-black'>Library Stool Chair</p>
                        <p className='mt-2'>Ashen Slate/Cobalt Bliss</p>
                       <div className='flex justify-between mt-3'>
                       <p>Size 1</p>
                       <p>  Quality</p>
                       </div>

                       <div className='flex text-black  mt-3'>
                        <span><CiHeart  className='text-[20px]'/>
                        </span>
                        <span className='ml-3'><RiDeleteBin6Line />
                        </span>
                       </div>
                       </div>
                    </div>
                   
                  </div>
                    
                  <div className='text-black'>
                    <p>MRP: $99</p>
                  </div>
                     </div>
                     {/* second image */}
                     <div className='w-[750px] h-[200px] flex justify-between items-center border-b-2 border-gray-200'>
                  <div className='flex'>
                  <div className='w-[150px] h-[150px] bg-gray-700 rounded-md'>
                    <Image
                  src="/images/product-03.png"
                  alt="image"
                  width="150"
                  height="150"
                  className='rounded-none'
                ></Image>
                  </div>
                 <div className='flex items-center text-gray-500 ml-5 '>
                       <div>
                        <p className='text-black'>Library Stool Chair</p>
                        <p className='mt-2'>Ashen Slate/Cobalt Bliss</p>
                       <div className='flex justify-between mt-3'>
                       <p>Size 1</p>
                       <p>  Quality</p>
                       </div>
                        <div className='flex text-black  mt-3'>
                        <span><CiHeart  className='text-[20px]'/>
                        </span>
                        <span className='ml-3'><RiDeleteBin6Line />
                        </span>
                       </div>
                       </div>
                    </div>
                   
                  </div>
                  <div className='text-black'>
                    <p>MRP: $99</p>
                  </div>
                     </div> 
                   </div>
                      {/* Right containt */}
                      <div className='flex mt-12 ml-5'>
                       
                       <div className='w-[350px] h-[170px]'>
                         <p className='text-[21px] '>Summary</p>
                         <div className='flex justify-between items-center mt-10 h-[100px]  border-b-2 border-gray-200'>
                          <div>
                            <p>Subtotal</p>
                            <p className='text-[15px] mt-5'>Estimated Delivery & Handling</p>
                          </div>
                          <div className='mt-3 ml-10'>
                            <p>$198.00</p>
                            <p>Free</p>
                          </div>
                         
                         </div>
                         <div className='border-b-2 border-gray-200 flex justify-between mt-5 h-[40px]'>
                         <span>Totul</span>
                         <span>$198.00</span>
                         </div>
                         <button className='bg-cyan-600 text-white rounded-3xl px-20 py-3 mt-10 hover:bg-cyan-700 flex'>  <FiShoppingCart className="w-[25px] h-[25px] mr-5" /> Add To Card</button>

                       </div>

                       
                     </div>
                    
                </div>

             </div>
         </div>
        
     </div>
  )
}
