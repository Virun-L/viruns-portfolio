import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Code2, Braces, GitBranch } from "lucide-react";
import portrait from "@/assets/virun-portrait-2.jpg";

const roles = ["Full-Stack Developer", "CS Undergraduate @ IIT Sri Lanka", "DevOps Enthusiast"];

const useTypewriter = (words: string[], speed = 70, pause = 1400) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, Math.max(0, text.length - 1));
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
};

export const Hero = () => {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-hero" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />

      {/* floating shapes */}
      <div
        className="pointer-events-none absolute -left-10 top-32 h-40 w-40 rounded-full bg-accent/20 blur-3xl animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 h-56 w-56 rounded-full bg-navy/10 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1.5 text-xs font-mono-ui text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </div>

            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-navy">
              Hi, I'm <span className="text-gradient">Virun</span>
              <br />
              Liyanage<span className="text-accent">.</span>
            </h1>

            <p className="mt-5 font-mono-ui text-base sm:text-lg text-navy">
              <span className="text-accent">&gt;</span> {typed}
              <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-navy align-middle animate-blink" />
            </p>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
              I'm a computer science undergraduate at IIT Sri Lanka, focused on building polished full-stack web
              experiences and growing into the world of DevOps & cloud.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-background px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-navy hover:bg-navy hover:text-navy-foreground"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a aria-label="GitHub" href="#" className="hover:text-navy transition-colors hover:-translate-y-0.5">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="hover:text-navy transition-colors hover:-translate-y-0.5">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="Email"
                href="#contact"
                className="hover:text-navy transition-colors hover:-translate-y-0.5"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative animate-scale-in mx-auto w-full max-w-sm lg:max-w-md">
            {/* glow blobs */}
            <div
              className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-accent/35 via-transparent to-navy/25 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/40 blur-2xl animate-float"
              aria-hidden
            />

            {/* dashed frame */}
            <div className="relative rounded-[28px] border border-dashed border-navy/30 p-3">
              <div className="relative overflow-hidden rounded-[22px] bg-surface shadow-elev">
                {/* subtle accent backdrop behind subject */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(70% 60% at 50% 40%, hsl(36 98% 53% / 0.18), transparent 65%)",
                  }}
                  aria-hidden
                />
                <img
                  src={portrait}
                  alt="Portrait of Virun Liyanage, full-stack developer"
                  loading="eager"
                  className="relative z-10 block h-auto w-full object-cover"
                />
              </div>

              {/* floating code chips — overlap on top of the photo (hidden on very small screens) */}
              <div className="hidden sm:flex absolute z-20 left-2 top-6 items-center gap-2 rounded-full border border-border bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono-ui text-navy shadow-soft animate-float">
                <Code2 className="h-3.5 w-3.5 text-accent" />
                console.log("Hello World")
              </div>
              <div
                className="hidden sm:flex absolute z-20 right-2 top-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-border bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono-ui text-navy shadow-soft animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <Braces className="h-3.5 w-3.5 text-accent" />
                npm run dev
              </div>
              <div
                className="hidden sm:flex absolute z-20 left-3 bottom-4 items-center gap-2 rounded-full border border-border bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono-ui text-navy shadow-soft animate-float"
                style={{ animationDelay: "0.6s" }}
              >
                <GitBranch className="h-3.5 w-3.5 text-accent" />
                git push origin main
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
