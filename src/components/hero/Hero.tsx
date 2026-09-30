"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#657CFF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[8%] left-[12%] h-[280px] w-[280px] rounded-full bg-[#D6B77A]/8 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[12%] right-[30%] h-[260px] w-[260px] rounded-full bg-[#E28A78]/5 blur-[110px]" />

      <div className="container-editorial relative z-10 w-full pt-24">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">

          {/* HERO COPY */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-white/30" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D6B77A]/70">
                Full-Stack Developer
              </span>
            </motion.div>

            {/* I BUILD */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="whitespace-nowrap text-[clamp(64px,8vw,132px)] font-light leading-[0.86] tracking-[-0.065em]"
              >
                <span className="text-[#D6B77A]">I</span>
                <span className="text-[#7C9CFF]"> BUILD</span>
              </motion.h1>
            </div>

            {/* DIGITAL */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-[clamp(68px,9vw,158px)] italic leading-[0.88] tracking-[-0.055em] text-[#E28A78]"
              >
                digital
              </motion.h1>
            </div>

            {/* PRODUCTS */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(60px,7.6vw,128px)] font-light leading-[0.86] tracking-[-0.065em] text-[#F3EFE6]"
              >
                PRODUCTS.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 max-w-[540px] text-sm leading-7 text-white/60 md:text-[15px]"
            >
              Full-Stack Developer building modern web products,
              automation systems and thoughtful digital experiences
              where technology meets real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-3 border border-[#7C9CFF]/30 bg-[#7C9CFF] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-[#8CA8FF]"
              >
                Explore my work

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#journey"
                className="flex items-center gap-3 border border-[#D6B77A]/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#D6B77A]/70 transition-colors duration-300 hover:border-[#D6B77A]/40 hover:text-[#D6B77A]"
              >
                My journey
              </a>
            </motion.div>
          </div>

          {/* PORTRAIT SYSTEM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25 }}
            className="relative mx-auto flex h-[520px] w-full max-w-[520px] items-center justify-center lg:h-[650px]"
          >
            {/* Outer orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute z-0 h-[430px] w-[430px] rounded-full border border-white/[0.07] lg:h-[520px] lg:w-[520px]"
            />

            {/* Inner orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute z-0 h-[330px] w-[330px] rounded-full border border-dashed border-[#D6B77A]/15 lg:h-[410px] lg:w-[410px]"
            />

            {/* Portrait glow */}
            <div className="absolute z-0 h-[300px] w-[300px] rounded-full bg-[#657CFF]/12 blur-[100px]" />

            {/* Portrait */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[410px] w-[410px] lg:h-[500px] lg:w-[500px]"
            >
              <img
                src="/images/akash.png"
                alt="Akash Srivastava"
                className="
                  h-full
                  w-full
                  object-contain
                  [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]
                  [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]
                "
              />
            </motion.div>

            {/* Single orbit accent */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute z-20 h-[520px] w-[520px] lg:h-[620px] lg:w-[620px]"
            >
              <span className="absolute right-[8%] top-[10%] block h-2 w-2 rounded-full bg-[#E28A78] shadow-[0_0_18px_rgba(226,138,120,0.6)]" />
            </motion.span>
          </motion.div>
        </div>

        {/* BOTTOM METADATA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-between border-t border-white/10 py-6"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
            India
          </span>

          <a
            href="#work"
            className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
          >
            Scroll to explore
            <ArrowDown size={13} strokeWidth={1} />
          </a>

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
            2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
