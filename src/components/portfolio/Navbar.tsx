import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border border-border px-4 py-2.5 transition-all",
            scrolled ? "glass shadow-soft" : "bg-background/60 backdrop-blur-sm",
          )}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold transition-transform group-hover:scale-105">
              VL
            </span>
            <span className="hidden sm:block font-display font-semibold text-navy">
              Virun<span className="text-accent">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy",
                    active === l.href && "text-navy",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-accent transition-transform duration-300",
                      active === l.href && "scale-x-100",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition-all hover:bg-navy/90 hover:shadow-glow"
          >
            Hire me
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border glass shadow-soft animate-fade-in p-3">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-navy hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-navy px-4 py-3 text-center text-sm font-medium text-navy-foreground"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
