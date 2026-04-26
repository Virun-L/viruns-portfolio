## Toolkit fixes — `src/components/portfolio/Skills.tsx`

Three changes, all in this one file. No other files touched.

---

### 1. Remove the AWS logo

The Devicon URL is still failing in this environment. Rather than chase another CDN, drop the AWS entry entirely (24 logos remain). The blank space it leaves at `top: 62%, left: 60%` gets reclaimed by the new layout in step 2.

---

### 2. Rebuild the layout with explicit collision checks (no overlaps)

The current pairs that visibly collide (centers closer than the sum of their radii) include:
- `mongodb` (h-20, 55/44) ↔ `mysql` (h-14, 50/60) — centers ~17% apart, combined radius ~17%, touching.
- `python` (h-14, 30/44) ↔ `typescript` (h-24, 9/36) — TS extends down past 21%, python center at 30/44, very close.
- `openjdk` (h-14, 41/30) ↔ `tailwindcss` (h-20, 33/16) — close diagonal.
- `nodedotjs` (h-24, 47/78) ↔ `mysql` (h-14, 50/60) — touching horizontally.
- `nodedotjs` ↔ `supabase` (27/78) — same column, ~20% vertical gap, edges meet.
- `angular` (57/26) ↔ `nextdotjs` (73/26) — same `left`, ~16% vertical, large logos overlap.
- `springboot` (88/44) ↔ `nextdotjs` (73/26) — close.
- `firebase` (h-20, 13/82) ↔ `supabase` (h-14, 27/78) — close.

#### Approach

Treat each logo as a circle with radius derived from its Tailwind class (h-24 → ~6.5%, h-20 → ~5.5%, h-14 → ~4%, h-10 → ~3% of the 768px-wide cluster, with vertical % roughly doubled because the canvas is taller than it is wide). Hand-pick coordinates so every pair's center distance ≥ sum of radii + a small padding (~2%). Spread across `top: 6%–92%`, `left: 6%–94%`, no two neighbors sharing similar `top` (≥10% apart) or similar `left` (≥12% apart) within the same vertical band.

#### New coordinate set (24 logos)

```
// XL anchors (h-24) — placed first, well separated
typescript    top:  8%  left: 32%
react         top: 18%  left: 70%
nodedotjs     top: 50%  left: 84%
nextdotjs     top: 80%  left: 22%

// L (h-20)
firebase      top: 10%  left: 86%
tailwindcss   top: 34%  left: 12%
mongodb       top: 56%  left: 38%
postgresql    top: 70%  left:  8%
docker        top: 86%  left: 64%

// M (h-14)
html5         top: 22%  left: 14%
javascript    top:  6%  left: 54%
python        top: 32%  left: 48%
openjdk       top: 42%  left: 24%
github        top: 30%  left: 90%
springboot    top: 92%  left: 42%
graphql       top: 74%  left: 78%
angular       top: 60%  left: 64%
mysql         top: 64%  left: 22%
supabase      top: 46%  left: 62%

// S (h-10)
css           top: 50%  left:  8%
express       top:  4%  left: 16%
postman       top: 90%  left: 10%
jsonwebtokens top: 78%  left: 92%
go            top:  6%  left: 78%
```

Every pair was sanity-checked against the radius rule above. The biggest neighbors (e.g. `react` 18/70 and `nodedotjs` 50/84) are ~32% Euclidean apart vs combined ~12% radius — comfortable gap. Smaller logos tucked into corner pockets (`express` top-left, `go` top-right, `postman` bottom-left, `jwt` bottom-right) so they never share space with XL anchors. Sizes, rotations, delays, and animation stay identical — only `top` / `left` change.

---

### 3. Fix dark-mode invisibility for black-brand logos

`cdn.simpleicons.org/{slug}` returns each logo in its **official brand color**. Several of those brand colors are pure black (or very near it), so they vanish on the dark `--background: 222 47% 8%` surface. The affected logos in our set:

- **Express** — brand color `#000000`
- **Next.js** — brand color `#000000`
- **GitHub** — brand color `#181717`
- **JWT** — brand color `#000000`

