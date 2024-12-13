import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export default function SinglePageTwo() {
  return (
    <main className="">
      <div className="w-full h-[300px] flex justify-center items-center mt-16">
        <div className="w-[86%] h-full">
          {/* Top content */}
          <div className="flex justify-between ">
           <div>
          
            <h2 className="text-[32px]  font-semibold mt-2 -tracking-tight">
              {" "}
              FEAUTURED PRODUCTS
            </h2>
            </div>
            <div>
           <div className="flex mt-3 gap-x-2 ">
             <span className="flex justify-center  items-center underline underline-offset-2"> <b>View all</b></span> 
             

            </div>


            </div>
          </div>
          {/* main Contant */}
          <div className="gap-[30px] flex justify-between mt-28">
            <div className="">
              <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
                <span className="bg-green-600 text-[12px] text-white p-1 rounded-md absolute  mr-[150px] mb-[110px]">
                  New
                </span>
                <Image
                  src="/images/product-01.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
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
                <Image
                  src="/images/product-02.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
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
                
                <Image
                  src="/images/product-03.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
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
                
                <Image
                  src="/images/product-04.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
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
                
                <Image
                  src="/images/productTwo-01.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
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
