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

// Brand logos via Simple Icons CDN, recolored to navy.
const navyHex = "14213d";
const logoUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/${navyHex}`;

const logos: Logo[] = [
  { slug: "react",         name: "React",         top: "8%",  left: "12%", size: "h-14 w-14",  rotate: "-rotate-6", delay: "0s" },
  { slug: "typescript",    name: "TypeScript",    top: "4%",  left: "38%", size: "h-12 w-12",  rotate: "rotate-3",  delay: "0.4s" },
  { slug: "javascript",    name: "JavaScript",    top: "16%", left: "62%", size: "h-11 w-11",  rotate: "-rotate-3", delay: "0.8s" },
  { slug: "tailwindcss",   name: "Tailwind CSS",  top: "10%", left: "82%", size: "h-16 w-16",  rotate: "rotate-6",  delay: "1.2s" },
  { slug: "vite",          name: "Vite",          top: "30%", left: "5%",  size: "h-12 w-12",  rotate: "rotate-2",  delay: "0.2s" },
  { slug: "nextdotjs",     name: "Next.js",       top: "32%", left: "26%", size: "h-14 w-14",  rotate: "-rotate-2", delay: "1.4s" },
  { slug: "nodedotjs",     name: "Node.js",       top: "36%", left: "48%", size: "h-16 w-16",  rotate: "rotate-4",  delay: "0.6s" },
  { slug: "express",       name: "Express",       top: "30%", left: "70%", size: "h-12 w-12",  rotate: "-rotate-5", delay: "1.0s" },
  { slug: "spring",        name: "Spring",        top: "34%", left: "88%", size: "h-12 w-12",  rotate: "rotate-3",  delay: "0.3s" },
  { slug: "openjdk",       name: "Java",          top: "55%", left: "10%", size: "h-14 w-14",  rotate: "-rotate-4", delay: "1.1s" },
  { slug: "python",        name: "Python",        top: "58%", left: "32%", size: "h-12 w-12",  rotate: "rotate-5",  delay: "0.7s" },
  { slug: "postgresql",    name: "PostgreSQL",    top: "60%", left: "55%", size: "h-14 w-14",  rotate: "-rotate-3", delay: "0.5s" },
  { slug: "mongodb",       name: "MongoDB",       top: "55%", left: "76%", size: "h-12 w-12",  rotate: "rotate-2",  delay: "1.3s" },
  { slug: "mysql",         name: "MySQL",         top: "62%", left: "90%", size: "h-12 w-12",  rotate: "-rotate-6", delay: "0.9s" },
  { slug: "git",           name: "Git",           top: "80%", left: "8%",  size: "h-12 w-12",  rotate: "rotate-4",  delay: "1.5s" },
  { slug: "docker",        name: "Docker",        top: "82%", left: "30%", size: "h-16 w-16",  rotate: "-rotate-3", delay: "0.4s" },
  { slug: "githubactions", name: "GitHub Actions",top: "84%", left: "54%", size: "h-12 w-12",  rotate: "rotate-3",  delay: "1.0s" },
  { slug: "linux",         name: "Linux",         top: "82%", left: "74%", size: "h-12 w-12",  rotate: "-rotate-2", delay: "0.6s" },
  { slug: "amazonwebservices", name: "AWS",       top: "84%", left: "90%", size: "h-12 w-12",  rotate: "rotate-5",  delay: "1.2s" },
  { slug: "postman",       name: "Postman",       top: "20%", left: "94%", size: "h-10 w-10",  rotate: "-rotate-4", delay: "0.8s" },
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
