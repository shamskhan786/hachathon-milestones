import Header from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";
import HeroTwo from "@/components/HeroTwo";
import Product from "@/components/Product";
import ProductTwo from "@/components/ProductTwo";
import ProductThree from "@/components/ProductThree";
import ProductFour from "@/components/ProductFour";
import Footer from "@/components/Footer";




export default function Home() {
  return (
   <div className="">
  
  
   <Hero/>
   <HeroTwo/>
   <Product/>
   <ProductTwo/>
   <ProductThree/>
   <ProductFour/>
  
   </div>

  );
}
