"use client";
import NavigationBar from "@/components/NavigationBar";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Product from "@/components/Product";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-[#111825]">
            <header>
              <NavigationBar />
            </header>
            <div className="flex-1">
              <Banner />
              <Category />
              <Product />
            </div>
    
            <footer>
              <Footer />
            </footer>
    </div>
  )
}
