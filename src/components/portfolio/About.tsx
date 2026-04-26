import { GraduationCap, MapPin, Coffee, Zap, Dumbbell, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export const About = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const hobbies = [
    { icon: Dumbbell, label: "Gym" },
    { icon: Camera, label: "Photography" },
    { icon: Coffee, label: "Coffee" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12", visible && "is-visible")}>
          <span className="section-label"><span className="tag-text">//</span> about</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy">
            A little bit about me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
          {/* Bio */}
          <article className="bento p-6 sm:p-8 md:col-span-6">
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

          {/* Location */}
          <div className="bento p-6 md:col-span-3">
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="h-4 w-4" />
              <span className="font-mono-ui text-xs uppercase tracking-wider">Based in</span>
            </div>
            <p className="mt-3 font-display text-xl font-semibold text-navy">Colombo, Sri Lanka</p>
            <p className="text-sm text-muted-foreground mt-1">Open to remote & on-site roles</p>
          </div>

          {/* Off the keyboard — hobbies */}
          <div className="bento p-6 md:col-span-3 group overflow-hidden relative">
            <div className="flex items-center gap-2 text-accent">
              <Coffee className="h-4 w-4" />
              <span className="font-mono-ui text-xs uppercase tracking-wider">Off the keyboard</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 relative z-10">
              {hobbies.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-navy transition-all hover:border-accent hover:-translate-y-0.5"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  {label}
                </span>
              ))}
            </div>
            <Zap className="absolute -right-3 -bottom-3 h-24 w-24 text-accent/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
