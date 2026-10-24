import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground font-medium">Hariom Maurya</span>. Built with React, TypeScript & Tailwind.
        </div>
        <div className="flex gap-2">
          <FootIcon href="https://github.com/Hariommaurya2005" Icon={Github} />
          <FootIcon href="https://linkedin.com/in/hariom-maurya81" Icon={Linkedin} />
          <FootIcon href="mailto:hariom.maurya.dev@gmail.com" Icon={Mail} />
        </div>
      </div>
    </footer>
  );
}

function FootIcon({ href, Icon }: { href: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
