import { Code2, Layout, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "End-to-end web apps with clean APIs, solid data models, and performant frontends.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST"],
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "Modern, responsive UIs with thoughtful interactions and a design-system mindset.",
    tags: ["TypeScript", "Vite", "Tailwind", "Framer", "shadcn/ui"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "Currently growing my toolkit — containerizing apps and shipping with confidence.",
    tags: ["Docker", "GitHub Actions", "AWS basics", "Linux", "CI/CD"],
    learning: true,
  },
];

export const Services = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-surface-strong/40">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 max-w-2xl", visible && "is-visible")}>
          <p className="font-mono-ui text-sm text-accent">// services</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-navy">
            What I <span className="text-gradient">do</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three things I love working on — and one I'm actively levelling up in.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group bento p-6 sm:p-7 relative overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-navy-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                  {s.learning && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-mono-ui font-medium uppercase tracking-wider text-accent">
                      Learning
                    </span>
                  )}
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
