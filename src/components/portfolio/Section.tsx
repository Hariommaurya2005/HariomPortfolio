import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-3 inline-block rounded-full glass px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
