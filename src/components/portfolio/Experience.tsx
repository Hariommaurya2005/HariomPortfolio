import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, CheckCircle2 } from "lucide-react";

const tasks = [
  "Developed responsive web applications using React JS and Tailwind CSS.",
  "Built REST APIs with Node.js and Express to power production features.",
  "Worked with MongoDB databases — schema design, queries, indexing.",
  "Implemented CRUD operations across full-stack modules.",
  "Integrated frontend and backend with authentication and validation.",
];

const tech = ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JavaScript", "Git"];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internship">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl glass rounded-3xl p-8 shadow-card"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold">
                Full Stack Web Development Intern
              </div>
              <div className="text-sm text-muted-foreground">
                Aradhya Technologies and Skill Development Pvt. Ltd.
              </div>
            </div>
          </div>
          <div className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            Feb 2024 – Aug 2024
          </div>
        </div>

        <ul className="mt-6 space-y-2.5">
          {tasks.map((t) => (
            <li key={t} className="flex gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 font-mono text-xs text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
