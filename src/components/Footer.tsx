
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiPinterestFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";




export default function Footer() {
    return (
      <main className="">
        <div className="w-full h-[250px] flex justify-center items-center mt-32 border-t-2 border-b-2   ">
          <div className="w-[86%] h-full   ">
          {/* Top Footer */}
          <div className="w-full h-[200px] flex justify-between items-center font-sans border-gray-200 mt-10   ">
            
            {/*containt 01  */}
        <div className="w-[250px] h-full flex-col justify-items-start mt-5">
                
        <div className="flex justify-center items-center gap-x-3 mr-5">
          <div className="">
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
        <div className="mt-5">
            <span className="leading-[24px] text-gray-500">
            Vivamus tristique odio sit amet velit semper eu posuere turpis interdum.
            Cras egestas purus 
            </span>

        </div>
        {/* social media icons */}
           
           <div className="flex gap-x-4 mt-5">
            <div><a href="www.facebook.com"><CiFacebook /></a>
            </div>
            <div><a href="www.twitter.com"><FaTwitter/></a></div>
            <div><a href="www.instagram.com"><CiInstagram /></a>
            </div>
            <div><a href="www.pinteres.com"><RiPinterestFill /></a>
            </div>
            <div><a href="www.youtube.com"><FaYoutube /></a>
            </div>
           </div>

            </div>
            {/* containt 02 */}
           <div className="w-[70%] h-[200px] flex justify-between">

            <div className="flex-row gap-5">
                <div className="text-gray-500 mb-3"><p>Category</p></div>
               <div className="ml-2">
               <p>Sofa</p>
                <p>Armchair</p>
                <p>Wing Chair</p>
                <p className="text-cyan-600 underline underline-offset-2">Desk Chair</p>
                <p>wooden Chair</p>
               <p>Park Bench</p>
               </div>

            </div>
            {/* containt 03 */}
            <div>
            <div className="flex-row gap-5 ">
                <div className="text-gray-500 mb-3"><p>Support</p></div>
               <div className="ml-2">
               <p>Help & Support</p>
                <p>Tearms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Help</p>
             
               </div>

            </div>
             </div>
             {/* containt 04 */}
            <div>
            <div className="flex-row gap-5">
                <div className="text-gray-500 mb-3"><p>Newsletter</p></div>
               <div >
                <input className="bg-gray-100 border border-gray-300 rounded-sm" type="email" placeholder="Inter your email" />
                <button className="bg-cyan-900 text-white px-5 py-2 ml-3 rounded-lg">Subscribe</button>
               <p className="ml-2 text-[15px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam tincidunt erat enim.</p>
             
               </div>

            </div>
            </div>
            
            </div>
          </div>

          {/* Bottum Footer */}
          <div className="w-full h-[75px] flex justify-between items-center">

           <div className="text-gray-300"><p>@ 2021 - Blogy - Designed & Develop by <b>Zakirsoft</b></p></div>
           <div className="flex justify-center items-center gap-x-2 mr-3 ">
          <div>
          <Image
                  src="/images/footer-image-1.png"
                  alt="image"
                  width="36"
                  height="22"
                ></Image>
            </div> 
            <div>
          <Image
                  src="/images/footer-image-2.png"
                  alt="image"
                  width="56"
                  height="15"
                ></Image>
            </div> 
            <div>
          <Image
                  src="/images/footer-image-3.png"
                  alt="image"
                  width="50"
                  height="17"
                ></Image>
            </div> 
            <div>
          <Image
                  src="/images/footer-image-4.png"
                  alt="image"
                  width="55"
                  height="18"
                ></Image>
            </div> 
          
           </div>
          </div>
          </div>
        </div>
       
      </main>
    );
  }
  