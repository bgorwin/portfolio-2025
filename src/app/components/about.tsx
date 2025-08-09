import React, { ReactNode } from "react";
import Image from "next/image";

/**
 * AboutSection – a responsive, accessible About Me section with
 * a light gray backdrop and subtle radial gradients.
 *
 * Props
 * - name: string – Your name
 * - title: string – Your role or headline
 * - bio: string | string[] – Paragraph(s) of copy
 * - imageSrc: string – Path to your photo (e.g. "/me.jpg")
 * - imageAlt: string – Accessible alt text for your photo
 * - actions?: React.ReactNode – Optional CTA buttons/links
 */

export type AboutSectionProps = {
  name?: string;
  title?: string;
  bio?: string | string[];
  imageSrc?: string;
  imageAlt?: string;
  actions?: ReactNode;
};

export default function AboutSection({
  name = "Brent Gorwin",
  title = "Front‑End Developer",
  bio = [
    "I build fast, accessible, and thoughtfully designed web apps with React, Next.js, and Tailwind CSS.",
    "Over the last four years, I've shipped production UIs, created reusable component systems, and partnered closely with design and product to deliver great experiences.",
  ],
  imageSrc = "/brent-profile-bw.png",
  imageAlt = "Portrait of Brent Gorwin",
  actions,
}: AboutSectionProps): JSX.Element {
  const paragraphs: string[] = Array.isArray(bio) ? bio : [bio];

  return (
    <section aria-labelledby="about-title" className="relative isolate overflow-hidden bg-slate-50">
      {/* Subtle radial gradient wash (blue + green) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_0%_0%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(900px_500px_at_100%_100%,rgba(16,185,129,0.10),transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column – text */}
          <div>
            <p className="text-sm font-medium tracking-wide text-emerald-700/90">About Me</p>
            <h2 id="about-title" className="mt-2 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              {name}
            </h2>
            <p className="mt-1 text-slate-600">{title}</p>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {/* Right column – portrait */}
          <figure className="relative mx-auto w-full max-w-sm">
            {/* Decorative ring */}
            <div
              className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-200/50 via-sky-200/40 to-transparent blur-2xl"
              aria-hidden
            />

            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl ring-1"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}