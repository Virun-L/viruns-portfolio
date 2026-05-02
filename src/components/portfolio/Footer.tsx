import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-surface-strong/30">
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold">VL</span>
            <div>
              <p className="font-display font-semibold text-navy">Virun Liyanage</p>
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a aria-label="GitHub" href="https://github.com/Virun-L" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:-translate-y-0.5"><Github className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/virunliyanage" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:-translate-y-0.5"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="Email" href="mailto:virundeesara1@gmail.com" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:-translate-y-0.5"><Mail className="h-4 w-4" /></a>
            <a aria-label="Back to top" href="#top" className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-navy text-navy-foreground transition-all hover:bg-navy/90 hover:-translate-y-0.5"><ArrowUp className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
