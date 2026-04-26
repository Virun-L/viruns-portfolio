import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Logo = {
  slug: string;
  name: string;
  // Position % within the centered cluster container — hand-jittered, no rows/columns
  top: string;
  left: string;
  // Tailwind size class — mixed: small / medium / large / extra large
  size: string;
  rotate: string;
  delay: string;
  // Optional override for non-Simple-Icons sources (e.g. AWS via devicon)
  url?: string;
};

// Default to Simple Icons CDN (original brand colors). Per-logo override via `url`.
const logoUrl = (l: Logo) => l.url ?? `https://cdn.simpleicons.org/${l.slug}`;

// 25 logos. Coordinates hand-tuned: every neighbor differs in `top` by ≥8%,
// no shared `left` columns, irregular spacing, sized for visual breathing room.
const logos: Logo[] = [
  // XL anchors (h-24)
  { slug: "react",          name: "React",          top: "22%", left: "62%", size: "h-24 w-24", rotate: "rotate-3",  delay: "0.2s" },
  { slug: "typescript",     name: "TypeScript",     top: "9%",  left: "36%", size: "h-24 w-24", rotate: "rotate-2",  delay: "0.6s" },
  { slug: "nodedotjs",      name: "Node.js",        top: "47%", left: "78%", size: "h-24 w-24", rotate: "-rotate-2", delay: "1.4s" },
  { slug: "nextdotjs",      name: "Next.js",        top: "73%", left: "26%", size: "h-24 w-24", rotate: "-rotate-3", delay: "0.8s" },

  // L (h-20)
  { slug: "tailwindcss",    name: "Tailwind CSS",   top: "33%", left: "16%", size: "h-20 w-20", rotate: "rotate-6",  delay: "1.2s" },
  { slug: "mongodb",        name: "MongoDB",        top: "55%", left: "44%", size: "h-20 w-20", rotate: "-rotate-3", delay: "0.5s" },
  { slug: "docker",         name: "Docker",         top: "82%", left: "62%", size: "h-20 w-20", rotate: "rotate-4",  delay: "1.0s" },
  { slug: "firebase",       name: "Firebase",       top: "13%", left: "82%", size: "h-20 w-20", rotate: "-rotate-5", delay: "0.3s" },
  { slug: "postgresql",     name: "PostgreSQL",     top: "65%", left: "8%",  size: "h-20 w-20", rotate: "-rotate-4", delay: "1.1s" },

  // M (h-14)
  { slug: "html5",          name: "HTML5",          top: "18%", left: "12%", size: "h-14 w-14", rotate: "-rotate-6", delay: "0s"   },
  { slug: "javascript",     name: "JavaScript",     top: "6%",  left: "50%", size: "h-14 w-14", rotate: "-rotate-3", delay: "0.8s" },
  { slug: "python",         name: "Python",         top: "30%", left: "44%", size: "h-14 w-14", rotate: "rotate-3",  delay: "0.3s" },
  { slug: "openjdk",        name: "Java",           top: "41%", left: "30%", size: "h-14 w-14", rotate: "-rotate-5", delay: "1.0s" },
  { slug: "github",         name: "GitHub",         top: "38%", left: "92%", size: "h-14 w-14", rotate: "-rotate-6", delay: "0.9s" },
  {
    slug: "aws",
    name: "AWS",
    top: "62%",
    left: "60%",
    size: "h-14 w-14",
    rotate: "rotate-2",
    delay: "0.7s",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  { slug: "springboot",     name: "Spring Boot",    top: "88%", left: "44%", size: "h-14 w-14", rotate: "-rotate-4", delay: "1.3s" },
  { slug: "graphql",        name: "GraphQL",        top: "72%", left: "78%", size: "h-14 w-14", rotate: "rotate-5",  delay: "0.4s" },
  { slug: "angular",        name: "Angular",        top: "57%", left: "26%", size: "h-14 w-14", rotate: "rotate-4",  delay: "1.5s" },
  { slug: "mysql",          name: "MySQL",          top: "50%", left: "60%", size: "h-14 w-14", rotate: "rotate-5",  delay: "0.7s" },
  { slug: "supabase",       name: "Supabase",       top: "27%", left: "78%", size: "h-14 w-14", rotate: "rotate-2",  delay: "1.3s" },

  // S (h-10)
  { slug: "css",            name: "CSS",            top: "48%", left: "10%", size: "h-10 w-10", rotate: "rotate-3",  delay: "0.4s" },
  { slug: "express",        name: "Express",        top: "4%",  left: "18%", size: "h-10 w-10", rotate: "rotate-4",  delay: "0.9s" },
  { slug: "postman",        name: "Postman",        top: "90%", left: "12%", size: "h-10 w-10", rotate: "rotate-4",  delay: "0.6s" },
  { slug: "jsonwebtokens",  name: "JWT",            top: "78%", left: "92%", size: "h-10 w-10", rotate: "-rotate-3", delay: "1.1s" },
  { slug: "go",             name: "Go",             top: "6%",  left: "70%", size: "h-10 w-10", rotate: "-rotate-2", delay: "0.5s" },
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
          <div className="relative w-full h-[420px] sm:h-[460px] md:h-[500px]">
            {/* subtle grid backdrop */}
            <div className="absolute inset-0 rounded-[var(--radius)] bg-grid opacity-50" aria-hidden />

            {/* Centered cluster area */}
            <div className="relative max-w-3xl mx-auto h-full">
              {logos.map((l) => (
                <div
                  key={l.slug}
                  title={l.name}
                  aria-label={l.name}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:rotate-0 hover:z-20 hover:drop-shadow-[0_6px_12px_rgba(252,163,17,0.35)]",
                    l.rotate,
                  )}
                  style={{ top: l.top, left: l.left, animation: `float 6s ease-in-out ${l.delay} infinite` }}
                >
                  <img
                    src={logoUrl(l)}
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
      </div>
    </section>
  );
};
