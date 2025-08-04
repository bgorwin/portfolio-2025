"use client";

// import Image from "next/image";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
  

export default function Home() {

  return (
    <>
      <Navigation />
      <div className="flex items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="px-20">
            <Hero />
          </div>
          
          <div className="px-20 bg-gray-700 py-20 w-full">
            <About />
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
         
        </footer>
      </div>
    </>
  );
}
