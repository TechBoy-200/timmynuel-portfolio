"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Building distinctive visual identities that give brands a clear voice, personality and presence.",
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Creating bold, expressive graphics for digital platforms, print, campaigns and everything in between.",
  },
  {
    number: "03",
    title: "Art Direction",
    description:
      "Developing the visual direction behind a project, from concept and composition to the final creative.",
  },
  {
    number: "04",
    title: "Campaign Visuals",
    description:
      "Designing visual systems that help campaigns communicate clearly while staying memorable and visually strong.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] px-5 py-28 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div className="mb-16 border-t border-white/15 pt-5 md:mb-24">
          <div className="flex items-start justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              03 — Services
            </p>

            <p className="hidden max-w-xs text-right text-[10px] uppercase leading-5 tracking-[0.16em] text-white/30 md:block">
              What I can bring
              <br />
              to your next project
            </p>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-20 overflow-hidden md:mb-28">
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
            What I
            <br />
            Do<span className="text-white/25">.</span>
          </motion.h2>
        </div>

        {/* SERVICES */}
        <div className="border-t border-white/15">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group border-b border-white/10"
            >
              <div className="relative flex flex-col gap-6 py-8 md:grid md:grid-cols-[80px_1fr_0.7fr_50px] md:items-center md:gap-8 md:py-10">
                {/* NUMBER */}
                <span className="text-[10px] tracking-[0.15em] text-white/30">
                  {service.number}
                </span>

                {/* TITLE */}
                <h3 className="text-3xl font-medium uppercase tracking-[-0.05em] transition-transform duration-500 ease-out group-hover:translate-x-3 md:text-5xl lg:text-6xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="max-w-md text-sm leading-7 text-white/35 transition-colors duration-500 group-hover:text-white/60 md:text-base">
                  {service.description}
                </p>

                {/* ARROW */}
                <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/50 group-hover:bg-white group-hover:text-black md:flex">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-12 flex flex-col gap-4 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm leading-7 text-white/35">
            Have something different in mind? Every project starts with an
            idea. Let's figure out how to bring yours to life.
          </p>

          <a
            href="#contact"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.16em]"
          >
            Start a project
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}