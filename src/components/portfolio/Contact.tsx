import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "hariom.maurya.dev@gmail.com", href: "mailto:hariom.maurya.dev@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9305799787", href: "tel:+919305799787" },
  { icon: Github, label: "GitHub", value: "Hariommaurya2005", href: "https://github.com/Hariommaurya2005" },
  { icon: Linkedin, label: "LinkedIn", value: "hariom-maurya81", href: "https://linkedin.com/in/hariom-maurya81" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hariom.maurya.dev@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client...");
      setSending(false);
      form.reset();
    }, 500);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something" description="Open to internships, full-time roles, and collaboration.">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass space-y-4 rounded-3xl p-6 lg:col-span-3 shadow-card"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Jane Recruiter" />
            <Field label="Your email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about the role or opportunity…"
              className="w-full resize-none rounded-xl border border-border/60 bg-background/40 p-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {sending ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border/60 bg-background/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
