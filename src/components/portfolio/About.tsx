import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Database, Layers, Cpu } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Software Development", desc: "Building reliable, scalable software with clean architecture." },
  { icon: Layers, title: "MERN Stack", desc: "End-to-end web apps with MongoDB, Express, React & Node." },
  { icon: Cpu, title: "DSA & Problem Solving", desc: "Daily practice on core data structures and algorithms." },
  { icon: Database, title: "Database Design", desc: "Modeling data with MongoDB and SQL for real-world use." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer in the making" description="MCA student at G.L. Bajaj Institute of Technology and Management — focused on shipping quality software.">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 lg:col-span-2 shadow-card"
        >
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-glow">
              HM
            </div>
            <div>
              <div className="font-display text-xl font-semibold">Hariom Maurya</div>
              <div className="font-mono text-xs text-muted-foreground">software_dev / mca_student</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
           I'm an MCA student with a 7.52 CGPA and six months of full-stack development internship experience. I enjoy building responsive, user-friendly web applications and turning ideas into practical solutions. I'm passionate about exploring modern technologies, strengthening my problem-solving skills through DSA, and continuously growing as a software developer.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Right now I'm actively preparing for Software Developer and Full
            Stack Developer roles, sharpening DSA fundamentals, and shipping
            side projects.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-border/60 p-3">
              <div className="text-muted-foreground">Degree</div>
              <div className="mt-1 font-semibold">MCA · G.L. Bajaj Institute of Technology and Management</div>
            </div>
            <div className="rounded-xl border border-border/60 p-3">
              <div className="text-muted-foreground">Focus</div>
              <div className="mt-1 font-semibold">MERN · DSA</div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <h.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-semibold">{h.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
