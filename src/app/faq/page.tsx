import React from "react";
import { BsPlusLg } from "react-icons/bs";


export default function Faq() {
  return (
    <div className="w-full h-[650px] flex justify-center items-center ">
      <div className="w-[86%] h-full flex-row justify-center ">
        <div className="h-[80px] mt-10">
          <div className="grid justify-items-center">
            <span>
              <h1 className="text-[38px] font-semibold">
                Questions Looks Here
              </h1>
            </span>
            <span>
              {" "}
              <p className="text-gray-500 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </span>
          </div>
        </div>
        <div className="w-full h-[400px] flex justify-center mt-16">
          <div className="grid grid-cols-[570px_570px] gap-5">
            <div className="bg-gray-100 flex justify-center items-center p-3">
           <div className="">
           <div className="flex justify-between ">
           <h1 className="text-[18px] font-bold">What types of chairs do you offer?</h1>
           <span> <BsPlusLg className="text-[25px]" />
           </span>
           </div>
              <p className="mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
           </div>
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-3">
           <div className="">
           <div className="flex justify-between ">
           <h1 className="text-[18px] font-bold">Do your chairs come with a warranty?</h1>
           <span> <BsPlusLg className="text-[25px]" />
           </span>
           </div>
              <p className="mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
           </div>
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-3">
           <div className="">
           <div className="flex justify-between ">
           <h1 className="text-[18px] font-bold">How can we get in touch with you?</h1>
           <span> <BsPlusLg className="text-[25px]" />
           </span>
           </div>
              <p className="mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
           </div>
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-3">
           <div className="">
           <div className="flex justify-between ">
           <h1 className="text-[18px] font-bold">What will be delivered? And When?</h1>
           <span> <BsPlusLg className="text-[25px]" />
           </span>
           </div>
              <p className="mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
           </div>
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-3">
           <div className="">
           <div className="flex justify-between ">
           <h1 className="text-[18px] font-bold">Can I try a chair before purchasing?</h1>
           <span> <BsPlusLg className="text-[25px]" />
           </span>
           </div>
              <p className="mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
           </div>
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-3">
           <div className="">
           <div className="flex justify-between ">
           <h1 className="text-[18px] font-bold">How do I clean and maintain my Comforty chair?</h1>
           <span> <BsPlusLg className="text-[25px]" />
           </span>
           </div>
              <p className="mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
