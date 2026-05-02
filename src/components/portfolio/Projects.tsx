import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import fintrixImg from "@/assets/project-fintrix.png";
import healthCentreImg from "@/assets/project-health-centre.png";
import estateAgentImg from "@/assets/project-estate-agent.png";
import enerBridgeImg from "@/assets/project-enerbridge.png";
import metaAdsImg from "@/assets/project-meta-ads.png";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  image?: string;
  github?: string;
  hosted?: string;
};

const projects: Project[] = [
  {
    title: "Fintrix",
    blurb:
      "An all-in-one ERP and financial management platform that streamlines business operations. Built with React on the frontend and a Node.js/Drizzle ORM/Express backend, Fintrix automates complex financial statement generation and includes an AI-driven tool for smart internal reports — wrapped in a clean, glassmorphism-inspired UI.",
    tags: ["React", "Node.js", "Drizzle ORM", "Express"],
    image: fintrixImg,
    hosted: "https://www.fintrix.lk",
  },
  {
    title: "Health Centre Management",
    blurb:
      "A Java desktop application for managing the operations and staff of a health centre. Supports Doctors, Receptionists, and other staff with a tabular detail view and CSV-based save/load. Built to deepen OOP fundamentals — inheritance, polymorphism, encapsulation, exception handling — alongside Java Swing GUI development.",
    tags: ["Java", "Java Swing", "OOP Principles"],
    image: healthCentreImg,
    github: "https://github.com/Virun-L/HealthCentreManager.git",
  },
  {
    title: "Estate Agent Property Search",
    blurb:
      "A responsive React web app for browsing, filtering, and saving real estate listings. Demonstrates modern front-end practices with functional components, React hooks, client-side routing, and drag-and-drop interactions for a smooth favourites experience.",
    tags: ["React"],
    image: estateAgentImg,
    github: "https://github.com/Virun-L/Estate-Agent-Web-Application.git",
    hosted: "https://viruns-estate-agent-web-application.vercel.app",
  },
  {
    title: "EnerBridge",
    blurb:
      "A web platform advocating for UN Sustainable Development Goal 7 (Affordable and Clean Energy). I led the core frontend, building the User Profile interface and a comprehensive Sitemap for a seamless, accessible experience. Built with semantic HTML and modern CSS to deliver a professional digital presence that raises awareness of sustainable energy initiatives.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: enerBridgeImg,
    github: "https://github.com/Virun-L/EnerBridge.git",
    hosted: "https://enerbridge.netlify.app/",
  },
  {
    title: "Meta Ads Monthly Report Automation",
    blurb:
      "A Python tool that connects to the Meta Marketing API to pull ad campaign performance data and automatically generate branded monthly reports in Excel and PDF. Fetches impressions, reach, leads, cost per lead, and spend — scoped precisely to each month — and compiles them into a structured, ready-to-share report with a single command.",
    tags: ["Python", "Meta Marketing API", "openpyxl", "ReportLab", "python-dotenv"],
    image: metaAdsImg,
    github: "https://github.com/Virun-L/Meta-Ads-Report-Generator.git",
  },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <article className="group bento overflow-hidden flex flex-col">
    <div className="relative overflow-hidden bg-surface aspect-[16/10]">
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 30% 20%, hsl(36 98% 53% / 0.35), transparent 60%), radial-gradient(40% 40% at 80% 80%, hsl(0 0% 100% / 0.10), transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(hsl(0 0% 100% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-3xl sm:text-4xl font-bold text-white/90 tracking-tight">{p.title}</span>
          </div>
        </>
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
        <div className="flex items-center gap-1.5">
          {p.github && (
            <a
              aria-label={`${p.title} on GitHub`}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:text-navy hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {p.hosted && (
            <a
              aria-label={`${p.title} live site`}
              href={p.hosted}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:bg-accent hover:text-navy hover:-translate-y-0.5"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-xs font-semibold text-navy">
            {t}
          </span>
        ))}
      </div>
    </div>
  </article>
);

export const Projects = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-surface-strong/40">
      <div className="container">
        <div ref={ref} className={cn("reveal mb-12 flex flex-wrap items-end justify-between gap-4", visible && "is-visible")}>
          <div className="max-w-2xl">
            <span className="section-label"><span className="tag-text">//</span> projects</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy">
              Selected work
            </h2>
            <p className="mt-3 text-muted-foreground">
              A selection of things I've built — full-stack platforms, web apps, and tools I sweated the details on.
            </p>
          </div>
          <a href="#contact" className="font-mono-ui text-sm text-navy accent-underline">have a project? let's talk →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
