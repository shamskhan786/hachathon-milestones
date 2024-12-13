import React from 'react'
import Image from 'next/image'

export default function ProductList() {
  return (
    <div>
      <div className="w-full h-[600px] flex justify-center items-center mt-16 p bg-gray-200">
        <div className="w-[86%] h-[86%]">
       {/* Top containt */}
       <div className='flex-row justify-center items-center mt-5'>
        <div className=' flex justify-center items-center'>
            <p className='text-[40px] font-semibold mb-5'>Or subscribe to the newsletter</p>
            </div>
           <div>

           <div className=' flex justify-center items-center gap-x-5'>
           <input type="email" placeholder='Email Eddress' className='w-[600px] h-[50px] border-transparent border-b-3' />
            <button  className="border border-b-3 border-b-gray-800 font-sans" type='submit'>SUBMIT</button>
           </div> 
           </div>
       </div>

       {/* bottum containt */}
       <div className='flex justify-center items-center mt-10'>
        <p className='text-[40px] font-semibold'>Follow products and discounts on Instagram</p>
       </div>
       <div className='flex justify-between items-center mt-12'>
        <div>
        <Image
                  src="/images/product-01.png"
                  alt="image"
                  width="166"
                  height="166"
                ></Image>
        </div>
        <div>
        <Image
                  src="/images/productThree-image-01.png"
                  alt="image"
                  width="166"
                  height="166"
                ></Image>
        </div>
        <div>
        <Image
                  src="/images/productThree-image-02.png"
                  alt="image"
                  width="166"
                  height="166"
                ></Image>
        </div>
        <div>
        <Image
                  src="/images/productThree-image-03.png"
                  alt="image"
                  width="166"
                  height="166"
                ></Image>
        </div>
        <div>
        <Image
                  src="/images/productThree-image-04.png"
                  alt="image"
                  width="166"
                  height="166"
                ></Image>
        </div>
        <div>
        <Image
                  src="/images/productTwo-02.png"
                  alt="image"
                  width="166"
                  height="166"
                ></Image>
        </div>
       </div>
            
      </div>
    </div>
    </div>
  )
}
