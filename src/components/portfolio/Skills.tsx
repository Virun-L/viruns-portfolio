import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Logo = {
  slug: string;
  name: string;
  // Position % within the container
  top: string;
  left: string;
  // Tailwind size class
  size: string;
  rotate: string;
  delay: string;
};

// Brand logos via Simple Icons CDN, in their original brand colors.
const logoUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const logos: Logo[] = [
  { slug: "html5",       name: "HTML5",        top: "10%", left: "8%",  size: "h-14 w-14", rotate: "-rotate-6", delay: "0s" },
  { slug: "css",         name: "CSS",          top: "6%",  left: "28%", size: "h-12 w-12", rotate: "rotate-3",  delay: "0.4s" },
  { slug: "tailwindcss", name: "Tailwind CSS", top: "14%", left: "48%", size: "h-16 w-16", rotate: "rotate-6",  delay: "1.2s" },
  { slug: "javascript",  name: "JavaScript",   top: "8%",  left: "70%", size: "h-12 w-12", rotate: "-rotate-3", delay: "0.8s" },
  { slug: "typescript",  name: "TypeScript",   top: "12%", left: "90%", size: "h-12 w-12", rotate: "rotate-2",  delay: "0.6s" },
  { slug: "react",       name: "React",        top: "36%", left: "6%",  size: "h-16 w-16", rotate: "rotate-3",  delay: "0.2s" },
  { slug: "nodedotjs",   name: "Node.js",      top: "32%", left: "26%", size: "h-14 w-14", rotate: "-rotate-2", delay: "1.4s" },
  { slug: "express",     name: "Express",      top: "38%", left: "48%", size: "h-12 w-12", rotate: "rotate-4",  delay: "0.9s" },
  { slug: "openjdk",     name: "Java",         top: "34%", left: "70%", size: "h-14 w-14", rotate: "-rotate-5", delay: "1.0s" },
  { slug: "python",      name: "Python",       top: "38%", left: "92%", size: "h-12 w-12", rotate: "rotate-3",  delay: "0.3s" },
  { slug: "postgresql",  name: "PostgreSQL",   top: "62%", left: "10%", size: "h-14 w-14", rotate: "-rotate-4", delay: "1.1s" },
  { slug: "mysql",       name: "MySQL",        top: "60%", left: "30%", size: "h-12 w-12", rotate: "rotate-5",  delay: "0.7s" },
  { slug: "mongodb",     name: "MongoDB",      top: "64%", left: "52%", size: "h-14 w-14", rotate: "-rotate-3", delay: "0.5s" },
  { slug: "supabase",    name: "Supabase",     top: "60%", left: "74%", size: "h-12 w-12", rotate: "rotate-2",  delay: "1.3s" },
  { slug: "github",      name: "GitHub",       top: "64%", left: "92%", size: "h-12 w-12", rotate: "-rotate-6", delay: "0.9s" },
  { slug: "postman",     name: "Postman",      top: "86%", left: "50%", size: "h-12 w-12", rotate: "rotate-4",  delay: "0.6s" },
];

export const Skills = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 max-w-2xl", visible && "is-visible")}>
          <span className="section-label"><span className="tag-text">//</span> skills</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy">
            My toolkit
          </h2>
        </div>

        <div className="bento p-4 sm:p-6 overflow-hidden">
          <div className="relative w-full h-[520px] sm:h-[560px] md:h-[600px]">
            {/* subtle grid backdrop */}
            <div className="absolute inset-0 rounded-[var(--radius)] bg-grid opacity-50" aria-hidden />

            {logos.map((l) => (
              <div
                key={l.slug}
                title={l.name}
                aria-label={l.name}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 hover:rotate-0 hover:drop-shadow-[0_8px_18px_rgba(252,163,17,0.45)]",
                  l.rotate,
                )}
                style={{ top: l.top, left: l.left, animation: `float 6s ease-in-out ${l.delay} infinite` }}
              >
                <img
                  src={logoUrl(l.slug)}
                  alt={l.name}
                  loading="lazy"
                  className={cn(l.size, "select-none pointer-events-auto")}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
