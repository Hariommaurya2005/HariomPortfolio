
import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: [
      { n: "C", p: 85 },
      { n: "C++", p: 85 },
      { n: "Java", p: 80 },
      { n: "JavaScript", p: 90 },
      { n: "TypeScript", p: 75 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { n: "HTML", p: 95 },
      { n: "CSS", p: 90 },
      { n: "Tailwind CSS", p: 88 },
      { n: "React JS", p: 88 },
      { n: "Responsive Design", p: 90 },
    ],
  },
  {
    title: "Backend",
    items: [
      { n: "Node JS", p: 85 },
      { n: "Express JS", p: 85 },
      { n: "REST APIs", p: 85 },
      { n: "JWT Authentication", p: 80 },
      { n: "Webhook Integration", p: 75 },
    ],
  },
  {
    title: "Database",
    items: [
      { n: "MongoDB", p: 85 },
      { n: "MongoDB Atlas", p: 80 },
      { n: "SQL", p: 80 },
    ],
  },
  {
    title: "Core CS & DSA",
    items: [
      { n: "OOPs", p: 85 },
      { n: "DBMS", p: 85 },
      { n: "Computer Networks", p: 75 },
      { n: "Problem Solving", p: 85 },
    ],
  },
  {
    title: "AI & Integrations",
    items: [
      { n: "LLM Integration", p: 75 },
      { n: "Claude API", p: 75 },
      { n: "WhatsApp Cloud API", p: 75 },
      { n: "Prompt Engineering", p: 75 },
      { n: "API Integration", p: 80 },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { n: "Git", p: 88 },
      { n: "GitHub", p: 88 },
      { n: "VS Code", p: 95 },
      { n: "Vite", p: 80 },
      { n: "npm", p: 80 },
      { n: "Render", p: 75 },
      { n: "Cloudflare", p: 60 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="Skills & Tools"
      description="The technologies I work with day to day."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 font-display text-lg font-semibold">
              {g.title}
            </div>

            <div className="space-y-3">
              {g.items.map((it) => (
                <div key={it.n}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-foreground">
                      {it.n}
                    </span>

                    <span className="font-mono text-muted-foreground">
                      {it.p}%
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.p}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
