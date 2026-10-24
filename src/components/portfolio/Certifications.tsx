import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Trophy, Target, Zap } from "lucide-react";

const certs = [
  { title: "Full Stack Web Development", issuer: "MERN Stack Program", icon: Award },
  { title: "Advanced Web Technologies", issuer: "Minicimex Technologies", icon: Award },
  { title: "WebDX Brainstorming Workshop", issuer: "School of Management Sciences", icon: Award },
];

const achievements = [
  { title: "6-Month MERN Internship", desc: "Shipped real-world full-stack features in production teams.", icon: Trophy },
  { title: "Technical Workshops", desc: "Active participant in advanced web tech and WebDX events.", icon: Zap },
  { title: "Continuous DSA Practice", desc: "Consistent daily problem-solving across core data structures.", icon: Target },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications & Achievements">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-muted-foreground">Certifications</h3>
          <div className="space-y-3">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40"
              >
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-muted-foreground">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl p-5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                    <a.icon className="h-4 w-4" />
                  </div>
                  <div className="font-semibold">{a.title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
