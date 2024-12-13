import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";


export default function Product() {
  return (
    <main className="" id="one">
      <div className="w-full h-[300px] flex justify-center items-center mt-16">
        <div className="w-[86%] h-full">
          {/* Top content */}
          <div className="flex justify-between ">
           <div>
          
            <h2 className="text-[32px]  font-semibold mt-2 -tracking-tight">
              {" "}
              Featured Products
            </h2>
            </div>
            <div>
           <div className="flex gap-x-3 mt-12 mr-3 ">
             <span className="bg-gray-100 rounded-full w-[30px] h-[30px] flex justify-center items-center"> <FaArrowLeft /></span> 
             <span className="bg-gray-100 rounded-full w-[30px] h-[30px] flex justify-center items-center"> <FaArrowRight /></span> 

            </div>


            </div>
          </div>
          {/* main Contant */}
          <div className="gap-[30px] flex justify-between mt-7">
            <div className="">
              <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
                <span className="bg-green-600 text-[12px] text-white p-1 rounded-md absolute  mr-[150px] mb-[110px]">
                  New
                </span>
               <Link href="/productone"> <Image
                  src="/images/product-01.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image></Link>
              </div>
             <div className="flex flex-col mt-8">
                <span className="text-green-700 font-sans">Library Stool Chair</span>
                <span>$120</span>
                <span className="flex text-yellow-500 mt-2">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className="text-gray-500 font-sans">(88)</span>

                </span>

              </div>
            </div>

            <div>
              <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
                <span className="bg-orange-600 text-[12px] text-white rounded-md p-1 absolute  mr-[150px] mb-[110px]">
                  Sales
                </span>
                <Link href="producttow">
                <Image
                  src="/images/product-02.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image></Link>
              </div>
              <div className="grid drid-col mt-8">
                <span className="text-gray-500 font-sans">Library Stool Chair</span>
                <span>$120</span>
                <span className="flex text-yellow-500 mt-2">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className="text-gray-500 text-[12px]">(88)</span>

                </span>
              </div>
            </div>
            <div>
              <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
                
              <Link href="productthree">
                <Image
                  src="/images/product-03.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image></Link>
              </div>
              <div className="grid drid-col mt-8">
                <span className="text-gray-500 font-sans">Library Stool Chair</span>
                <span>$120</span>
                <span className="flex text-yellow-500 mt-2">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              <div className="text-gray-500"><IoMdStar /></div>  
              <span className="text-gray-500 text-[12px]">(75)</span>
                </span>
              </div>
            </div>
            <div>
              <div className="w-[200px] h-[150px] bg-gray-200  flex justify-center items-center">
                
              <Link href="productfour">
                <Image
                  src="/images/product-04.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image></Link>
              </div>
              <div className="grid drid-col mt-8">
                <span className="text-gray-500 font-sans">Library Stool Chair</span>
                <span>$120</span>
                <span className="flex text-yellow-500 mt-2">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              <div className="text-gray-500"><IoMdStar /></div>  
              <span className="text-gray-500 text-[12px]">(75)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </main>
  );
}
