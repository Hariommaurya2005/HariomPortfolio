import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Code2,
  Database,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { Section } from "./Section";

const features = [
  { icon: Users, title: "Lead management", description: "Organize leads, customer details, and status tracking in one place." },
  { icon: CalendarClock, title: "Reminders & meetings", description: "Keep follow-ups and meeting workflows organized." },
  { icon: MessageCircle, title: "WhatsApp integration", description: "Connect customer conversations through the WhatsApp Cloud API." },
  { icon: Bot, title: "AI-assisted workflows", description: "AI meeting briefs and lead intelligence to surface useful context." },
  { icon: BookOpen, title: "Knowledge base", description: "Keep reusable business knowledge available to support AI features." },
  { icon: Database, title: "Full-stack data layer", description: "Express APIs and MongoDB Atlas support persistent CRM records." },
];
const stack = ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Tailwind CSS"];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="A project built for real workflows" description="I enjoy building complete products—connecting the interface, backend, database, and integrations.">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="project-featured glass overflow-hidden rounded-[1.75rem]"
      >
        <div className="project-showcase relative overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="project-orb project-orb-one" />
          <div className="project-orb project-orb-two" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Featured project
              </div>
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow"><Code2 className="h-6 w-6" /></div>
                <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">AutoCRM</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">A full-stack CRM that brings lead management, follow-ups, meetings, customer conversations, and AI-assisted workflows into one workspace.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => <span key={item} className="rounded-full border border-border/70 bg-background/45 px-3 py-1.5 font-mono text-[11px] text-foreground/80 sm:text-xs">{item}</span>)}
              </div>
              <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
                <a href="https://autocrm-frontend.onrender.com/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  Explore live project <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="https://github.com/Hariommaurya2005" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border/80 bg-background/40 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  GitHub profile <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="project-window relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-2xl border border-white/10 bg-[#0c111b]/95 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div>
                <span className="font-mono text-[10px] text-slate-400">AutoCRM / Workspace</span><Sparkles className="h-4 w-4 text-emerald-300" />
              </div>
              <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)]">
                <div className="border-r border-white/10 p-3 sm:p-4">
                  <div className="mb-5 flex items-center gap-2"><div className="grid h-6 w-6 place-items-center rounded-md bg-emerald-300 text-[9px] font-black text-slate-950">A</div><span className="text-[10px] font-semibold text-slate-200 sm:text-xs">AutoCRM</span></div>
                  {["Overview", "Leads", "Reminders", "Meetings", "Knowledge"].map((item, index) => <div key={item} className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-2 text-[9px] sm:text-[10px] ${index === 0 ? "bg-emerald-300/10 text-emerald-200" : "text-slate-500"}`}><span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-emerald-300" : "bg-slate-600"}`} />{item}</div>)}
                </div>
                <div className="min-w-0 p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-2"><div><p className="text-[9px] text-slate-500 sm:text-[10px]">YOUR WORKSPACE</p><p className="mt-1 text-xs font-semibold text-slate-100 sm:text-sm">Dashboard overview</p></div><span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 text-[8px] text-emerald-200 sm:text-[9px]">CRM</span></div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[{ label: "Lead tracking", value: "Organized", icon: Users }, { label: "AI insights", value: "Contextual", icon: Bot }].map((stat) => <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 sm:p-3"><stat.icon className="mb-2 h-3.5 w-3.5 text-emerald-300" /><p className="text-[8px] text-slate-500 sm:text-[9px]">{stat.label}</p><p className="mt-1 text-xs font-semibold text-slate-100 sm:text-sm">{stat.value}</p></div>)}
                  </div>
                  <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.025] p-3"><div className="mb-3 flex items-center justify-between"><span className="text-[9px] font-medium text-slate-300 sm:text-[10px]">Workspace activity</span><span className="text-[8px] text-slate-500">Overview</span></div>
                    {[ ["Lead follow-up", "Reminder workflow"], ["Meeting brief", "AI context"], ["Customer chat", "WhatsApp integration"] ].map(([title, detail]) => <div key={title} className="mb-2 flex min-w-0 items-center gap-2 last:mb-0"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-300" /><div className="min-w-0 flex-1"><p className="truncate text-[9px] text-slate-200 sm:text-[10px]">{title}</p><p className="truncate text-[8px] text-slate-500 sm:text-[9px]">{detail}</p></div><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" /></div>)}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-3 py-2.5 sm:px-4"><span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">FULL-STACK • MERN</span><span className="inline-flex items-center gap-1.5 text-[8px] text-emerald-200 sm:text-[9px]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Built with care</span></div>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">What it includes</p><h4 className="mt-2 font-display text-xl font-semibold sm:text-2xl">One workspace. Connected workflows.</h4></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Customer records and day-to-day follow-ups, with AI features layered into the workflow.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="group rounded-2xl border border-border/60 bg-background/35 p-4 transition-colors hover:border-primary/30 hover:bg-primary/[0.04] sm:p-5"><div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15"><feature.icon className="h-5 w-5" /></div><h5 className="font-display text-sm font-semibold sm:text-base">{feature.title}</h5><p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">{feature.description}</p></motion.div>)}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-border/70 p-4 sm:items-center sm:p-5"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-muted-foreground"><Sparkles className="h-4 w-4" /></div><div className="min-w-0"><p className="text-sm font-medium">More projects are on the way</p><p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">This section is ready to feature your next project when you want to add it.</p></div></div>
        </div>
      </motion.article>
    </Section>
  );
}
