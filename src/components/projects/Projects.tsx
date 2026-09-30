"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px]"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.913.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function SystemPreview({
  title,
  accent,
}: {
  title: string;
  accent: string;
}) {
  return (
    <div className="relative flex h-full min-h-[340px] items-center justify-center overflow-hidden bg-[#0b0b0d]">
      <div
        className="absolute h-64 w-64 rounded-full opacity-20 blur-[90px]"
        style={{ backgroundColor: accent }}
      />

      <div className="relative w-[78%] max-w-[560px]">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111114] shadow-2xl">
          <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />

            <span className="ml-4 h-2 w-32 rounded-full bg-white/[0.06]" />
          </div>

          <div className="grid min-h-[250px] grid-cols-[80px_1fr]">
            <div className="border-r border-white/10 p-4">
              <div
                className="h-6 w-6 rounded-md"
                style={{ backgroundColor: accent, opacity: 0.8 }}
              />

              <div className="mt-8 space-y-3">
                <span className="block h-2 w-10 rounded bg-white/10" />
                <span className="block h-2 w-8 rounded bg-white/10" />
                <span className="block h-2 w-12 rounded bg-white/10" />
                <span className="block h-2 w-7 rounded bg-white/10" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block h-3 w-28 rounded bg-white/15" />
                  <span className="mt-2 block h-2 w-40 rounded bg-white/[0.06]" />
                </div>

                <span
                  className="h-7 w-20 rounded-md"
                  style={{ backgroundColor: accent, opacity: 0.75 }}
                />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <span className="h-20 rounded-lg border border-white/10 bg-white/[0.025]" />
                <span className="h-20 rounded-lg border border-white/10 bg-white/[0.025]" />
                <span className="h-20 rounded-lg border border-white/10 bg-white/[0.025]" />
              </div>

              <div className="mt-4 h-20 rounded-lg border border-white/10 bg-white/[0.02]" />
            </div>
          </div>
        </div>

        <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-white/25">
          {title} / System Preview
        </p>
      </div>
    </div>
  );
}

function ImagePreview({
  project,
  image,
}: {
  project: (typeof projects)[number];
  image: string;
}) {
  return (
    <div className="relative min-h-[520px] overflow-hidden bg-[#09090b] md:min-h-[620px]">
      <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center border-b border-white/10 bg-[#111114]/95 px-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>

        <div className="mx-5 flex-1 truncate rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] text-white/25">
          {project.title}
        </div>
      </div>

      <div className="relative pt-10">
        <img
          src={image}
          alt={`${project.title} project preview`}
          className="block h-auto max-h-[620px] w-full object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
}
function LivePreview({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!loaded) {
        setTimedOut(true);
      }
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [loaded]);

  if (timedOut) {
    return (
      <SystemPreview
        title={project.title}
        accent={project.accent}
      />
    );
  }

  return (
    <div className="relative min-h-[520px] overflow-hidden bg-[#09090b] md:min-h-[620px]">
      <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center border-b border-white/10 bg-[#111114]/95 px-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>

        <div className="mx-5 flex-1 rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] text-white/25">
          {project.live}
        </div>
      </div>

      <iframe
        src={project.live}
        title={`${project.title} live preview`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="absolute left-0 top-10 h-[calc(100%-40px)] w-full border-0 bg-white"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
export default function Projects() {
  return (
    <section
      id="work"
      className="relative border-t border-white/10 py-32 md:py-40"
    >
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7C9CFF]/70">
              01 / Selected Work
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
              Software built
              <br />
              with{" "}
              <span className="font-display italic text-[#E28A78]">
                intention.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-[15px]"
            >
              A selection of products and systems I&apos;ve built while moving
              from frontend development into full-stack product engineering.
            </motion.p>
          </div>
        </div>

        <div className="mt-24 space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <span
                    className="font-mono text-[10px] tracking-[0.2em]"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </span>

                  <span className="h-px w-8 bg-white/15" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {project.category}
                  </span>
                </div>

                <span className="font-mono text-[9px] tracking-[0.2em] text-white/25">
                  {project.year}
                </span>
              </div>

              <div
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
                style={{
                  boxShadow: `0 30px 100px ${project.accent}12`,
                }}
              >
                {project.title === "MyTask" ? (
                  <ImagePreview
                    project={project}
                    image="/projects/mytask/hero.png"
                  />
                ) : project.previewMode === "iframe" && project.live ? (
                  <LivePreview project={project} />
                ) : (
                  <SystemPreview
                    title={project.title}
                    accent={project.accent}
                  />
                )}
              </div>

              <div className="mt-7 grid gap-8 lg:grid-cols-[0.75fr_1fr_auto] lg:items-start">
                <div>
                  <motion.h3
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="relative inline-block text-5xl font-light tracking-[-0.055em] md:text-7xl"
                    style={{
                      backgroundImage: `linear-gradient(105deg, ${project.accent} 0%, #F3EFE6 48%, ${project.accent} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: `0 0 28px ${project.accent}30`,
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <p
                    className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em]"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-7 text-white/50 md:text-[15px]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:justify-end">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/45 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      <GitHubIcon />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex h-11 items-center gap-2 border border-white/10 px-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      Live site
                      <ExternalLink
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="mt-28 h-px bg-white/[0.06]" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}





