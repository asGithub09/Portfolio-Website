import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Journey from "@/components/journey/Journey";
import Engineering from "@/components/engineering/Engineering";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <Projects />

      <Journey />

      <Engineering />

      <Contact />
    </main>
  );
}
