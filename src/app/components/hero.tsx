import React from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';


export default function Hero() {
    useGSAP(() => {
        SplitText.create(".hero-title", {
            type: "lines",
            autoSplit: true,
            onSplit: (self) => {
                return gsap.from(self.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.05, 
                duration: 1,
                ease: "power3.out",
                });
            }
        });

        SplitText.create(".hero-description", {
            type: "lines",
            autoSplit: true,
            onSplit: (self) => {
                return gsap.from(self.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.5, 
                duration: 2,
                });
            }
        });
    }, []);

    return (
        <div className="hero-container w-full">
            <div className="hero-text">
                <h1 className="hero-title text-8xl pb-3">I’m Brent</h1>
                <p className="hero-description text-6xl"><span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Front-End Developer</span> who builds fast, accessible, and responsive web apps.</p>
            </div>
            
            <div className="py-7">
                <ul className="flex gap-4 text-2xl">
                    <li className="list-style-none"><a className="text-xl relative inline-block px-4 py-1  border border-transparent text-white transition-all duration-300 group" href="#"><span className="absolute inset-0 rounded-md border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></span><span className="relative z-10">Github</span></a></li>
                    
                    <li className="list-style-none"><a className="text-xl relative inline-block px-4 py-1  border border-transparent text-white transition-all duration-300 group" href="#"><span className="absolute inset-0 rounded-md border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></span><span className="relative z-10">LinkedIn</span></a></li>

                    <li className="list-style-none"><a className="text-xl relative inline-block px-4 py-1 border border-transparent text-white transition-all duration-300 group" href="#"><span className="absolute inset-0 rounded-md border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></span><span className="relative z-10">Resume</span></a></li>
                </ul>
            </div>
        </div>
    );
}

