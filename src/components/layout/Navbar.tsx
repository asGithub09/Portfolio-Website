"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-[11px] tracking-[0.25em] text-white"
        >
          AS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
        >
          Let's talk
          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.header>
  );
}
