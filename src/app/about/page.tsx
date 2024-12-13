import Image from "next/image";
import { TbBus } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";




export default function About() {
  return (
    <main className="">
      <div className="w-full h-[1350px] flex justify-center items-center mt-16">
        <div className="w-[86%] h-full">
          {/* top containt */}

          <div className="grid grid-cols-2 grid-rows-[440px] gap-x-3">
            <div className="bg-cyan-700">
              <div className="p-10 text-white space-y-3">
                <h1 className="font-bold text-[32px]">About Us - Comforty</h1>
                <p className="text-gray-50">
                  At Comforty, we believe that the right chair can transform
                  your space and elevate your comfort. Specializing in ergonomic
                  design, premium materials, and modern aesthetics, we craft
                  chairs that seamlessly blend style with functionality.{" "}
                </p>
               
              </div>
              <div className="mt-32 ml-10 text-white">
                <button className="bg-cyan-600 px-10 py-4">View collection</button>
                </div>
            </div>

            <div className="bg-red-400">
              <Image 
              src="/images/about-image-01.png"
              alt=""
              width="672"
              height="478" />
            </div>
          </div>

          {/* main containt */}
          <div className="mt-16">
            <div className="flex justify-center ">
             <h1 className="text-[28px] font-bold">What makes our Brand Different</h1>
            </div>

            <div className="grid grid-cols-4 mt-16 text-cyan-500 gap-x-5">
             <div className="bg-gray-200 p-10 space-y-4">
              <span><TbBus className="text-[25px]"/></span>
              <h1 className="text-[20px]">Next day as standard</h1>
              <p>Order before 3pm and get your order the next day as standard</p>
             </div>
             <div className="bg-gray-200 p-10 space-y-4">
              <span><IoIosCheckmarkCircleOutline className="text-[25px]" />
              </span>
              <h1  className="text-[20px]">Made by true artisans</h1>
              <p>Handmade crafted goods made with real passion and craftmanship</p>
             </div>
         
             <div className="bg-gray-200 p-10 space-y-4">
              <span><BiPurchaseTag className="text-[25px]"/></span>
              <h1  className="text-[20px]">Unbeatable prices</h1>
              <p>For our materials and quality you won’t find better prices anywhere</p>
             </div>
             <div className="bg-gray-200 p-10 space-y-4">
              <span><LuSprout className="text-[25px]"/></span>
              <h1  className="text-[20px]">Recycled packaging</h1>
              <p>We use 100% recycled to ensure our footprint is more manageable</p>
             </div>
         
         
            </div>
          </div>

          {/* Last containt */}

          <div className="mt-16">
            <div>
              <h1 className="font-bold text-[32px]">Our Popular Products </h1>
            </div>

            <div className="grid grid-cols-[550px_265px_265px] gap-x-10 mt-5
            ">
               <div className="">
               <Image 
              src="/images/about-image-02.png"
              alt=""
              width="630"
              height="370" />
               </div>
               <div className=" ">
               <Image 
              src="/images/about-image-03.png"
              alt=""
              width="305"
              height="375" />
               </div>
               <div className=" ">
               <Image 
              src="/images/about-image-04.png"
              alt=""
              width="305"
              height="375" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
