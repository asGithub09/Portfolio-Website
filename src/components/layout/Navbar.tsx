"use client";

import { useState } from "react";
import { Check, Copy, Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    label: "Work",
    href: "#work",
    color: "#7C9CFF",
  },
  {
    label: "Journey",
    href: "#journey",
    color: "#D6B77A",
  },
  {
    label: "Engineering",
    href: "#engineering",
    color: "#61DAFB",
  },
  {
    label: "Contact",
    href: "#contact",
    color: "#E28A78",
  },
];

const portfolioInfo = `AKASH SRIVASTAVA
Full-Stack Developer · Product Engineering · Technical Systems

Email: Akashstars09@gmail.com
Phone: +91 70115 78050
Location: Lucknow, India

LinkedIn:
https://www.linkedin.com/in/akash-srivastava-b5678b165

GitHub:
https://github.com/asGithub09

LeetCode:
https://leetcode.com/u/Akash8050/

Portfolio:
Full-Stack Developer building modern web products, automation systems and thoughtful digital experiences.

Experience:
ARG Consulting — Technical Support Engineer — 2017
iEnergizer IT Services Pvt. Ltd. — Senior Associate — 2018–2023
Product Engineering / Full-Stack Development — 2023–2026

Education:
Bachelor of Computer Applications (BCA) — 2026

Technical Skills:
React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS,
Node.js, Express, NestJS, REST APIs, PostgreSQL, MongoDB, MySQL,
Redis, Prisma, BullMQ, WebSockets, Automation, CRM, Webhooks,
Third-party APIs, Git, GitHub, Jira, Slack, Salesforce, SAP Ariba, Zoho.

Selected Projects:
MyTask
JobWay
OJD Education
ExamFlow
HRMS
`;

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(portfolioInfo);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="container-editorial flex h-20 items-center justify-between gap-6">

        {/* ANIMATED IDENTITY MARK */}
        <motion.a
          href="#top"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="group relative flex h-10 min-w-[230px] shrink-0 items-center overflow-hidden"
          aria-label="Akash Srivastava"
        >
          <motion.span
            className="absolute left-0 font-mono text-[16px] font-semibold uppercase tracking-[0.24em] text-[#D6B77A]"
            animate={{
              opacity: [1, 1, 0, 0, 1, 1],
              filter: [
                "blur(0px)",
                "blur(0px)",
                "blur(5px)",
                "blur(5px)",
                "blur(0px)",
                "blur(0px)",
              ],
              scaleX: [1, 1, 0.92, 0.92, 1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.32, 0.42, 0.58, 0.7, 1],
              ease: "easeInOut",
            }}
          >
            AS
          </motion.span>

          <motion.span
            className="absolute left-0 whitespace-nowrap font-mono text-[16px] font-medium tracking-[0.08em] text-[#D6B77A]"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              filter: [
                "blur(5px)",
                "blur(5px)",
                "blur(0px)",
                "blur(0px)",
                "blur(5px)",
                "blur(5px)",
              ],
              x: [-8, -8, 0, 0, 8, 8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.32, 0.42, 0.58, 0.7, 1],
              ease: "easeInOut",
            }}
          >
            Akash Srivastava
          </motion.span>

          <motion.span
            className="absolute left-0 top-0 h-px w-5 bg-[#D6B77A]"
            animate={{
              width: [18, 18, 70, 70, 18, 18],
              opacity: [0.5, 0.5, 0.9, 0.9, 0.5, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.32, 0.42, 0.58, 0.7, 1],
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="absolute -right-1 bottom-1 h-1.5 w-1.5 rounded-full bg-[#D6B77A]"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.45, 1, 0.45],
              boxShadow: [
                "0 0 4px rgba(214,183,122,0.2)",
                "0 0 14px rgba(214,183,122,0.8)",
                "0 0 4px rgba(214,183,122,0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.a>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative flex flex-col items-center px-2 py-2"
            >
              <motion.span
                variants={{
                  rest: {
                    y: 0,
                    color: link.color,
                  },
                  hover: {
                    y: -4,
                    color: link.color,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 24,
                }}
                className="font-mono text-[10px] uppercase tracking-[0.18em]"
              >
                {link.label}
              </motion.span>

              <motion.span
                variants={{
                  rest: {
                    width: 0,
                    opacity: 0,
                  },
                  hover: {
                    width: "100%",
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute bottom-0 h-px"
                style={{
                  background: link.color,
                  boxShadow: `0 0 10px ${link.color}`,
                }}
              />

              <motion.span
                variants={{
                  rest: {
                    scale: 0,
                    opacity: 0,
                  },
                  hover: {
                    scale: 1,
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.2 }}
                className="absolute -top-1 h-1 w-1 rounded-full"
                style={{
                  background: link.color,
                  boxShadow: `0 0 8px ${link.color}`,
                }}
              />
            </motion.a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">

          {/* COPY PORTFOLIO */}
          <motion.button
            type="button"
            onClick={handleCopy}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group hidden items-center gap-2 border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white lg:flex"
          >
            {copied ? (
              <Check
                size={12}
                strokeWidth={1.8}
                className="text-[#61DAFB]"
              />
            ) : (
              <Copy
                size={12}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            )}

            <span>{copied ? "Copied" : "Copy Info"}</span>
          </motion.button>

          {/* DOWNLOAD RESUME */}
          <motion.a
            href="/documents/Akash-Srivastava-Resume.pdf"
            download="Akash-Srivastava-Resume.pdf"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group flex items-center gap-2 border border-[#D6B77A]/35 bg-[#D6B77A]/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#D6B77A] transition-all duration-300 hover:border-[#D6B77A]/70 hover:bg-[#D6B77A]/15 hover:shadow-[0_0_22px_rgba(214,183,122,0.12)]"
          >
            <Download
              size={12}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />

            <span className="hidden sm:inline">Resume</span>
          </motion.a>

          {/* LET'S TALK */}
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group relative flex items-center gap-2 pl-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70"
          >
            <span className="transition-colors duration-300 group-hover:text-[#E28A78]">
              Let&apos;s talk
            </span>

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="text-[#E28A78] transition-transform duration-200 group-hover:rotate-45"
            />

            <span className="absolute -bottom-1 left-2 h-px w-0 bg-[#E28A78] transition-all duration-300 group-hover:w-[calc(100%-8px)]" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}



