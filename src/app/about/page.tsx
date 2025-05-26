"use client";
import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "../components/navigation";
import { fadeUpText } from "../animations/fadeUpText";


  

export default function Home() {
  const linesRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    fadeUpText(linesRef.current);
  }, []);
  

  return (
    <>
      <Navigation />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex flex-col md:flex-row lg:flex-row gap-[32px] justify-start">
            <div className="flex flex-col flex-3/4 gap-[8px]">
              <h1 className="blcok heading-1 text-9xl font-bold text-white"  ref={(el) => (linesRef.current[0] = el)}>About Page</h1>
            </div>
            <div className="flex flex-col flex-1/4 justify-center gap-[8px] h-auto">
              <p className="text-2xl text-gray-400">Software Engineer</p>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
