"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const chapters = [
  {
    number: "01",
    period: "2017",
    role: "Technical Support Engineer",
    company: "ARG Consulting",
    color: "#D6B77A",
    description:
      "Started by solving technical problems directly with users — understanding requirements, supporting Mac OS devices, configuring systems and troubleshooting issues in real environments.",
    capabilities: [
      "Technical troubleshooting",
      "Requirements understanding",
      "System configuration",
      "User-facing support",
    ],
  },
  {
    number: "02",
    period: "2018 — 2023",
    role: "Senior Associate",
    company: "iEnergizer IT Services",
    color: "#7C9CFF",
    description:
      "Worked across international US and UK customer operations, handling live queries, network troubleshooting, software diagnosis and high-volume customer interactions.",
    capabilities: [
      "International customer operations",
      "Network troubleshooting",
      "Software diagnosis",
      "Live customer support",
    ],
  },
  {
    number: "03",
    period: "2023 — 2026",
    role: "Product Engineering",
    company: "Full-Stack Development",
    color: "#E28A78",
    description:
      "Moved from solving individual technical problems to designing and building complete digital systems — working across modern frontend, backend, databases, APIs, authentication and automation.",
    capabilities: [
      "Modern web applications",
      "Backend systems & APIs",
      "Database architecture",
      "Automation & integrations",
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/10 py-32 md:py-40"
    >
      <div className="container-editorial">

        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D6B77A]/70">
              02 / Journey
            </p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl text-[clamp(48px,6vw,92px)] font-light leading-[0.92] tracking-[-0.055em] text-[#F3EFE6]"
            >
              From solving
              <br />
              <span className="font-display italic text-[#E28A78]">
                problems
              </span>{" "}
              to
              <br />
              building systems.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-[15px]"
            >
              My career started close to the user and gradually moved closer
              to the system itself. That experience now shapes how I approach
              product engineering: understand the problem first, then build
              the right technology around it.
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <div className="relative">

            {/* Timeline line */}
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[31px]" />

            <div className="space-y-20 md:space-y-28">
              {chapters.map((chapter, index) => (
                <motion.article
                  key={chapter.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="group relative min-w-0 border-l border-white/10 pl-8 md:grid md:grid-cols-[120px_1fr] md:gap-16 md:border-l-0 md:pl-0"
                >
                  {/* Timeline node */}
                  <div
                    className="absolute -left-[9px] top-0 h-[17px] w-[17px] rounded-full border border-black/80 md:left-[23px]"
                    style={{
                      boxShadow: `0 0 0 5px ${chapter.color}10, 0 0 24px ${chapter.color}45`,
                    }}
                  >
                    <span
                      className="block h-full w-full rounded-full"
                      style={{
                        backgroundColor: chapter.color,
                        boxShadow: `0 0 14px ${chapter.color}`,
                      }}
                    />
                  </div>

                  {/* Period */}
                  <div className="relative z-20 -mt-1 mb-6 md:mt-0 md:mb-0 md:pt-1">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        color: chapter.color,
                        textShadow: `0 0 14px ${chapter.color}55`,
                      }}
                    >
                      {chapter.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 border-t border-white/10 pt-6 md:pt-5">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                      <div className="min-w-0">
                        <p
                          className="font-mono text-[10px] uppercase tracking-[0.2em]"
                          style={{ color: chapter.color }}
                        >
                          {chapter.number}
                        </p>

                        <motion.h3
                          whileHover={{ x: 3 }}
                          className="mt-3 inline-block max-w-full text-3xl font-light leading-tight tracking-[-0.045em] md:text-5xl"
                          style={{
                            backgroundImage: `linear-gradient(105deg, ${chapter.color} 0%, #F3EFE6 55%, ${chapter.color} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {chapter.role}
                        </motion.h3>

                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                          {chapter.company}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1}
                        className="hidden text-white/20 md:block"
                      />
                    </div>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:mt-7 md:text-[15px]">
                      {chapter.description}
                    </p>

                    <div className="mt-6 flex max-w-3xl flex-wrap gap-2 md:mt-7">
                      {chapter.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/10 pt-8 md:mt-40"
        >
          <div className="grid gap-8 md:grid-cols-[0.32fr_0.68fr]">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7C9CFF]/70">
              Education
            </p>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                2026
              </p>

              <h3 className="mt-3 text-3xl font-light tracking-[-0.035em] text-[#F3EFE6] md:text-5xl">
                Bachelor of Computer Applications
              </h3>


            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}













