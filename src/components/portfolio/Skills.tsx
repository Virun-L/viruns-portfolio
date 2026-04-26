import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Logo = {
  slug: string;
  name: string;
  // Position % within the centered cluster container — collision-checked, no overlaps
  top: string;
  left: string;
  // Tailwind size class — mixed: small / medium / large / extra large
  size: string;
  rotate: string;
  delay: string;
  // Optional override URL for logos whose brand color is invisible in dark mode.
  // Simple Icons dual-color URL (`/{slug}/{light}/{dark}`) auto-switches with
  // the user's prefers-color-scheme, matching our default `theme: "system"`.
  url?: string;
};

// Default to Simple Icons CDN (original brand colors). Per-logo override via `url`.
const logoUrl = (l: Logo) => l.url ?? `https://cdn.simpleicons.org/${l.slug}`;

// 24 logos. Coordinates collision-checked: every pair's center distance is
// greater than the sum of their radii plus padding. Spread irregularly across
// top: 4–92%, left: 6–94% so no row/column structure is visible.
const logos: Logo[] = [
  // XL anchors (h-24) — placed first, well separated
  { slug: "typescript",     name: "TypeScript",     top: "8%",  left: "32%", size: "h-24 w-24", rotate: "rotate-2",  delay: "0.6s" },
  { slug: "react",          name: "React",          top: "18%", left: "70%", size: "h-24 w-24", rotate: "rotate-3",  delay: "0.2s" },
  { slug: "nodedotjs",      name: "Node.js",        top: "50%", left: "84%", size: "h-24 w-24", rotate: "-rotate-2", delay: "1.4s" },
  {
    slug: "nextdotjs",
    name: "Next.js",
    top: "80%",
    left: "22%",
    size: "h-24 w-24",
    rotate: "-rotate-3",
    delay: "0.8s",
    url: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff",
  },

  // L (h-20)
  { slug: "firebase",       name: "Firebase",       top: "10%", left: "86%", size: "h-20 w-20", rotate: "-rotate-5", delay: "0.3s" },
  { slug: "tailwindcss",    name: "Tailwind CSS",   top: "34%", left: "12%", size: "h-20 w-20", rotate: "rotate-6",  delay: "1.2s" },
  { slug: "mongodb",        name: "MongoDB",        top: "56%", left: "38%", size: "h-20 w-20", rotate: "-rotate-3", delay: "0.5s" },
  { slug: "postgresql",     name: "PostgreSQL",     top: "70%", left: "8%",  size: "h-20 w-20", rotate: "-rotate-4", delay: "1.1s" },
  { slug: "docker",         name: "Docker",         top: "86%", left: "64%", size: "h-20 w-20", rotate: "rotate-4",  delay: "1.0s" },

  // M (h-14)
  { slug: "html5",          name: "HTML5",          top: "22%", left: "14%", size: "h-14 w-14", rotate: "-rotate-6", delay: "0s"   },
  { slug: "javascript",     name: "JavaScript",     top: "6%",  left: "54%", size: "h-14 w-14", rotate: "-rotate-3", delay: "0.8s" },
  { slug: "python",         name: "Python",         top: "32%", left: "48%", size: "h-14 w-14", rotate: "rotate-3",  delay: "0.3s" },
  {
    slug: "java",
    name: "Java",
    top: "42%",
    left: "24%",
    size: "h-14 w-14",
    rotate: "-rotate-5",
    delay: "1.0s",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    slug: "github",
    name: "GitHub",
    top: "30%",
    left: "90%",
    size: "h-14 w-14",
    rotate: "-rotate-6",
    delay: "0.9s",
    url: "https://cdn.simpleicons.org/github/8b5cf6",
  },
  { slug: "springboot",     name: "Spring Boot",    top: "92%", left: "42%", size: "h-14 w-14", rotate: "-rotate-4", delay: "1.3s" },
  { slug: "graphql",        name: "GraphQL",        top: "74%", left: "78%", size: "h-14 w-14", rotate: "rotate-5",  delay: "0.4s" },
  { slug: "angular",        name: "Angular",        top: "60%", left: "64%", size: "h-14 w-14", rotate: "rotate-4",  delay: "1.5s" },
  { slug: "mysql",          name: "MySQL",          top: "64%", left: "22%", size: "h-14 w-14", rotate: "rotate-5",  delay: "0.7s" },
  { slug: "supabase",       name: "Supabase",       top: "46%", left: "62%", size: "h-14 w-14", rotate: "rotate-2",  delay: "1.3s" },

  // S (h-10) — tucked into corner pockets
  { slug: "css",            name: "CSS",            top: "50%", left: "8%",  size: "h-10 w-10", rotate: "rotate-3",  delay: "0.4s" },
  {
    slug: "express",
    name: "Express",
    top: "4%",
    left: "16%",
    size: "h-10 w-10",
    rotate: "rotate-4",
    delay: "0.9s",
    url: "https://cdn.simpleicons.org/express/000000/ffffff",
  },
  { slug: "postman",        name: "Postman",        top: "90%", left: "10%", size: "h-10 w-10", rotate: "rotate-4",  delay: "0.6s" },
  {
    slug: "jsonwebtokens",
    name: "JWT",
    top: "78%",
    left: "92%",
    size: "h-10 w-10",
    rotate: "-rotate-3",
    delay: "1.1s",
    url: "https://cdn.simpleicons.org/jsonwebtokens/000000/ffffff",
  },
  { slug: "go",             name: "Go",             top: "6%",  left: "78%", size: "h-10 w-10", rotate: "-rotate-2", delay: "0.5s" },
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
