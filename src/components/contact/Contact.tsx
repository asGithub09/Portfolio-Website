"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-srivastava-b5678b165",
  },
  {
    label: "GitHub",
    href: "https://github.com/asGithub09",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Akash8050/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aakaashsrivastava/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-editorial border-t border-white/10 py-32 md:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D6B77A]/70">
            05 / Contact
          </p>

          <h2 className="mt-8 max-w-5xl text-6xl font-light leading-[0.92] tracking-[-0.06em] text-[#F3EFE6] md:text-8xl">
            Let&apos;s build
            <br />
            <span className="font-display italic text-[#D6B77A]">
              something meaningful.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-base leading-7 text-white/50 md:text-lg">
            Have a product idea, technical challenge, or opportunity worth
            discussing? I&apos;d be happy to connect and explore what we can
            build together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="mailto:Akashstars09@gmail.com"
              whileHover={{ y: -2 }}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-[#D6B77A]/50 hover:text-white"
            >
              <Mail size={14} strokeWidth={1.5} />
              Email me
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="tel:+917011578050"
              whileHover={{ y: -2 }}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-[#7C9CFF]/50 hover:text-white"
            >
              <Phone size={14} strokeWidth={1.5} />
              Call me
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div className="border-t border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Direct contact
            </p>

            <a
              href="mailto:Akashstars09@gmail.com"
              className="mt-3 block break-all text-lg text-white/75 transition-colors hover:text-[#D6B77A]"
            >
              Akashstars09@gmail.com
            </a>

            <a
              href="tel:+917011578050"
              className="mt-2 block text-lg text-white/75 transition-colors hover:text-[#7C9CFF]"
            >
              +91 70115 78050
            </a>

            <p className="mt-2 text-sm text-white/35">Lucknow, India</p>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Find me online
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] text-white/45"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 7.844a9.55 9.55 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.31.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
                />
              </svg>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
                GitHub
              </p>
              <p className="mt-1 text-sm text-white/65">asGithub09</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] text-white/45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
                Instagram
              </p>
              <p className="mt-1 text-sm text-white/65">@aakaashsrivastava</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
          Available for meaningful digital product work
        </p>

        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
          © 2026 Akash Srivastava
        </p>
      </div>
    </section>
  );
}


