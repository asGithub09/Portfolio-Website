"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import TechConstellation from "@/components/hero/TechConstellation";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const visualX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const visualY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const handleVisualMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const resetVisual = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ATMOSPHERIC LIGHT */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.16, 0.24, 0.16],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[4%] top-[12%] h-[500px] w-[500px] rounded-full bg-[#657CFF]/20 blur-[150px]"
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.18, 1],
                opacity: [0.06, 0.12, 0.06],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[4%] left-[10%] h-[360px] w-[360px] rounded-full bg-[#D6B77A]/10 blur-[130px]"
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.25, 1],
                opacity: [0.04, 0.1, 0.04],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[15%] right-[25%] h-[300px] w-[300px] rounded-full bg-[#E28A78]/10 blur-[120px]"
      />

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
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="h-px bg-white/30"
              />

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
              Full-Stack Developer building modern web products, automation
              systems and thoughtful digital experiences where technology meets
              real-world problems.
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

          {/* CINEMATIC PORTRAIT SYSTEM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseMove={handleVisualMove}
            onMouseLeave={resetVisual}
            style={{
              x: reduceMotion ? 0 : visualX,
              y: reduceMotion ? 0 : visualY,
            }}
            className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center [perspective:1400px] lg:h-[650px]"
          >
            <TechConstellation />

            {/* CENTRAL ATMOSPHERIC CORE */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.16, 1],
                      opacity: [0.35, 0.55, 0.35],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.32)_0%,rgba(226,138,120,0.12)_38%,transparent_72%)] blur-2xl"
            />

            {/* ORBITAL SYSTEM */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotateZ: 360,
                    }
              }
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute z-0 h-[470px] w-[470px] [transform-style:preserve-3d] lg:h-[570px] lg:w-[570px]"
              style={{
                transform: "rotateX(64deg) rotateZ(-16deg)",
              }}
            >
              <svg
                viewBox="0 0 600 600"
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="orbitGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D6B77A" stopOpacity="0" />
                    <stop offset="35%" stopColor="#D6B77A" stopOpacity="0.85" />
                    <stop offset="65%" stopColor="#7C9CFF" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#E28A78" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <ellipse
                  cx="300"
                  cy="300"
                  rx="275"
                  ry="275"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />

                <motion.ellipse
                  cx="300"
                  cy="300"
                  rx="275"
                  ry="275"
                  fill="none"
                  stroke="url(#orbitGold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="70 1150"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          strokeDashoffset: [0, -1220],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#D6B77A] shadow-[0_0_12px_#D6B77A,0_0_35px_rgba(214,183,122,0.7)]"
              />
            </motion.div>

            {/* SECOND ORBIT */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotateZ: -360,
                    }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute z-0 h-[390px] w-[390px] [transform-style:preserve-3d] lg:h-[470px] lg:w-[470px]"
              style={{
                transform: "rotateX(68deg) rotateZ(38deg)",
              }}
            >
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="orbitBlue" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C9CFF" stopOpacity="0" />
                    <stop offset="45%" stopColor="#7C9CFF" stopOpacity="0.9" />
                    <stop offset="75%" stopColor="#E28A78" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#7C9CFF" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <ellipse
                  cx="250"
                  cy="250"
                  rx="225"
                  ry="225"
                  fill="none"
                  stroke="rgba(124,156,255,0.12)"
                  strokeWidth="1"
                  strokeDasharray="3 12"
                />

                <motion.ellipse
                  cx="250"
                  cy="250"
                  rx="225"
                  ry="225"
                  fill="none"
                  stroke="url(#orbitBlue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="55 950"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          strokeDashoffset: [0, 1005],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute right-[10%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#7C9CFF] shadow-[0_0_12px_#7C9CFF,0_0_30px_rgba(124,156,255,0.8)]"
              />
            </motion.div>

            {/* THIRD ORBIT / CORAL ENERGY */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotateZ: 360,
                    }
              }
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute z-[1] h-[520px] w-[520px] [transform-style:preserve-3d] lg:h-[630px] lg:w-[630px]"
              style={{
                transform: "rotateX(72deg) rotateZ(-55deg)",
              }}
            >
              <div className="absolute inset-0 rounded-full border border-[#E28A78]/10" />

              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.6, 1],
                        opacity: [0.55, 1, 0.55],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[18%] top-[9%] h-2 w-2 rounded-full bg-[#E28A78] shadow-[0_0_14px_#E28A78,0_0_38px_rgba(226,138,120,0.75)]"
              />
            </motion.div>

            {/* MICRO PARTICLES */}
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -18, 0],
                      x: [0, 8, 0],
                      opacity: [0.25, 0.8, 0.25],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#D6B77A] shadow-[0_0_12px_#D6B77A]"
            />

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 12, 0],
                      x: [0, -10, 0],
                      opacity: [0.2, 0.7, 0.2],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute right-[13%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-[#7C9CFF] shadow-[0_0_12px_#7C9CFF]"
            />

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.5, 1],
                      opacity: [0.15, 0.7, 0.15],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute left-[20%] bottom-[18%] h-1 w-1 rounded-full bg-[#E28A78] shadow-[0_0_10px_#E28A78]"
            />

            {/* PORTRAIT */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                      rotateZ: [0, 0.4, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[410px] w-[410px] lg:h-[500px] lg:w-[500px]"
            >
              <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.16),transparent_68%)] blur-2xl" />

              <img
                src="/images/akash.png"
                alt="Akash Srivastava"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]
                  [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]
                "
              />
            </motion.div>

            {/* FRONT ENERGY NODE */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.15, 1],
                    }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[13%] right-[17%] z-20 flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E28A78] shadow-[0_0_14px_#E28A78]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/35">
                Building
              </span>
            </motion.div>
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



