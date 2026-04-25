import { ArrowUpRight, Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Project One",
    blurb: "Featured project placeholder — a flagship full-stack app showcasing end-to-end architecture and a polished UI.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    featured: true,
  },
  { title: "Project Two", blurb: "Short project description placeholder. Replace with real details later.", tags: ["TypeScript", "Vite"] },
  { title: "Project Three", blurb: "Short project description placeholder. Replace with real details later.", tags: ["Spring Boot", "MySQL"] },
  { title: "Project Four", blurb: "Short project description placeholder. Replace with real details later.", tags: ["Next.js", "Tailwind"] },
  { title: "Project Five", blurb: "Short project description placeholder. Replace with real details later.", tags: ["Docker", "Express"] },
];

const ProjectCard = ({ p, large = false }: { p: Project; large?: boolean }) => (
  <article
    className={cn(
      "group bento overflow-hidden flex flex-col",
      large ? "md:col-span-2 md:row-span-2" : "",
    )}
  >
    {/* Image / preview placeholder */}
    <div className={cn("relative overflow-hidden bg-navy", large ? "aspect-[16/10]" : "aspect-[16/10]")}>
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 30% 20%, hsl(36 98% 53% / 0.35), transparent 60%), radial-gradient(40% 40% at 80% 80%, hsl(0 0% 100% / 0.10), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-3xl sm:text-4xl font-bold text-white/90 tracking-tight">{p.title}</span>
      </div>
      {p.featured && (
        <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-navy">
          <Star className="h-3 w-3" /> Featured
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
        <div className="flex items-center gap-1.5">
          <a
            aria-label="GitHub"
            href="#"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:text-navy hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            aria-label="Live demo"
            href="#"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:text-navy hover:-translate-y-0.5"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-navy/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  </article>
);

export const Projects = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-surface-strong/40">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 flex flex-wrap items-end justify-between gap-4", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="font-mono-ui text-sm text-accent">// projects</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-navy">
              Selected <span className="text-gradient">work</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A collection of things I've built. Real details coming soon — these are placeholders for now.
            </p>
          </div>
          <a href="#contact" className="font-mono-ui text-sm text-navy accent-underline">have a project? let's talk →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(0,auto)]">
          <ProjectCard p={projects[0]} large />
          <ProjectCard p={projects[1]} />
          <ProjectCard p={projects[2]} />
          <ProjectCard p={projects[3]} />
          <ProjectCard p={projects[4]} />
        </div>
      </div>
    </section>
  );
};
