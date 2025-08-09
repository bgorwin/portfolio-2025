import React from "react";
import Image from "next/image";

export type Project = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};


export type ProjectsSectionProps = {
  heading?: string;
  subheading?: string;
  projects: [Project, Project, Project]; // exactly three for this layout
  ctaLabel?: string; // label for the action button on each card
};

/**
 * ProjectsSection – three project cards on a black background with subtle gradients.
 * Responsive, accessible, and keyboard‑friendly.
 */
export default function ProjectSection({
  heading = "Featured Projects",
  subheading = "Three personal builds I’m proud of.",
  projects,
  ctaLabel = "View Project",
}: ProjectsSectionProps): JSX.Element {
  return (
    <section aria-labelledby="projects-title" className="relative isolate overflow-hidden bg-black">
      {/* Subtle gradient washes for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(800px_400px_at_0%_10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(700px_380px_at_100%_90%,rgba(16,185,129,0.16),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_20%)]"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-emerald-400/90">Projects</p>
          <h2 id="projects-title" className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-white/70">{subheading}</p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <li key={idx} className="group relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:shadow-emerald-500/10">
                <figure className="overflow-hidden rounded-xl">
                  <Image
                    src={proj.imageSrc}
                    alt={proj.imageAlt}
                    width={500}
                    height={500}
                    className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </figure>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70 line-clamp-3">{proj.description}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <span className="relative">
                        {/* Button background with glassy gradient on hover */}
                        <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-emerald-500/80 to-sky-500/80 opacity-80 transition group-hover:opacity-100" />
                        <span className="absolute inset-0 -z-20 rounded-lg bg-white/10 backdrop-blur-sm" />
                        {ctaLabel}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}