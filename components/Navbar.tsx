"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10 md:py-7">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link
          href="/"
          className="relative z-[60] text-sm font-bold uppercase tracking-[-0.04em] text-white"
        >
          TIMMYNUEL<span className="text-white/40">®</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.13em] text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://instagram.com/timmy_nuel_creatures"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-5 py-2.5 text-[11px] uppercase tracking-wider transition-all hover:bg-white hover:text-black"
          >
            Instagram ↗
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-white transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-50 flex flex-col justify-center bg-[#0a0a0a] px-6 transition-all duration-300 md:hidden ${
            open
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }`}
        >
          <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-white/35">
            Navigate
          </p>

          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-5xl font-medium tracking-[-0.07em]"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://instagram.com/timmy_nuel_creatures"
            target="_blank"
            rel="noreferrer"
            className="mt-8 text-sm text-white/50"
          >
            Follow on Instagram ↗
          </a>
        </div>
      </nav>
    </header>
  );
}