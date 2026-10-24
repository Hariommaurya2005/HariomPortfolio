import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollTop } from "@/components/portfolio/ScrollTop";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hariom Maurya — Software Developer | MERN Stack Developer" },
      { name: "description", content: "Portfolio of Hariom Maurya, MCA student and full-stack MERN developer. Explore AutoCRM, a CRM with lead management, WhatsApp integration, and AI-assisted workflows." },
      { name: "keywords", content: "Hariom Maurya, Software Developer, MERN Stack, Full Stack Developer, MCA, React, Node.js, Portfolio" },
      { property: "og:title", content: "Hariom Maurya — Software Developer | MERN Stack Developer" },
      { property: "og:description", content: "MCA student and full-stack MERN developer. Explore AutoCRM, a CRM with WhatsApp integration and AI-assisted workflows." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <Toaster />
    </div>
  );
}
