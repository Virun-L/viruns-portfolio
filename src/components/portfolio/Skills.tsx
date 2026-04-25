import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const groups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Next.js", "shadcn/ui"] },
  { title: "Backend", items: ["Node.js", "Express", "Spring Boot", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "DevOps & Tools", items: ["Git", "Docker", "GitHub Actions", "Linux", "AWS (learning)", "Postman"] },
];

export const Skills = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 max-w-2xl", visible && "is-visible")}>
          <p className="font-mono-ui text-sm text-accent">// skills</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-navy">
            My <span className="text-gradient">toolkit</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            The technologies I reach for daily, and the ones I'm sharpening next.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="bento p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-navy">{g.title}</h3>
                <span className="font-mono-ui text-xs text-muted-foreground">{g.items.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="group/chip relative rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-navy transition-all hover:border-accent hover:-translate-y-0.5 hover:shadow-glow cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
