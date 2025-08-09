"use client";

// import Image from "next/image";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import AboutSection from "./components/about";
import ProjectSection from "./components/projectSection";
  

export default function Home() {
  const projects: [Project, Project, Project] = [
  {
    title: "Coffee Passport",
    description: "Vue app to track café visits, ratings, and tasting notes.",
    href: "https://your-demo-1.com",
    imageSrc: "/projects/coffee-passport.jpg",
    imageAlt: "Coffee Passport app screenshot",
  },
  {
    title: "Service Tracker",
    description: "Next.js tool for motorcycle service departments to track jobs.",
    href: "https://your-demo-2.com",
    imageSrc: "/projects/service-tracker.jpg",
    imageAlt: "Service Tracker dashboard UI",
  },
  {
    title: "Videography Portfolio",
    description: "React site with smooth page transitions and CMS-driven content.",
    href: "https://your-demo-3.com",
    imageSrc: "/projects/videography-portfolio.jpg",
    imageAlt: "Videography portfolio grid of projects",
  },
];

  return (
    <>
      <Navigation />
      <div className="w-full">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="w-full h-[600px] flex items-center justify-center">
            <Hero />
          </div>
          
          <div className="w-full">
            <AboutSection />
          </div>

          <div className="w-full">
            <ProjectSection projects={projects}  />
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
         
        </footer>
      </div>
    </>
  );
}
