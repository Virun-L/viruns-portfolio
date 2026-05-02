## Adjustments

### 1. Project tech-stack capsules — softer (`Projects.tsx`)
Currently `border-accent/40 bg-accent/15 font-semibold` reads too loud. Dial it back to a subtle tint that's still more visible than the original gray:

```tsx
<span className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 text-xs font-medium text-navy/90">
  {t}
</span>
```

### 2. Hero takes full screen height (`Hero.tsx`)
Replace fixed `pt-32 pb-20 md:pt-40 md:pb-28` with `min-h-screen` and use flex centering so the content (text + portrait) is vertically centered and the section grows naturally on tall content:

```tsx
<section id="top" className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-16">
```

`min-h-screen` (not fixed `h-screen`) keeps it responsive — it's at least viewport height, but can grow if content needs more.

### 3. Real social links — open in new tab

Apply to **Hero.tsx** (3 icons) and **Footer.tsx** (3 icons):

- GitHub → `https://github.com/Virun-L`
- LinkedIn → `https://www.linkedin.com/in/virunliyanage`
- Email → `mailto:virundeesara1@gmail.com`

External links get `target="_blank" rel="noopener noreferrer"`. The mailto link doesn't need new tab (it opens the mail client), but I'll keep the existing `#contact` jump behavior off — switch to direct mailto so it's a real link. (The footer "Email" icon will mailto, the hero "Email" icon will mailto too — both bypass the `#contact` anchor since user asked for direct links.)

### 4. Services subheader (`Services.tsx`)
Replace:
> Three things I do — and one mindset that runs through all of them: sweat the details.

With:
> I turn ideas into clean, reliable, and beautifully crafted software.

### 5. Footer cleanup (`Footer.tsx`)
Change:
```
© 2026 — Built with React + Vite
```
to:
```
© 2026
```

## Files touched
- `src/components/portfolio/Projects.tsx` — tag styling
- `src/components/portfolio/Hero.tsx` — section height + 3 social hrefs
- `src/components/portfolio/Footer.tsx` — 3 social hrefs + remove tagline
- `src/components/portfolio/Services.tsx` — subheader text
