"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

export default function Hero() {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const project = projects[activeProject];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-5 pb-6 pt-28 text-white md:px-10 md:pb-8 md:pt-32">
      {/* ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-white/[0.035] blur-[120px] md:h-[600px] md:w-[600px]" />

        <div className="absolute bottom-[-10%] right-[5%] h-80 w-80 rounded-full bg-white/[0.025] blur-[130px] md:h-[500px] md:w-[500px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.6px, transparent 0.6px)",
            backgroundSize: "7px 7px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1600px] flex-col justify-between">
        {/* TOP INFO */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#d9ff64]" />

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/50 md:text-[10px]">
              Independent Designer & Visual Creative
            </p>
          </div>

          <p className="hidden text-[10px] uppercase tracking-[0.16em] text-white/30 sm:block">
            Nigeria — 2026
          </p>
        </motion.div>

        {/* MAIN */}
        <div className="relative flex flex-1 items-center">
          <div className="relative z-20 w-full">
            {/* TIMMYNUEL */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-30 whitespace-nowrap text-[18.5vw] font-medium uppercase leading-[0.76] tracking-[-0.1em] md:text-[13vw]"
              >
                Timmynuel
              </motion.h1>
            </div>

            {/* CREATURES + PROJECT */}
            <div className="relative mt-1 md:mt-0">
              <motion.h2
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-20 whitespace-nowrap text-[17vw] font-medium uppercase leading-[0.76] tracking-[-0.1em] text-white/20 md:text-[12.2vw]"
              >
                Creatures.
              </motion.h2>

              {/* ROTATING PROJECT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug}
                  initial={{
                    opacity: 0,
                    scale: 0.88,
                    rotate: 5,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -4,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.94,
                    rotate: 3,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.04,
                    rotate: -1,
                  }}
                  className="absolute right-0 top-[5%] z-10 w-[28vw] max-w-[400px] min-w-[170px] md:right-[5%] md:top-[-35%]"
                >
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#161616] shadow-2xl shadow-black/50">
                      <Image
                        src={project.cover}
                        alt={`${project.title} brand identity`}
                        fill
                        priority={activeProject === 0}
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 35vw, 400px"
                      />

                      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-5">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.16em] text-white/60">
                            Selected Work
                          </p>

                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`${project.slug}-info`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.35 }}
                            >
                              <p className="mt-1 text-sm font-medium uppercase tracking-[-0.02em]">
                                {project.title}
                              </p>

                              <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/45">
                                {project.category}
                              </p>
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                          ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="grid gap-8 border-t border-white/15 pt-4 md:grid-cols-3 md:gap-5"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
              Visuals with character
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
              Building identities and visual worlds that refuse to blend in.
            </p>
          </div>

          <div className="hidden md:block">
            <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
              Currently
            </p>

            <p className="mt-2 text-sm text-white/50">
              Available for selected projects
            </p>
          </div>

          <div className="flex items-end justify-between md:justify-end md:gap-8">
            <Link
              href="#work"
              className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.16em]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base transition-all duration-300 group-hover:bg-white group-hover:text-black">
                ↓
              </span>

              Explore work
            </Link>

            <a
              href="https://instagram.com/timmy_nuel_creatures"
              target="_blank"
              rel="noreferrer"
              className="text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              Instagram ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* PROJECT INDICATOR */}
      {projects.length > 1 && (
        <div className="absolute bottom-7 right-5 z-20 flex items-center gap-2 md:bottom-9 md:right-10">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`View ${item.title}`}
              onClick={() => setActiveProject(index)}
              className="group flex items-center gap-2"
            >
              <span
                className={`h-px transition-all duration-500 ${
                  index === activeProject
                    ? "w-8 bg-white"
                    : "w-3 bg-white/20 group-hover:bg-white/50"
                }`}
              />

              <span
                className={`text-[8px] uppercase tracking-[0.15em] transition-colors ${
                  index === activeProject
                    ? "text-white"
                    : "text-white/25 group-hover:text-white/60"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}