import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
   <div className="w-full h-[203px] flex justify-center items-center ">
     <div className="w-full h-full border-b-2 border-gray-200 font-sans ">
      {/* Top Header */}
     <div className="flex justify-center items-center bg-blue-950">
     <div className="w-[86%] h-[45px] bg-blue-950 flex justify-between items-center text-gray-300">
        <div className="flex justify-center items-center gap-x-3 ">
          <div className="flex">
            <Image
              src="/images/check-image-01.png"
              alt=""
              width={15}
              height={11}
            />
          </div>
          <div className="tracking-3 leading-4">
            Free shipping on all orders over $50
          </div>
        </div>
        <div className="flex gap-x-5 justify-center items-center w-[300px] h-[30px] ">
          <select
            name="currency"
            id="currency"
            className="w-[50px] h-[33px] border border-none rounded-sm bg-transparent"
          >
            <option className="text-gray-500" value="English">Eng</option>
            <option  className="text-black" value="Chinies">Chin $</option>
            <option  className="text-black" value="Urdu">Urdu</option>
          </select>
          <section>
            <Link href="/faqs">Faqs</Link>
          </section>
          <section>
            <div className="flex gap-x-3 justify-center items-center">
              <div>
                <Link href="#">
                  <Image
                    src="/images/top-header-image-2.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div>
                <p className="tracking-[1px] leading-3 cursor-pointer">
               <Link href="/needhelp">Need Help</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
     </div>

      {/* main Header */}
      <div className="w-full h-[84px] flex justify-center items-center bg-gray-200">
      <div className="w-[86%] h-full flex justify-between">
        {/* left containt */}

        <div className="flex justify-center items-center gap-x-3">
          <div className="ml-3">
            <Image
              src="/images/logo-image-03.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <span>
            <p className="text-[27px]">Comforty</p>
          </span>
        </div>
        {/* right containt */}

        <div className="flex justify-center items-center mr-3">
          <div className="w-[140px] h-[55px] bg-white flex justify-center items-center gap-x-3 rounded-md p-3">
        <div>
        <Link href="/cart"> <FiShoppingCart className="w-[25px] h-[25px]" /></Link>
            </div>
            <div>
            
            <Link href="/cart"><p>Cart</p></Link>
            
            </div>
            <div className="w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center text-white">
              2
            </div>
          </div>
        </div>
      </div>
      </div>
       {/* end Header */}
       <div className="w-full h-[74px] flex justify-center items-center">
       <div className="w-[86%] h-full flex justify-between items-center">
          {/* left containt */}
           <div>
            <ul className="flex gap-x-10 ml-3 text-gray-500 text-[17px]">
                <li className= " text-green-700"><Link href="/">Home</Link></li>
                <li className="hover:text-green-700"><Link href="/shop">Shop</Link></li>
                <li className="hover:text-green-700"><Link href="/product">Product</Link></li>
                <li className="hover:text-green-700"><Link href="/singlepage">Pages</Link></li>
                <li className="hover:text-green-700"><Link href="/about">About</Link></li>
                {/* <li><Link href="/contact-us">Contact Us</Link></li> */}
            </ul>
        
           </div>
          <div>
        <div className="mr-3">
            <p className="text-[17px] text-gray-500 hover:text-green-700 hover:font-bold hover:text-[18px] "><Link href="/contact-us">Contact: <span className="font-bold text-black">(808) 555-0111</span></Link></p></div>
          </div>
         </div>
       </div>
    </div>
   </div>
  );
}
