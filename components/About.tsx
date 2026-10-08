"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-5 py-28 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-center justify-between border-t border-white/15 pt-5 md:mb-24">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            02 — About
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            The person behind the work
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-20">
          {/* PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden bg-[#151515]"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/timmynuel.jpg"
                alt="Timmynuel"
                fill
                className="object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 md:p-7">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Timmynuel
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Designer / Creative
                </p>
              </div>

              <span className="text-[9px] uppercase tracking-[0.16em] text-white/40">
                2026
              </span>
            </div>
          </motion.div>

          {/* TEXT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-7 text-[10px] uppercase tracking-[0.2em] text-white/35"
            >
              The Creative
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[17vw] font-medium uppercase leading-[0.78] tracking-[-0.09em] md:text-[9vw]"
              >
                Behind
                <br />
                The
                <br />
                Work<span className="text-white/25">.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 max-w-xl md:mt-14"
            >
              <p className="text-lg leading-8 tracking-[-0.02em] text-white/65 md:text-2xl md:leading-9">
                Timmynuel is a graphic designer and visual creative focused on
                turning ideas into bold identities, expressive visuals and
                memorable creative experiences.
              </p>

              <p className="mt-6 text-sm leading-7 text-white/40 md:text-base">
                From brand identities to campaigns and digital visuals, the
                goal is simple: create work with personality, clarity and
                character.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-12 grid max-w-xl grid-cols-2 border-t border-white/10 pt-5 md:mt-16"
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Based in
                </p>

                <p className="mt-2 text-sm text-white/70">
                  Nigeria
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Instagram
                </p>

                <a
                  href="https://instagram.com/timmy_nuel_creatures"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm text-white/70 transition-colors hover:text-white"
                >
                  @timmy_nuel_creatures ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}