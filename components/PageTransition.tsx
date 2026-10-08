"use client";

import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          transformOrigin: "top",
        }}
        className="pointer-events-none fixed inset-0 z-[999] bg-[#0a0a0a]"
      />

      {children}
    </>
  );
}