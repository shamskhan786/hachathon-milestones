import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export default function ProductTwo() {
  return (
    <main className="border-b-2 mt-12">
      <div className="w-full h-[300px] flex justify-center items-center mt-24">
        <div className="w-[86%] h-full">
          {/* Top content */}
          <div className="flex justify-between ">
           <div>
          
            <h2 className="text-[32px]  font-semibold mt-2 -tracking-tight">
              {" "}
              Top categories
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
          <div className=" flex justify-between mt-7 gap-x-3">
            <div className="">
              <div className="w-[380px] h-[380px] bg-gray-200 flex justify-center items-center rounded-md">
              
                <Image
                  src="/images/productTwo-01.png"
                  alt="image"
                  width="424"
                  height="424"
                ></Image>
              </div>
             
            </div>

            <div>
              <div className="w-[380px] h-[380px] bg-gray-200 flex justify-center items-center rounded-md">
                
                <Image
                  src="/images/productTwo-02.png"
                  alt="image"
                  width="424"
                  height="424"
                ></Image>
              </div>
             
            </div>
            <div>
              <div className="w-[380px] h-[380px] bg-gray-200 flex justify-center items-center rounded-md">
                
                <Image
                  src="/images/productTwo-03.png"
                  alt="image"
                  width="424"
                  height="424"
                ></Image>
              </div>
              
            </div>
            <div>
            
            </div>
          </div>
        </div>
      </div>
     
    </main>
  );
}
