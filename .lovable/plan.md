
## 1. Skills — fix Express ↔ TypeScript overlap & missing AWS logo

**File:** `src/components/portfolio/Skills.tsx`

### Overlap fix
Currently:
- `typescript` (h-24, XL) is at `top: 9%, left: 36%`
- `express` (h-10, S) is at `top: 16%, left: 48%`

The TS logo is 96px wide, so its right edge sits very close to where Express is centered → visible collision. Move Express down and to the right into a real gap, and nudge a couple of nearby small logos so the cluster stays balanced:
- `express` → `top: 4%, left: 18%` (top-left empty pocket above HTML5)
- `javascript` (currently `top: 8%, left: 54%`) → `top: 6%, left: 50%` (no change to size, just confirms it doesn't crowd TS — already fine since both are different sizes; minor tweak only if needed)

Also re-check neighbors of any other size-mismatched pair and nudge if necessary (e.g. `python` 30/44 vs `typescript` 9/36 — vertically separated enough; `openjdk` 41/30 vs `tailwindcss` 33/16 — fine).

### AWS logo fix
The current slug `amazonwebservices` on `cdn.simpleicons.org` no longer resolves (Simple Icons removed AWS due to brand restrictions, which is why the image fails to render).

Fix by switching the AWS entry to a different icon source that still serves the AWS logo in brand colors. Two viable options:

- **Option A (preferred):** Use the devicon CDN for AWS only:
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg`
- **Option B:** Use Simple Icons' `amazon` slug (the orange Amazon smile) as a stand-in.

Implementation: extend the `Logo` type with an optional `url` override, and in `logoUrl()` prefer `l.url` when present. Keep all other 24 logos unchanged on the Simple Icons CDN.

```ts
type Logo = { ...; url?: string };
const logoUrl = (l: Logo) => l.url ?? `https://cdn.simpleicons.org/${l.slug}`;
// AWS entry:
{ slug: "aws", name: "AWS",
  url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  top: "62%", left: "60%", size: "h-14 w-14", rotate: "rotate-2", delay: "0.7s" }
```

Everything else (sizes, hover effect, float animation, brand colors) stays as is.

---

## 2. Dark mode — system-aware toggle with smooth transition

### 2a. Theme provider + hook
**New file:** `src/components/theme-provider.tsx`

A lightweight provider (no external dep) that:
- Reads stored preference from `localStorage` key `theme` (`"light" | "dark" | "system"`).
- Defaults to `"system"` on first visit → reads `window.matchMedia("(prefers-color-scheme: dark)")`.
- Adds/removes the `dark` class on `<html>` (matches the existing `darkMode: ["class"]` in `tailwind.config.ts`).
- Listens to OS-level changes via `matchMedia(...).addEventListener("change", ...)` so it reacts live when the user is on `"system"`.
- Exposes `useTheme()` returning `{ theme, setTheme, resolvedTheme }`.

### 2b. Toggle button
**New file:** `src/components/portfolio/ThemeToggle.tsx`

- A round icon button matching the existing nav styling (border, h-10 w-10, rounded-full).
- Uses `Sun` and `Moon` icons from `lucide-react` with a crossfade/rotate transition (same pattern shadcn uses):
  ```tsx
  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  ```
- Click cycles `light → dark → system → light` (or simply toggles `light ↔ dark` — I'll pick the simpler 2-state toggle and keep "system" as the initial default; a long-press or tooltip is overkill here).

### 2c. Wire into Navbar
**File:** `src/components/portfolio/Navbar.tsx`

Add `<ThemeToggle />` to the right side of the nav, just before the "Let's build" CTA on desktop, and inside the mobile menu (above the CTA). No layout changes besides inserting the button.

### 2d. Mount provider
**File:** `src/main.tsx`

Wrap `<App />` with `<ThemeProvider defaultTheme="system" storageKey="vl-theme">`.

### 2e. Dark palette (HSL tokens)
**File:** `src/index.css`

Add a `.dark` block under `@layer base` with dark counterparts for every token already in `:root`. Mapping (kept on-brand — navy + orange accent stays the identity, surfaces invert):

```css
.dark {
  --background: 222 47% 8%;            /* deep near-black navy */
  --foreground: 0 0% 96%;
  --surface: 222 40% 12%;
  --surface-strong: 222 35% 16%;

  --card: 222 45% 11%;
  --card-foreground: 0 0% 96%;
  --popover: 222 45% 11%;
  --popover-foreground: 0 0% 96%;

  /* Brand inverted: navy text becomes near-white,
     but keep --navy itself usable as a brand color via accent surface */
  --navy: 0 0% 96%;                    /* used as primary text color */
  --navy-foreground: 222 51% 12%;
  --ink: 0 0% 100%;

  --primary: 0 0% 96%;
  --primary-foreground: 222 51% 12%;

  --accent: 36 98% 56%;                /* orange stays, slight bump */
  --accent-foreground: 222 51% 12%;

  --secondary: 222 35% 18%;
  --secondary-foreground: 0 0% 96%;

  --muted: 222 35% 16%;
  --muted-foreground: 0 0% 70%;

  --destructive: 0 70% 55%;
  --destructive-foreground: 0 0% 100%;

  --border: 222 30% 22%;
  --input: 222 30% 22%;
  --ring: 36 98% 56%;

  /* Re-tune gradients/shadows so they don't disappear on dark */
  --gradient-hero: radial-gradient(1200px 600px at 10% 0%, hsl(36 98% 53% / 0.18), transparent 60%),
                   radial-gradient(900px 500px at 100% 20%, hsl(0 0% 100% / 0.06), transparent 60%);
  --shadow-sm: 0 1px 2px hsl(0 0% 0% / 0.4);
  --shadow-md: 0 8px 24px -10px hsl(0 0% 0% / 0.55);
  --shadow-lg: 0 24px 60px -20px hsl(0 0% 0% / 0.6);
  --shadow-glow: 0 10px 40px -10px hsl(36 98% 53% / 0.55);

  --sidebar-background: 222 45% 10%;
  --sidebar-foreground: 0 0% 80%;
  --sidebar-primary: 0 0% 96%;
  --sidebar-primary-foreground: 222 51% 12%;
  --sidebar-accent: 222 35% 16%;
  --sidebar-accent-foreground: 0 0% 96%;
  --sidebar-border: 222 30% 22%;
  --sidebar-ring: 36 98% 56%;
}
```

Why remap `--navy` to near-white in dark: the codebase uses `text-navy` and `bg-navy` everywhere as "primary brand surface/text". Inverting the token (rather than rewriting every component) is the cleanest way to make all sections (Hero, About, Services, Skills, Projects, Contact, Footer, Navbar) instantly look correct in dark mode without touching component code. The orange accent stays the same so brand identity is preserved.

The `glass` utility currently hardcodes `hsl(0 0% 100% / 0.7)` — update it to use a CSS variable so it darkens too:

```css
.glass {
  background: hsl(var(--background) / 0.7);
  backdrop-filter: blur(12px);
}
```

### 2f. Smooth transition
Add a global transition on color-related properties so theme switches crossfade rather than snap:

```css
@layer base {
  html {
    transition: background-color 350ms ease, color 350ms ease;
  }
  body, header, nav, section, article, aside, footer, div, span, p, h1, h2, h3, h4, h5, h6, a, button, input, textarea {
    transition: background-color 350ms ease, border-color 350ms ease, color 350ms ease, box-shadow 350ms ease;
  }
}
```

(Scoped to color properties only — does not interfere with existing transform/opacity transitions on hover, the typewriter cursor, float animation, etc. The `prefers-reduced-motion` block at the bottom of `index.css` already overrides all transitions to ~0ms, so accessibility is preserved automatically.)

To prevent a flash of incorrect theme on first paint, add a tiny inline script in `index.html` `<head>` that sets the `dark` class before React mounts:

```html
<script>
  (function() {
    try {
      var t = localStorage.getItem('vl-theme') || 'system';
      var dark = t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
      if (dark) document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
</script>
```

### 2g. Component touch-ups for dark legibility
Two spots need a small tweak so they don't look off in dark mode:

- **Hero floating chips** (`Hero.tsx` lines 148, 153, 160): they use `bg-background/90` which already adapts via the token — no change needed. Just verify visually.
- **Services cards** (`Services.tsx` line 48): `from-accent/10 via-background to-background` — adapts via tokens, no change.
- **Skills bento backdrop**: `bg-grid` uses `hsl(var(--navy) / 0.06)` for the lines. Since `--navy` becomes near-white in dark, the grid will still show subtly on the dark surface. Good — no change.

---

## Files touched

**New:**
- `src/components/theme-provider.tsx`
- `src/components/portfolio/ThemeToggle.tsx`

**Modified:**
- `src/components/portfolio/Skills.tsx` — Express position + AWS icon source
- `src/components/portfolio/Navbar.tsx` — mount `<ThemeToggle />`
- `src/main.tsx` — wrap with `<ThemeProvider>`
- `src/index.css` — `.dark` token block, glass util, smooth color transitions
- `index.html` — pre-hydration theme script

## Out of scope
- No persistence to a backend (just `localStorage`).
- Not adding a third "system" UI option to the toggle — defaulting to system on first visit is sufficient; the button toggles between light/dark thereafter.
