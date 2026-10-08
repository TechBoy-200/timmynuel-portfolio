"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { getProject } from "@/data/projects";
import NextProject from "@/components/NextProject";

export default function QuingsPage() {
  const project = getProject("quings");

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white">
        <p>Project not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10 md:py-7">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[-0.04em]"
          >
            TIMMYNUEL<span className="text-white/40">®</span>
          </Link>

          <Link
            href="/#work"
            className="text-[10px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
          >
            ← Selected Work
          </Link>
        </div>
      </header>

      {/* INTRO */}
      <section className="px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex items-center justify-between border-b border-white/15 pb-4"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Selected Project
            </span>

            <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              {project.number} / {String(3).padStart(2, "0")}
            </span>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-[1fr_0.32fr] md:items-end">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[19vw] font-medium uppercase leading-[0.76] tracking-[-0.1em] md:text-[14vw]"
              >
                {project.title}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="max-w-sm pb-2"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-white/40">
                {project.category}
              </p>

              <p className="text-sm leading-7 text-white/55 md:text-base">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE 01 — HERO */}
      <CaseImage
        src={project.images[0]}
        alt={`${project.title} — identity presentation`}
        full
      />

      {/* INTRO TEXT */}
      <section className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.4fr_1fr]">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            The Identity
          </p>

          <p className="max-w-3xl text-2xl leading-[1.25] tracking-[-0.04em] text-white/75 md:text-5xl">
            A visual language designed to give QUINGS a distinct presence,
            combining expressive design with a confident and contemporary
            identity.
          </p>
        </div>
      </section>

      {/* IMAGE 02 + 03 */}
      <section className="px-3 md:px-6">
        <div className="grid gap-3 md:grid-cols-2 md:gap-6">
          <CaseImage
            src={project.images[1]}
            alt={`${project.title} — image 02`}
          />

          <CaseImage
            src={project.images[2]}
            alt={`${project.title} — image 03`}
          />
        </div>
      </section>

      {/* IMAGE 04 */}
      <section className="px-3 py-3 md:px-6 md:py-6">
        <CaseImage
          src={project.images[3]}
          alt={`${project.title} — image 04`}
          full
        />
      </section>

      {/* IMAGE 05 */}
      <section className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1200px]">
          <CaseImage
            src={project.images[4]}
            alt={`${project.title} — image 05`}
          />
        </div>
      </section>

      {/* IMAGE 06 + 07 */}
      <section className="px-3 md:px-6">
        <div className="grid gap-3 md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-6">
          <CaseImage
            src={project.images[5]}
            alt={`${project.title} — image 06`}
          />

          <CaseImage
            src={project.images[6]}
            alt={`${project.title} — image 07`}
          />
        </div>
      </section>

      {/* IMAGE 08 */}
      <section className="px-3 py-3 md:px-6 md:py-6">
        <CaseImage
          src={project.images[7]}
          alt={`${project.title} — image 08`}
          full
        />
      </section>

      {/* IMAGE 09 */}
      <section className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1200px]">
          <CaseImage
            src={project.images[8]}
            alt={`${project.title} — final image`}
          />
        </div>
      </section>

      {/* PROJECT END */}
      <section className="px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-[1600px] border-t border-white/15 pt-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-white/35">
                End of project
              </p>

              <h2 className="text-6xl font-medium uppercase leading-[0.85] tracking-[-0.08em] md:text-[10vw]">
                QUINGS
                <span className="text-white/25">.</span>
              </h2>
            </div>

            <Link
              href="/#work"
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>

              Back to selected work
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <NextProject currentSlug="quings" />
    </main>
  );
}

function CaseImage({
  src,
  alt,
  full = false,
}: {
  src: string;
  alt: string;
  full?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden ${
        full ? "w-full" : "w-full"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        className="h-auto w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
        sizes="100vw"
      />
    </motion.div>
  );
}