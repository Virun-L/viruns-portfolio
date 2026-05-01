Two-part update to `src/components/portfolio/Projects.tsx` plus new image assets in `src/assets/`. Done as one edit.

---

## Part A — Content + preview images for projects 1–5

### Assets

Copy uploaded screenshots:

- `user-uploads://fintrix.png` → `src/assets/project-fintrix.png`
- `user-uploads://estate-agent-web-application.png` → `src/assets/project-estate-agent.png`
- `user-uploads://project_4.png` → `src/assets/project-enerbridge.png`

Generate two illustrations via the AI gateway (`google/gemini-2.5-flash-image`), save to `src/assets/`:

- `project-health-centre.png` — *"Minimalist illustration of a Java Swing health-centre staff management desktop window on a deep navy background. Stylized table listing doctors and receptionists, small medical cross icon, warm amber accent highlights, clean flat design, soft glow, 16:10 aspect ratio, no text, no logos."*
- `project-meta-ads.png` — *"Minimalist illustration of an automated Meta Ads monthly report on a deep navy background. A stylized Excel spreadsheet and PDF document side by side with subtle bar-chart and KPI tiles (impressions, reach, leads), warm amber accent highlights, small Python/automation gear motif, clean flat design, soft glow, 16:10 aspect ratio, no readable text, no brand logos."*

### Component

Extend the `Project` type with `image?: string`, import the five assets, and in `ProjectCard` render an `<img>` filling the existing `aspect-[16/10]` preview area (with `object-cover` and `group-hover:scale-105`) when `p.image` is set; the gradient/grid/title block stays as fallback. The Featured badge stays on top.

```tsx
<div className="relative overflow-hidden bg-navy aspect-[16/10]">
  {p.image ? (
    <img
      src={p.image}
      alt={`${p.title} preview`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  ) : (
    <>{/* existing gradient + grid + centered title */}</>
  )}
  {p.featured && (
    <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-navy">
      <Star className="h-3 w-3" /> Featured
    </div>
  )}
</div>
```

### `projects` array (entries 0–4)

1. **Fintrix** — React, Node.js, Drizzle ORM, Express. Featured. Image: `project-fintrix.png`.
2. **Health Centre Management** — Java, Java Swing, OOP Principles. Image: `project-health-centre.png`.
3. **Estate Agent Property Search** — React. Image: `project-estate-agent.png`.
4. **EnerBridge** — HTML, CSS, JavaScript. Image: `project-enerbridge.png`.
5. **Meta Ads Monthly Report Automation** — Python, Meta Marketing API, openpyxl, ReportLab, python-dotenv. Image: `project-meta-ads.png`.

(Full blurbs as previously approved.)

---

## Part B — Real GitHub + hosted links, conditional, new tab

Extend the `Project` type:

```ts
type Project = {
  title: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  github?: string;
  hosted?: string;
};
```

Per-project links:

| # | Project | github | hosted |
|---|---|---|---|
| 1 | Fintrix | — | https://www.fintrix.lk |
| 2 | Health Centre Management | https://github.com/Virun-L/HealthCentreManager.git | — |
| 3 | Estate Agent Property Search | https://github.com/Virun-L/Estate-Agent-Web-Application.git | https://viruns-estate-agent-web-application.vercel.app |
| 4 | EnerBridge | https://github.com/Virun-L/EnerBridge.git | https://enerbridge.netlify.app/ |
| 5 | Meta Ads Monthly Report Automation | https://github.com/Virun-L/Meta-Ads-Report-Generator.git | — |

Replace the always-rendered icon row in `ProjectCard` with conditional anchors. Each uses `target="_blank"` and `rel="noopener noreferrer"`.

```tsx
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
```

Result per card: P1 hosted only · P2 GitHub only · P3 both · P4 both · P5 GitHub only.

---

## Files touched

- `src/assets/project-fintrix.png` — copied from upload
- `src/assets/project-estate-agent.png` — copied from upload
- `src/assets/project-enerbridge.png` — copied from upload
- `src/assets/project-health-centre.png` — AI-generated
- `src/assets/project-meta-ads.png` — AI-generated
- `src/components/portfolio/Projects.tsx` — type extension, image imports, conditional `<img>`, conditional new-tab link icons, populated entries 0–4

## Out of scope

- No changes to section header, grid layout, hover styling, or other portfolio sections.
