"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

type NextProjectProps = {
  currentSlug: string;
};

export default function NextProject({
  currentSlug,
}: NextProjectProps) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  if (currentIndex === -1 || projects.length < 2) {
    return null;
  }

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-5 pb-24 pt-20 text-white md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto max-w-[1600px]">

        {/* TOP LINE */}
        <div className="mb-10 flex items-center justify-between border-t border-white/15 pt-5 md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Next Project
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            {nextProject.number} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group block"
        >
          <div className="relative overflow-hidden">

            {/* PROJECT IMAGE */}
            <motion.div
              className="relative aspect-[16/9] overflow-hidden bg-[#151515] md:aspect-[2/1]"
              whileHover={{ scale: 0.985 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={nextProject.cover}
                alt={`${nextProject.title} — ${nextProject.category}`}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                sizes="100vw"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/5" />

              {/* ARROW */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl text-black md:h-28 md:w-28 md:text-3xl"
                  initial={{
                    scale: 0.8,
                    opacity: 0.9,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  ↗
                </motion.div>
              </div>

              {/* IMAGE LABEL */}
              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Continue exploring
                </p>

                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-white/80">
                  {nextProject.category}
                </p>
              </div>
            </motion.div>

            {/* PROJECT TITLE */}
            <div className="flex flex-col gap-5 border-b border-white/10 py-6 md:flex-row md:items-end md:justify-between md:py-8">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                  {nextProject.number}
                </p>

                <h2 className="text-[15vw] font-medium uppercase leading-[0.78] tracking-[-0.09em] md:text-[10vw]">
                  {nextProject.title}
                  <span className="text-white/20">.</span>
                </h2>
              </div>

              <div className="flex items-center gap-3 pb-2 md:pb-4">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/35 transition-colors duration-300 group-hover:text-white">
                  View project
                </span>

                <span className="text-lg text-white/35 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/#work"
            className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-white/35 transition-colors hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to all work
          </Link>

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/20">
            Timmynuel Creatures®
          </p>
        </div>
      </div>
    </section>
  );
}