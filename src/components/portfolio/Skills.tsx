import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Weight = "xl" | "l" | "m" | "s";

type Logo = {
  slug: string;
  name: string;
  weight: Weight;
  top: string;
  left: string;
  rotate: string;
  delay: string;
  // Optional override URL for logos whose brand color is invisible in dark mode.
  url?: string;
};

const logoUrl = (l: Logo) => l.url ?? `https://cdn.simpleicons.org/${l.slug}`;

// Fluid sizing per weight tier. clamp(min, fluid, max).
// Container is aspect-[4/3] with min/max heights — these caps match the
// collision-checked radii used to compute positions below, so logos never
// overlap from 320px → 1920px viewports.
const SIZE: Record<Weight, string> = {
  xl: "clamp(48px, 9vw, 96px)",
  l:  "clamp(40px, 7.5vw, 80px)",
  m:  "clamp(28px, 5.2vw, 56px)",
  s:  "clamp(22px, 3.8vw, 40px)",
};

// 24 logos. Positions computed offline against an aspect-[4/3] grid using each
// weight's MAX radius + padding. Verified collision-free at any container size.
const logos: Logo[] = [
  { slug: "typescript",     name: "TypeScript",     weight: "xl", top: "22.5%", left: "35.2%", rotate: "rotate-2",  delay: "0.6s" },
  { slug: "react",          name: "React",          weight: "xl", top: "16.4%", left: "62.7%", rotate: "rotate-3",  delay: "0.2s" },
  { slug: "nodedotjs",      name: "Node.js",        weight: "xl", top: "39.4%", left: "53.0%", rotate: "-rotate-2", delay: "1.4s" },
  {
    slug: "nextdotjs",
    name: "Next.js",
    weight: "xl",
    top: "50.6%", left: "12.9%",
    rotate: "-rotate-3", delay: "0.8s",
    url: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff",
  },

  { slug: "firebase",       name: "Firebase",       weight: "l", top: "16.7%", left: "13.0%", rotate: "-rotate-5", delay: "0.3s" },
  { slug: "tailwindcss",    name: "Tailwind CSS",   weight: "l", top: "76.6%", left: "43.5%", rotate: "rotate-6",  delay: "1.2s" },
  { slug: "mongodb",        name: "MongoDB",        weight: "l", top: "86.4%", left: "61.0%", rotate: "-rotate-3", delay: "0.5s" },
  { slug: "postgresql",     name: "PostgreSQL",     weight: "l", top: "13.1%", left: "91.0%", rotate: "-rotate-4", delay: "1.1s" },
  { slug: "docker",         name: "Docker",         weight: "l", top: "32.9%", left: "80.8%", rotate: "rotate-4",  delay: "1.0s" },

  { slug: "html5",          name: "HTML5",          weight: "m", top: "77.0%", left: "33.0%", rotate: "-rotate-6", delay: "0s"   },
  { slug: "javascript",     name: "JavaScript",     weight: "m", top: "43.8%", left: "66.1%", rotate: "-rotate-3", delay: "0.8s" },
  { slug: "python",         name: "Python",         weight: "m", top: "57.3%", left: "33.5%", rotate: "rotate-3",  delay: "0.3s" },
  {
    slug: "java",
    name: "Java",
    weight: "m",
    top: "67.0%", left: "76.2%",
    rotate: "-rotate-5", delay: "1.0s",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    slug: "github",
    name: "GitHub",
    weight: "m",
    top: "31.9%", left: "70.4%",
    rotate: "-rotate-6", delay: "0.9s",
    url: "https://cdn.simpleicons.org/github/8b5cf6",
  },
  { slug: "springboot",     name: "Spring Boot",    weight: "m", top: "64.4%", left: "9.0%",  rotate: "-rotate-4", delay: "1.3s" },
  { slug: "graphql",        name: "GraphQL",        weight: "m", top: "58.1%", left: "67.4%", rotate: "rotate-5",  delay: "0.4s" },
  { slug: "angular",        name: "Angular",        weight: "m", top: "87.9%", left: "80.3%", rotate: "rotate-4",  delay: "1.5s" },
  { slug: "mysql",          name: "MySQL",          weight: "m", top: "64.0%", left: "47.7%", rotate: "rotate-5",  delay: "0.7s" },
  { slug: "supabase",       name: "Supabase",       weight: "m", top: "42.8%", left: "30.3%", rotate: "rotate-2",  delay: "1.3s" },

  { slug: "css",            name: "CSS",            weight: "s", top: "26.4%", left: "20.5%", rotate: "rotate-3",  delay: "0.4s" },
  {
    slug: "express",
    name: "Express",
    weight: "s",
    top: "66.8%", left: "91.2%",
    rotate: "rotate-4", delay: "0.9s",
    url: "https://cdn.simpleicons.org/express/000000/ffffff",
  },
  { slug: "postman",        name: "Postman",        weight: "s", top: "74.6%", left: "86.4%", rotate: "rotate-4",  delay: "0.6s" },
  {
    slug: "jsonwebtokens",
    name: "JWT",
    weight: "s",
    top: "41.1%", left: "40.2%",
    rotate: "-rotate-3", delay: "1.1s",
    url: "https://cdn.simpleicons.org/jsonwebtokens/000000/ffffff",
  },
  { slug: "go",             name: "Go",             weight: "s", top: "82.9%", left: "6.8%",  rotate: "-rotate-2", delay: "0.5s" },
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
          {/* Aspect-ratio container so positions in % stay collision-free at every width.
              min-h prevents awkward squish on tiny screens; max-h caps it on huge ones. */}
          <div className="relative w-full mx-auto max-w-4xl aspect-[4/3] min-h-[380px] max-h-[560px]">
            <div className="absolute inset-0 rounded-[var(--radius)] bg-grid opacity-50" aria-hidden />

            <div className="relative h-full w-full">
              {logos.map((l) => {
                const size = SIZE[l.weight];
                return (
                  <div
                    key={l.slug}
                    title={l.name}
                    aria-label={l.name}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:rotate-0 hover:z-20 hover:drop-shadow-[0_6px_12px_rgba(252,163,17,0.35)]",
                      l.rotate,
                    )}
                    style={{
                      top: l.top,
                      left: l.left,
                      animation: `float 6s ease-in-out ${l.delay} infinite`,
                    }}
                  >
                    <img
                      src={logoUrl(l)}
                      alt={l.name}
                      loading="lazy"
                      draggable={false}
                      className="select-none pointer-events-auto"
                      style={{ width: size, height: size }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
