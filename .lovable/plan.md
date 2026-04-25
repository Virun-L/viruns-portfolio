## Changes to make

### 1. Coding-friendly font

- Swap the body/display font to **JetBrains Mono** + **Fira Code** pairing (developer aesthetic). Concretely:
  - Headings → **Space Grotesk** stays only if you prefer; switching to **JetBrains Mono** for headings and **Fira Code** for body to fully lean into a coder vibe. Recommend: headings in `JetBrains Mono` (bold), body in `Inter` kept for readability OR body in `Fira Code` if you want full mono feel.
  - I'll go with: **Headings = JetBrains Mono (bold)**, **Body = Inter**, **Mono accents = Fira Code**. This reads as "developer" but stays legible.
- Update `index.html` Google Fonts link, `src/index.css` `font-family` rules, and `tailwind.config.ts` `fontFamily` tokens.

### 2. Hero photo replaces terminal

- Copy the uploaded photo `user-uploads://dp_resized.jpg` → `src/assets/virun-portrait.jpg`.
- In `src/components/portfolio/Hero.tsx`, remove the entire terminal card block and replace with a styled portrait:
  - Rounded image with a subtle navy border, soft shadow, and a floating accent-colored blob behind it (keeps the existing animated glow vibe).
  - Small floating "code chip" badges (e.g., `</>`, `{ }`, `git`) around the photo for a developer feel — keeps the section visually rich.
  - Image imported as ES6 module from `@/assets/virun-portrait.jpg`.

### 3. "My toolkit" → logo cloud

- Replace `src/components/portfolio/Skills.tsx` content with a single bento tile containing a **scattered logo cloud**:
  - Use **Simple Icons CDN** (`https://cdn.simpleicons.org/{slug}/14213d`) for crisp brand SVGs in the navy color, so no extra dependencies.
  - Logos: TypeScript, JavaScript, Java, Python, React, Vite, TailwindCSS, Next.js, Node.js, Express, Spring, PostgreSQL, MongoDB, MySQL, Git, Docker, GitHub Actions, Linux, AWS, Postman.
  - Position with **absolute positioning + randomized top/left/rotate/size** inside a relative container (~`h-[420px] md:h-[480px]`), with subtle float animation on hover.
  - Remove the description paragraph ("The technologies I reach for daily…"). Keep the `// skills` label + `My toolkit` heading only.

### 4. Brighter section labels (`// about`, `// services`, etc.)

- Currently rendered with `font-mono-ui text-sm text-accent` — they look washed out on white.
- Upgrade across `About.tsx`, `Services.tsx`, `Skills.tsx`, `Projects.tsx`, `Contact.tsx`:
  - Wrap in a pill: `inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-accent font-semibold tracking-wide` with a small leading dot (`h-1.5 w-1.5 rounded-full bg-accent`).
  - Bumps visual weight without breaking the palette.

### 5. Navbar CTA

- In `src/components/portfolio/Navbar.tsx`, change "Hire me" → **"Let's build"** (both desktop and mobile drawer button).

### 6. Remove orange in text (except hero)

- The `text-gradient` utility currently fades into orange. Audit & adjust:
  - **Keep** orange on hero: `Hi, I'm Virun` gradient, the `.` accent, and the `> role` chevron.
  - **Remove/replace** orange-text usages in:
    - `About.tsx` → "about me" gradient → solid navy (or subtle navy-only gradient).
    - `Services.tsx` → "do" gradient → solid navy.
    - `Skills.tsx` → "toolkit" gradient → solid navy.
    - `Projects.tsx` → "work" gradient → solid navy.
    - `Contact.tsx` → "together" gradient → solid navy.
    - `Stat` numbers in About: the `+`/`%` suffix is orange — change to navy.
    - Footer & any other stray orange text.
  - Orange stays on **non-text** elements: CTA button background, dots, borders, chips, glow shadows, the section-label pill bg, the live "Available" dot, etc. — so the accent color still pops visually.

## Files touched

- `index.html` (fonts)
- `src/index.css` (font-family, maybe a `text-gradient-navy` utility)
- `tailwind.config.ts` (fontFamily tokens)
- `src/components/portfolio/Hero.tsx` (photo replaces terminal)
- `src/components/portfolio/Skills.tsx` (logo cloud)
- `src/components/portfolio/About.tsx` (label pill, gradient → navy, stat suffix color)
- `src/components/portfolio/Services.tsx` (label pill, gradient → navy)
- `src/components/portfolio/Projects.tsx` (label pill, gradient → navy)
- `src/components/portfolio/Contact.tsx` (label pill, gradient → navy)
- `src/components/portfolio/Navbar.tsx` ("Let's build")
- `src/components/portfolio/Footer.tsx` (audit orange text)
- New asset: `src/assets/virun-portrait.jpg`

## Notes

- Logo cloud uses external CDN (`cdn.simpleicons.org`) — zero dependencies, always up to date, and recolorable via URL. Tell me if you'd prefer bundled SVGs instead.
- Photo will be displayed as-is; the gray background in your photo blends nicely with the white hero.