"use client";
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">
            <header>
                <NavigationBar />
            </header>
    </div>
  )
}
