import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Journey from "@/components/journey/Journey";
import Engineering from "@/components/engineering/Engineering";

export default function Home() {
  return (
    <main>
      <Hero />

      <Projects />

      <Journey />

      <Engineering />

      <section
        id="contact"
        className="container-editorial min-h-[70vh] border-t border-white/10 py-32"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D6B77A]/70">
          05 / Contact
        </p>

        <h2 className="mt-8 max-w-5xl text-6xl font-light tracking-[-0.06em] text-[#F3EFE6] md:text-8xl">
          Let&apos;s build
          <br />
          <span className="font-display italic text-[#D6B77A]">
            something meaningful.
          </span>
        </h2>
      </section>
    </main>
  );
}

