import React from "react";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime, IoMdCheckmarkCircle } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="w-full h-[1050px] flex justify-center items-center mt-16">
      <div className="w-[86%] h-full font-sans justify-center items-center">
        {/* top containt */}
        <div className="flex-row justify-between items-center">
          <div className="grid justify-center items-center">
            <h1 className="text-[36px] font-bold ml-10">Get In Touch With Us</h1>
            <p className="text-gray-500 mt-5npmmrun">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br /> An Email. Our Staff Always Be There To Help
              You Out. Do Not Hesitate!
            </p>
          </div>
          <div className="flex justify-center items-center">
             <div className="w-[86%] h-[600px] flex justify-between">
              <div className="w-[200px] h-[300px] ml-40 mt-20 space-y-10">
                {/* icon div */}
               <div className="flex justify-between gap-x-2">
               <div><p><FaLocationDot />
               </p></div>
                 <div>
                <span className="font-bold">
                  <p>Address</p>
                </span>
                <span>
                  <p className="text-[15px]">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </span>
                </div>
               </div>
               <div className="flex justify-between gap-x-2">
               <div><p><FaPhoneAlt />
               </p></div>
                 <div>
                <span className="font-bold">
                  <p>Phone</p>
                </span>
                <span>
                  <p className="text-[15px]">
                  Mobile: +(84) 546-6789
                  Hotline: +(84) 456-6789
                  </p>
                </span>
                </div>
               </div>
               <div className="flex justify-between gap-x-2">
               <div ><p className=""><IoIosTime />
               </p></div>

                 <div>
                <span className="font-bold">
                  <p>Working time</p>
                </span>
                <span>
                  <p className="text-[15px]">
                  Monday-Friday: 9:00 - 22:00
                  Saturday-Sunday: 9:00 - 21:00
                  </p>
                </span>
                </div>
               </div>
              </div>

               {/* right form */}
            <div className="w-[400px] h-[500px] flex-row justify-center mt-20 mr-10">
              <form action="">
                <label className="block mt-5 ">Your name:</label> 
                <input type="name" className="px-20 py-3 mt-2 border border-gray-500 bg-transparent rounded-md focus:border-blue-500 focus:ring-blue-500" placeholder="Abc" />

                <label className="block mt-5 ">Email Address:</label>
                <input type="email" className="px-20 py-3 mt-2 border border-gray-500 bg-transparent rounded-md focus:border-blue-500 focus:ring-blue-500" placeholder="abc@gmail.com"  />

                <label className="block mt-5">Subject:</label>
                <input type="text" className="px-20 py-3 mt-2 border border-gray-500 bg-transparent rounded-md focus:border-blue-500 focus:ring-blue-500" placeholder="This is an optional"  />

                <label className="block mt-5">Messege:</label> 
               <textarea name="textarea"className="px-20 py-2 mt-3 border border-gray-500 bg-transparent rounded-md focus:border-blue-500 focus:ring-blue-500" placeholder="Hi! id like to ask about">
                
               </textarea>
              </form>
             <div>
             <button 
                type="submit" 
                 className="bg-cyan-600 text-white font-medium py-2 px-16 mt-5 rounded-md hover:bg-cyan-700 transition">
                Submit
             </button>
             </div>
            </div>
            
              
          </div>
            </div>
           
        </div>

        {/* last containt */}
        <div className="w-full h-[270px] bg-gray-200 mt-12 ">
          <div className="grid justify-items-center grid-cols-3 ">
          <div className="flex mt-24 gap-x-3">
             <span><BsFillTrophyFill className="text-[50px]" />
             </span>
             <div>
              <p className="text-[25px] font-semibold">High Quality</p>
              <p className="text-gray-500">crafted from top materials</p>
              </div>
          </div>

          <div className="flex mt-24 gap-x-3">
             <span><IoMdCheckmarkCircle className="text-[50px]" />
             </span>
             <div>
              <p className="text-[25px] font-semibold">High Quality</p>
              <p className="text-gray-500">crafted from top materials</p>
              </div>
          </div>

          <div className="flex mt-24 gap-x-3">
             <span><MdOutlineSupportAgent className="text-[50px]"  />
             </span>
             <div>
              <p className="text-[25px] font-semibold">High Quality</p>
              <p className="text-gray-500">crafted from top materials</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
