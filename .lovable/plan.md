## Refocus the portfolio on full-stack (web + mobile) and a perfectionist voice

Strip every DevOps / cloud / CI-CD reference from the site and replace it with messaging that positions Virun as a full-stack developer who builds for both web and mobile and obsesses over polish and detail.

---

### 1. `src/components/portfolio/Services.tsx` — replace the DevOps service

Replace the third service card ("DevOps & Cloud", `Cloud` icon, `learning: true`) with a **Mobile Development** card. Also update the section subhead since nothing is "levelling up" anymore.

- Drop `Cloud` from the lucide import; add `Smartphone`.
- New third service:
  - **icon**: `Smartphone`
  - **title**: "Mobile Development"
  - **desc**: "Cross-platform mobile apps that feel native — smooth animations, native gestures, and pixel-tight layouts on every screen size."
  - **tags**: `["React Native", "Flutter"]`
  - No `learning` flag.
- Tweak the first two services to lean into the perfectionist angle:
  - **Full-Stack Development** desc → "End-to-end web apps where the API, data model, and UI all hold up to scrutiny — clean architecture, sensible types, no loose ends."
  - **Frontend Engineering** desc → "Polished, responsive interfaces with deliberate spacing, motion, and micro-interactions. Every pixel earns its place."
- Section subhead → "Three things I do — and one mindset that runs through all of them: sweat the details."
- Remove the `learning` badge rendering branch is fine to keep (no card sets it now), or strip it for cleanliness.

### 2. `src/components/portfolio/Hero.tsx` — typewriter roles + intro paragraph

- `roles` array → `["Full-Stack Developer", "Mobile App Developer", "CS Undergraduate @ IIT Sri Lanka", "Detail-obsessed Builder"]`.
- Intro paragraph (currently mentions "growing into the world of DevOps & cloud") → "I'm a computer science undergraduate at IIT Sri Lanka building polished full-stack experiences for the web and mobile — the kind where the details and performance quietly do the heavy lifting."

### 3. `src/components/portfolio/About.tsx` — bio copy

Rewrite the two bio paragraphs (lines 31–44):

- Heading → "Crafting polished full-stack experiences for web and mobile."
- Paragraph 1: "I'm **Virun Liyanage**, a computer science undergraduate at **IIT Sri Lanka**. I build end-to-end full-stack web and mobile applications, with a strong focus on clean architecture and interfaces that feel considered down to the last pixel."

### 4. `index.html` — meta tags

- `<title>` → "Virun Liyanage — Full-Stack Web & Mobile Developer"
- `description` meta → "Portfolio of Virun Liyanage, computer science undergraduate at IIT Sri Lanka, building polished full-stack web and mobile applications."
- `og:description` → "CS undergraduate at IIT Sri Lanka building polished full-stack web and mobile applications with an eye for detail."
- `og:title` → "Virun Liyanage — Full-Stack Web & Mobile Developer"

### 5. `src/components/portfolio/Projects.tsx` — small subhead tweak

Update the projects section subhead (line 150) to: "A selection of things I've built — full-stack platforms, web apps, and tools I sweated the details on."

---

### Files touched

- `src/components/portfolio/Services.tsx` — swap DevOps card for Mobile Development; refresh service descriptions and subhead.
- `src/components/portfolio/Hero.tsx` — update typewriter roles and intro paragraph.
- `src/components/portfolio/About.tsx` — rewrite bio heading and both paragraphs.
- `index.html` — update title, description, OG tags.
- `src/components/portfolio/Projects.tsx` — update section subhead.

### Out of scope

- No layout, color, font, or component-structure changes.
- No new sections or projects.
- No changes to the Skills/Stack visuals beyond the Services card swap.