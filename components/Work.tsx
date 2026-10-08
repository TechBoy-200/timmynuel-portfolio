"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0a] px-5 py-20 text-white md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 border-t border-white/15 pt-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
              01 — Selected Work
            </p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[17vw] font-medium uppercase leading-[0.76] tracking-[-0.09em] md:text-[10vw]"
              >
                The
                <br />
                Work<span className="text-white/25">.</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-xs text-sm leading-7 text-white/40 md:mb-2"
          >
            A selection of brands, identities and visual worlds created with
            intention, personality and character.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div className="mt-14 md:mt-20">
          {projects.map((project, index) => {
            const isOffset = index % 2 !== 0;

            return (
              <motion.article
                key={project.slug}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group mb-20 last:mb-0 md:mb-32 ${
                  isOffset ? "md:ml-[17%]" : ""
                }`}
              >
                <Link href={`/work/${project.slug}`} className="block">
                  {/* IMAGE */}
                  <div
                    className={`relative overflow-hidden bg-[#151515] ${
                      isOffset
                        ? "aspect-[4/5] md:w-[70%]"
                        : "aspect-[4/5] md:aspect-[16/10] md:w-[82%]"
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Image
                        src={project.cover}
                        alt={`${project.title} — ${project.category}`}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes={
                          isOffset
                            ? "(max-width: 768px) 100vw, 70vw"
                            : "(max-width: 768px) 100vw, 82vw"
                        }
                      />
                    </motion.div>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/25" />

                    {/* PROJECT NUMBER */}
                    <div className="absolute left-5 top-5 md:left-7 md:top-7">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                        {project.number} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* VIEW BUTTON */}
                    <motion.div
                      className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-black transition-transform duration-500 group-hover:rotate-45 group-hover:scale-105 md:bottom-7 md:right-7"
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                    >
                      ↗
                    </motion.div>

                    {/* CENTER TITLE */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileHover={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="hidden text-[7vw] font-medium uppercase tracking-[-0.08em] text-white md:block"
                      >
                        {project.title}
                      </motion.p>
                    </div>

                    {/* MOBILE PROJECT LABEL */}
                    <div className="absolute bottom-5 left-5 md:hidden">
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/55">
                        Selected Work
                      </p>

                      <p className="mt-1 text-xl font-medium uppercase tracking-[-0.04em]">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* PROJECT META */}
                  <div className="flex flex-col gap-3 border-b border-white/10 py-4 md:flex-row md:items-center md:justify-between md:py-5">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                        {project.number}
                      </span>

                      <h3 className="text-xl font-medium uppercase tracking-[-0.04em] md:text-2xl">
                        {project.title}
                      </h3>

                      <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-white/30 transition-colors duration-300 group-hover:text-white/70">
                        View project
                      </span>

                      <span className="text-sm text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 md:mt-20"
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
            {String(projects.length).padStart(2, "0")} Selected Projects
          </p>

          <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
            More coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}