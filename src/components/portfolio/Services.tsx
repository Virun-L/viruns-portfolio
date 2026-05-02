import { Code2, Layout, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "End-to-end web apps where the API, data model, and UI all hold up to scrutiny — clean architecture, sensible types, no loose ends.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST"],
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "Polished, responsive interfaces with deliberate spacing, motion, and micro-interactions. Every pixel earns its place.",
    tags: ["TypeScript", "Vite", "Tailwind", "Framer", "shadcn/ui"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps that feel native — smooth animations, native gestures, and pixel-tight layouts on every screen size.",
    tags: ["React Native", "Flutter"],
  },
];

export const Services = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-surface-strong/40">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 max-w-2xl", visible && "is-visible")}>
          <span className="section-label"><span className="tag-text">//</span> services</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy">
            What I do
          </h2>
          <p className="mt-3 text-muted-foreground">
            I turn ideas into clean, reliable, and beautifully crafted software.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group bento p-6 sm:p-7 relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-background border-transparent transition-colors hover:from-accent/20 hover:border-accent/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-navy-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-navy/80 transition-colors group-hover:border-accent/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
