import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, Github, MapPin, Sparkles } from "lucide-react";

const roles = [
  "Software Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "MCA Student",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Software Developer Roles
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Hariom Maurya</span>
          </h1>

          <div className="mt-5 flex items-center justify-center gap-2 text-lg text-muted-foreground md:text-xl">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-mono caret">{text}</span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            MCA student passionate about building scalable web applications with the
            MERN stack. Focused on clean code, DSA, and crafting meaningful
            user experiences.
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Uttar Pradesh, India
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="https://github.com/Hariommaurya2005"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { k: "7.48", v: "MCA CGPA" },
              { k: "6+", v: "Months Internship" },
              { k: "1", v: "Featured Project" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 md:p-6">
                <div className="text-2xl font-bold text-gradient md:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
