"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] px-5 pb-8 pt-28 text-white md:px-10 md:pb-10 md:pt-40"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* TOP LINE */}
        <div className="mb-16 border-t border-white/15 pt-5 md:mb-24">
          <div className="flex items-start justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              04 — Contact
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.18em] text-white/30 md:block">
              Let's make something
            </p>
          </div>
        </div>

        {/* MAIN CTA */}
        <div className="relative">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative text-[18vw] font-medium uppercase leading-[0.75] tracking-[-0.1em] md:text-[12vw]"
            >
              Have an
              <br />
              Idea<span className="text-white/25">?</span>
            </motion.h2>
          </div>

          <div className="mt-10 flex flex-col gap-8 md:ml-[25%] md:mt-14 md:max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg leading-8 text-white/55 md:text-2xl md:leading-9"
            >
              Have a brand, campaign or creative idea that needs a visual
              direction? Let's turn it into something people remember.
            </motion.p>

            <motion.a
              href="mailto:hello@timmy_nuel_creatures.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="group inline-flex w-fit items-center gap-4 text-sm uppercase tracking-[0.14em]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-black transition-transform duration-500 group-hover:rotate-45">
                ↗
              </span>

              Start a conversation
            </motion.a>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mt-28 grid border-t border-white/10 md:mt-40 md:grid-cols-3">
          <div className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:pr-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
              Email
            </p>

            <a
              href="mailto:hello@timmy_nuel_creatures.com"
              className="mt-3 block text-sm text-white/65 transition-colors hover:text-white"
            >
              hello@timmy_nuel_creatures.com
            </a>
          </div>

          <div className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
              Instagram
            </p>

            <a
              href="https://instagram.com/timmy_nuel_creatures"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm text-white/65 transition-colors hover:text-white"
            >
              @timmy_nuel_creatures ↗
            </a>
          </div>

          <div className="py-6 md:pl-8">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
              Location
            </p>

            <p className="mt-3 text-sm text-white/65">
              Nigeria
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-white/15 pt-5 md:mt-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-4xl font-bold uppercase tracking-[-0.07em] md:text-6xl">
                TIMMYNUEL<span className="text-white/30">®</span>
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
                Graphic Designer & Visual Creative
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-[9px] uppercase tracking-[0.16em] text-white/35">
              <a
                href="#work"
                className="transition-colors hover:text-white"
              >
                Work
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </a>

              <a
                href="https://instagram.com/timmy_nuel_creatures"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-4">
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
              © 2026 Timmynuel Creatures
            </p>

            <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
              Built with intention.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}