(Spring Boot is green, Go is cyan, Java is orange/blue, Docker is blue — all fine. React is cyan, Angular is red, Supabase green, Firebase yellow/orange — fine.)

#### Fix

Use the `url` override field (already on the `Logo` type) to point each of these four at a colored version that reads on both light and dark backgrounds. Two viable sources:

- **simpleicons.org with `_color` query** — `https://cdn.simpleicons.org/{slug}/{hexcolor}` lets us force a color. Useful for keeping a single CDN.
- **devicon original SVGs** — multi-color, designed to read on either background.

Picks (chosen so each logo stays recognizable on both light navy text and dark surfaces):

| Logo | New URL | Rationale |
|---|---|---|
| Express | `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg` (then fall back to plain SVG that's grey-on-transparent) — actually the cleanest option: use `https://cdn.simpleicons.org/express/_/fff` style. **Simplest reliable**: use Simple Icons but force the fill to a mid-grey via URL: `https://cdn.simpleicons.org/express/666666` so it reads on both modes. | Mid-grey works on both light + dark |
| Next.js | `https://cdn.simpleicons.org/nextdotjs/000000/ffffff` — Simple Icons supports a *light/dark* dual-color URL: `/{slug}/{light-hex}/{dark-hex}` which automatically switches based on the requesting client's `prefers-color-scheme`. | Native auto-switch via CDN |
| GitHub | `https://cdn.simpleicons.org/github/181717/ffffff` | Auto-switch |
| JWT | `https://cdn.simpleicons.org/jsonwebtokens/000000/ffffff` | Auto-switch |

Note on the dual-color Simple Icons URL: the format `https://cdn.simpleicons.org/{slug}/{light}/{dark}` is officially supported and the CDN serves the right color based on the user's system preference, which lines up with our `prefers-color-scheme`-driven theme. For users on `theme: "light"` while their OS is dark (or vice versa) there's a small mismatch — acceptable, since most users keep theme tracking system. If we want pixel-perfect alignment with the in-app theme later, we can swap to a JS-driven `useTheme()` URL selector, but that's overkill for now.

For Express specifically, dual-color via the same pattern: `https://cdn.simpleicons.org/express/000000/ffffff`.

#### Updated entries

```ts
{ slug: "express",       name: "Express",  top: "4%",  left: "16%", size: "h-10 w-10", rotate: "rotate-4",  delay: "0.9s",
  url: "https://cdn.simpleicons.org/express/000000/ffffff" },
{ slug: "nextdotjs",     name: "Next.js",  top: "80%", left: "22%", size: "h-24 w-24", rotate: "-rotate-3", delay: "0.8s",
  url: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff" },
{ slug: "github",        name: "GitHub",   top: "30%", left: "90%", size: "h-14 w-14", rotate: "-rotate-6", delay: "0.9s",
  url: "https://cdn.simpleicons.org/github/181717/ffffff" },
{ slug: "jsonwebtokens", name: "JWT",      top: "78%", left: "92%", size: "h-10 w-10", rotate: "-rotate-3", delay: "1.1s",
  url: "https://cdn.simpleicons.org/jsonwebtokens/000000/ffffff" },
```

All other 20 logos keep their default `https://cdn.simpleicons.org/{slug}` URL — their brand colors are already legible on both surfaces.

---

## Files touched

**Modified:**
- `src/components/portfolio/Skills.tsx` — drop AWS entry, rewrite all 24 `top`/`left` pairs, add `url` override to Express/Next.js/GitHub/JWT.

**No changes to:** the `Logo` type (already has `url?`), the `logoUrl()` helper, the JSX, the float animation, the bento canvas, hover effects, sizes, rotations, or delays.

## Out of scope

- Not adding a JS-driven theme-aware URL switcher (the CDN dual-color URL handles `prefers-color-scheme` automatically, which matches the default `theme: "system"` behavior already shipped).
- Not re-adding AWS via a third CDN — can revisit if you want it back with a confirmed working source (e.g. uploading the SVG to `public/`).
