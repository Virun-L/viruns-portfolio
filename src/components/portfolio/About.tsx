import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Rocket, Coffee, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const useCounter = (target: number, start: boolean, duration = 1400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
};

const Stat = ({ value, label, suffix = "+", start }: { value: number; label: string; suffix?: string; start: boolean }) => {
  const v = useCounter(value, start);
  return (
    <div>
      <p className="font-display text-3xl sm:text-4xl font-bold text-navy">{v}<span className="text-accent">{suffix}</span></p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
};

export const About = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsIn, setStatsIn] = useState(false);
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStatsIn(true), { threshold: 0.4 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12", visible && "is-visible")}>
          <p className="font-mono-ui text-sm text-accent">// about</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-navy">
            A little bit <span className="text-gradient">about me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
          {/* Bio */}
          <article className="bento p-6 sm:p-8 md:col-span-4 md:row-span-2">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="h-4 w-4" />
              <span className="font-mono-ui text-xs uppercase tracking-wider">Who I am</span>
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-navy">
              Crafting clean, modern web experiences from Sri Lanka.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I'm <span className="text-navy font-semibold">Virun Liyanage</span>, a
              computer science undergraduate at <span className="text-navy font-semibold">IIT Sri Lanka</span>.
              My focus is full-stack development — building products that look great on the
              surface and stay maintainable underneath. Lately I'm diving into the DevOps
              side of things: containers, CI/CD pipelines, and cloud infrastructure.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I love turning ideas into shipped products, learning by building, and
              obsessing over the small details that make software feel polished.
            </p>
          </article>

          {/* Stats */}
          <div ref={statsRef} className="bento p-6 md:col-span-2 grid grid-cols-2 gap-4 content-center">
            <Stat value={3} label="Years coding" start={statsIn} />
            <Stat value={15} label="Projects built" start={statsIn} />
            <Stat value={12} label="Technologies" start={statsIn} />
            <Stat value={100} label="% Curiosity" suffix="%" start={statsIn} />
          </div>

          {/* Currently learning */}
          <div className="bento p-6 md:col-span-2 bg-navy text-navy-foreground border-navy">
            <div className="flex items-center gap-2 text-accent">
              <Rocket className="h-4 w-4" />
              <span className="font-mono-ui text-xs uppercase tracking-wider">Currently learning</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {["Docker & Kubernetes", "CI/CD with GitHub Actions", "AWS fundamentals", "System design"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="bento p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="h-4 w-4" />
              <span className="font-mono-ui text-xs uppercase tracking-wider">Based in</span>
            </div>
            <p className="mt-3 font-display text-xl font-semibold text-navy">Colombo, Sri Lanka</p>
            <p className="text-sm text-muted-foreground mt-1">Open to remote & on-site roles</p>
          </div>

          {/* Quick fact */}
          <div className="bento p-6 md:col-span-2 group overflow-hidden relative">
            <div className="flex items-center gap-2 text-accent">
              <Coffee className="h-4 w-4" />
              <span className="font-mono-ui text-xs uppercase tracking-wider">Off the keyboard</span>
            </div>
            <p className="mt-3 text-navy font-medium">Tea, side projects, and hunting for new tech to learn.</p>
            <Zap className="absolute -right-3 -bottom-3 h-24 w-24 text-accent/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
