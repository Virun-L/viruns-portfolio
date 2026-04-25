## Virun Liyanage — Personal Portfolio

A single-page, light-leaning, bento-grid portfolio with smooth scroll, micro-interactions, and a developer-focused aesthetic. Palette locked to: `#000000`, `#14213d` (deep navy — primary text/dark accents), `#fca311` (orange — highlights/CTAs), `#e5e5e5` (light gray — surfaces/dividers), `#ffffff` (background).

### Design system
- Background mostly white with `#e5e5e5` section breaks — never feels dark.
- Headings in `#14213d`, body in a softer navy/gray, CTAs and key highlights in `#fca311`.
- Typography: modern sans (Inter / Space Grotesk pairing) with a slightly playful mono accent for code snippets and labels (e.g. `> full-stack`).
- Rounded corners, subtle shadows, animated noise/grid background only behind hero.
- Micro-interactions everywhere: hover lifts, magnetic buttons, animated underlines, staggered fade-ins on scroll, animated counters, cursor-follow glow on bento cards.

### Sections (top to bottom, single page with sticky nav)

1. **Sticky Navbar**
   - Logo "VL" mark + links: About, Services, Skills, Projects, Contact.
   - Active section highlight as you scroll, animated underline, mobile hamburger with slide-in drawer.

2. **Hero**
   - Big intro: "Hi, I'm Virun Liyanage" with animated typewriter rotating between "Full-stack Developer", "CS Undergraduate @ IIT Sri Lanka", "DevOps Enthusiast".
   - Short tagline, two CTAs: "View Projects" (orange) and "Get in touch" (outline).
   - Right side: animated bento-style code/terminal card with typing effect.
   - Subtle floating shapes + grid background.

3. **About (bento grid)**
   - Multi-tile bento layout combining:
     - Bio tile (longer paragraph about being a CS undergrad at IIT Sri Lanka focused on full-stack with growing DevOps interest).
     - Stats tile (animated counters: years coding, projects, technologies — placeholders).
     - "Currently learning" tile (DevOps tools).
     - Location/availability tile.
     - Quick-fact tile (favorite stack, etc.).

4. **Services / What I do**
   - 3 cards with icons and hover tilt:
     - Full-Stack Web Development
     - Frontend Engineering
     - DevOps & Cloud (learning)
   - Each lists a few keywords (React, Node, Docker, CI/CD, AWS basics, etc.).

5. **Skills**
   - Categorized chips/badges: Languages, Frontend, Backend, Databases, DevOps & Tools.
   - Hover reveals subtle orange glow; staggered entrance on scroll.

6. **Projects (5 placeholder cards in bento layout)**
   - Each card: project image placeholder, title ("Project One" … "Project Five"), short blurb placeholder, tech stack tags, and two links (Live demo / GitHub) — all placeholder until you provide details.
   - Hover: scale, shadow lift, orange accent border, image zoom.
   - Mixed bento sizing (one large featured + four standard) for visual rhythm.

7. **Contact**
   - Left: heading "Let's build something together" + email, GitHub, LinkedIn icon links (placeholders you can fill in).
   - Right: contact form with Name, Email, Subject, Message fields and a "Send Message" button.
   - Form is UI-only for now (no submit logic) — wired up later when you're ready.

8. **Footer**
   - Minimal: name, year, social icons, "Built with React + Vite" note, back-to-top button.

### Animations & interactions
- Scroll-triggered fade/slide reveals using Intersection Observer.
- Tailwind keyframes already available (`fade-in`, `scale-in`) extended with slide-up and stagger.
- Smooth scroll between sections via nav clicks.
- Hover micro-interactions on every card and button.
- Animated typewriter in hero, animated stat counters in About.
- Reduced-motion support honored.

### Technical notes
- Pure frontend, no backend yet (matches your "keep contact form, add send later" preference).
- Routes stay at `/` (single-page); NotFound kept as fallback.
- Design tokens added to `index.css` and `tailwind.config.ts` so the palette is reusable everywhere — no hardcoded colors in components.
- Fully responsive: bento grids collapse cleanly on tablet and mobile (matches your 741px preview).

### What I'll need from you later
- Real project details (title, description, tech, image, links) for the 5 placeholders.
- Real contact links (email, GitHub, LinkedIn) — I'll use clearly-marked placeholders for now.
- Optional: a profile photo or avatar (otherwise I'll use a tasteful illustrated placeholder).
