import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  { degree: "Master of Computer Applications (MCA)", school: "School of Management Sciences, Varanasi", year: "2023 – 2025", score: "CGPA: 7.48" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Graduation", year: "2020 – 2023", score: "Computer Science" },
  { degree: "Intermediate (12th)", school: "U.P. Board", year: "2019 – 2020", score: "PCM" },
  { degree: "High School (10th)", school: "U.P. Board", year: "2017 – 2018", score: "" },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Journey">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative flex items-start gap-4 md:gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <GraduationCap className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
              <div className="ml-12 flex-1 md:ml-0 md:w-1/2">
                <div className="glass rounded-2xl p-5 transition-colors hover:border-primary/40">
                  <div className="font-mono text-xs text-primary">{it.year}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{it.degree}</div>
                  <div className="text-sm text-muted-foreground">{it.school}</div>
                  {it.score && (
                    <div className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      {it.score}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
