import React from "react";
import Image from "next/image";


export default function ProductThree() {
  return (
    <div className="w-full h-[648px] flex justify-center items-center mt-48">
    <div className="w-[86%] h-full mt-36">
        {/* main containt */}
        <div className="grid grid-cols-[500px_305px_305px] grid-rows-[305px_305px] gap-x-5 gap-y-7">
        
         <div className="row-span-2 ">
         <Image
                  src="/images/productThree-image-01.png"
                  alt="image"
                  width="500"
                  height="648"
                ></Image>
         </div>
         <div className="bg-red-300 ">
         <Image
                  src="/images/productThree-image-02.png"
                  alt="image"
                  width="312"
                  height="320"
                ></Image>
         </div>
         <div className="bg-red-300 ">
         <Image
                  src="/images/productThree-image-04.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
         </div>
          <div className="bg-red-300">
         <Image
                  src="/images/productThree-image-03.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
         </div>
         <div className="bg-red-300 ">
         <Image
                  src="/images/productThree-image-04.png"
                  alt="image"
                  width="312"
                  height="312"
                ></Image>
         </div>
            </div> 
    </div>
    </div>
  );


}

  
