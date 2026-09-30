"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const groups = [
  {
    number: "01",
    title: "Frontend",
    color: "#7C9CFF",
    description:
      "Interfaces designed around clarity, responsiveness and real product workflows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    color: "#E28A78",
    description:
      "Server-side systems, APIs and application logic designed to support scalable products.",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "REST APIs",
      "Authentication",
      "WebSockets",
    ],
  },
  {
    number: "03",
    title: "Data & Infrastructure",
    color: "#D6B77A",
    description:
      "Working with application data, persistence, caching and asynchronous processing.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "BullMQ",
      "Prisma",
    ],
  },
  {
    number: "04",
    title: "Product Systems",
    color: "#7C9CFF",
    description:
      "Building the systems that connect users, workflows, communication and business operations.",
    technologies: [
      "CRM",
      "Automation",
      "Third-party APIs",
      "Webhooks",
      "Real-time Systems",
      "Integrations",
    ],
  },
  {
    number: "05",
    title: "Tools & Platforms",
    color: "#E28A78",
    description:
      "Tools used across development, collaboration, support and enterprise workflows.",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Jira",
      "Slack",
      "Salesforce",
      "SAP Ariba",
      "Zoho",
    ],
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="relative overflow-hidden border-t border-white/10 py-32 md:py-40"
    >
      <div className="container-editorial">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7C9CFF]/70">
              04 / Engineering
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
              Technology behind
              <br />
              <span className="font-display italic text-[#7C9CFF]">
                the interface.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-[15px]"
            >
              I work across the stack — from interfaces and APIs to databases,
              real-time communication and automation — with a focus on
              building systems that solve practical problems.
            </motion.p>
          </div>
        </div>

        {/* Capability grid */}
        <div className="mt-24 border-t border-white/10">
          {groups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="group border-b border-white/10 py-10 md:py-12"
            >
              <div className="grid gap-8 lg:grid-cols-[80px_0.7fr_1fr_auto] lg:items-start">

                {/* Number */}
                <span
                  className="font-mono text-[10px] tracking-[0.2em]"
                  style={{ color: group.color }}
                >
                  {group.number}
                </span>

                {/* Title */}
                <div>
                  <h3 className="text-3xl font-light tracking-[-0.04em] text-[#F3EFE6] md:text-5xl">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                    {group.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/45 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/65"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Accent */}
                <ArrowUpRight
                  size={19}
                  strokeWidth={1}
                  className="text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Engineering statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-28 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[0.32fr_0.68fr]"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
            Approach
          </span>

          <p className="max-w-4xl text-2xl font-light leading-8 tracking-[-0.025em] text-white/65 md:text-4xl md:leading-[1.15]">
            Good engineering is not about using the most technologies.
            <span className="text-white">
              {" "}It is about choosing the right ones for the problem.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

