import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Logo = {
  slug: string;
  name: string;
  // Position % within the centered cluster container
  top: string;
  left: string;
  // Tailwind size class — mixed: small / medium / large / extra large
  size: string;
  rotate: string;
  delay: string;
};

// Brand logos via Simple Icons CDN, in their original brand colors.
const logoUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

// Tighter, organic cluster — 4 loose rows, varied sizes.
// XL anchors: react, typescript, nodedotjs.
// L anchors: tailwindcss, postgresql, mongodb.
const logos: Logo[] = [
  // Row 1 — top band ~12–22%
  { slug: "html5",       name: "HTML5",        top: "14%", left: "18%", size: "h-14 w-14", rotate: "-rotate-6", delay: "0s"   },
  { slug: "css",         name: "CSS",          top: "18%", left: "33%", size: "h-10 w-10", rotate: "rotate-3",  delay: "0.4s" },
  { slug: "tailwindcss", name: "Tailwind CSS", top: "12%", left: "50%", size: "h-20 w-20", rotate: "rotate-6",  delay: "1.2s" },
  { slug: "javascript",  name: "JavaScript",   top: "20%", left: "67%", size: "h-14 w-14", rotate: "-rotate-3", delay: "0.8s" },
  { slug: "typescript",  name: "TypeScript",   top: "14%", left: "82%", size: "h-24 w-24", rotate: "rotate-2",  delay: "0.6s" },

  // Row 2 — ~34–44%
  { slug: "react",       name: "React",        top: "40%", left: "20%", size: "h-24 w-24", rotate: "rotate-3",  delay: "0.2s" },
  { slug: "nodedotjs",   name: "Node.js",      top: "36%", left: "38%", size: "h-20 w-20", rotate: "-rotate-2", delay: "1.4s" },
  { slug: "express",     name: "Express",      top: "42%", left: "53%", size: "h-10 w-10", rotate: "rotate-4",  delay: "0.9s" },
  { slug: "openjdk",     name: "Java",         top: "38%", left: "68%", size: "h-14 w-14", rotate: "-rotate-5", delay: "1.0s" },
  { slug: "python",      name: "Python",       top: "42%", left: "84%", size: "h-14 w-14", rotate: "rotate-3",  delay: "0.3s" },

  // Row 3 — ~58–68%
  { slug: "postgresql",  name: "PostgreSQL",   top: "62%", left: "18%", size: "h-20 w-20", rotate: "-rotate-4", delay: "1.1s" },
  { slug: "mysql",       name: "MySQL",        top: "66%", left: "35%", size: "h-14 w-14", rotate: "rotate-5",  delay: "0.7s" },
  { slug: "mongodb",     name: "MongoDB",      top: "60%", left: "52%", size: "h-20 w-20", rotate: "-rotate-3", delay: "0.5s" },
  { slug: "supabase",    name: "Supabase",     top: "66%", left: "70%", size: "h-10 w-10", rotate: "rotate-2",  delay: "1.3s" },
  { slug: "github",      name: "GitHub",       top: "60%", left: "84%", size: "h-14 w-14", rotate: "-rotate-6", delay: "0.9s" },

  // Row 4 — bottom anchor ~82%
  { slug: "postman",     name: "Postman",      top: "84%", left: "50%", size: "h-14 w-14", rotate: "rotate-4",  delay: "0.6s" },
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
      </div>
    </section>
  );
};
