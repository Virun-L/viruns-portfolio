## Goal

Apply the previously-skipped refinements first, then expand the toolkit with 9 new logos — all in one pass.

---

## 1. Hero — update floating code chip text

**File:** `src/components/portfolio/Hero.tsx`

Two of the three floating chips currently have commented-out labels. Replace them with real text. The third stays exactly as-is.

- **Top-left chip** (Code2 icon): show `console.log("Hello World")`
- **Middle-right chip** (Braces icon): show `npm run dev`
- **Bottom-left chip** (GitBranch icon, `git push origin main`): no change

Keep all positioning (`left-2 top-6`, `right-2 top-1/2 -translate-y-1/2`, `left-3 bottom-4`), z-index (`z-20`), animation delays, icons, backdrop blur, border, font, and shadow identical. Only the visible text strings change.

---

## 2. Services — subtle orange tint on cards

**File:** `src/components/portfolio/Services.tsx`

Layer a soft warm tint into each `<article>` card so they relate to the accent color without becoming loud.

On the article className (currently `"group bento p-6 sm:p-7 relative overflow-hidden"`), add:
- `bg-gradient-to-br from-accent/10 via-background to-background`
- `border-transparent transition-colors`
- `hover:from-accent/20 hover:border-accent/40`

The existing `bento` class stays so radius/shadow/padding are preserved. The thin top accent line on hover stays. Icon block, headings, descriptions, and tag chips unchanged. Tint stays in the 10–20% opacity range — never solid orange — so text and tag chips remain perfectly legible.

---

## 3. Toolkit — truly scattered layout + 9 new logos

**File:** `src/components/portfolio/Skills.tsx`

### 3a. Add 9 new logos

Extend the `logos` array with these Simple Icons slugs (CDN delivers original brand colors automatically):

- `nextdotjs` — Next.js
- `docker` — Docker
- `amazonwebservices` — AWS  *(fallback `amazon` if the primary slug 404s)*
- `jsonwebtokens` — JWT
- `firebase` — Firebase
- `springboot` — Spring Boot
- `graphql` — GraphQL
- `go` — Go
- `angular` — Angular

Total: **25 logos** (16 existing + 9 new).

### 3b. Truly random scatter (no rows, no columns)

Replace every `top` / `left` value — including the existing 16 — with hand-picked, jittered coordinates so the eye cannot pick out horizontal bands or vertical columns.

Constraints when assigning the 25 (top, left) pairs:
- `top` spans **6%–92%**, `left` spans **6%–94%**.
- No two neighbors share similar `top` values — vary vertical position by **≥8–12%** between any visually-adjacent pair.
- No two neighbors share similar `left` values either — break column alignment.
- Spacing is **irregular** — some logos close, some farther — never evenly distributed.
- Account for size: place XL anchors (`react`, `typescript`, `nodedotjs`) with breathing room; tuck small `h-10` logos into gaps between larger ones.
- No actual visual collision given mixed `h-10 → h-24` sizes (mentally check bounding boxes during placement).

### 3c. Sizes for the 9 new logos

Mix into the existing varied distribution so the cluster still reads as random:
- XL (`h-24 w-24`): 1 of the new ones (e.g. `nextdotjs` or `docker`)
- L (`h-20 w-20`): 2 (e.g. `docker`, `firebase`)
- M (`h-14 w-14`): 4 (e.g. `aws`, `springboot`, `graphql`, `angular`)
- S (`h-10 w-10`): 2 (e.g. `jwt`, `go`)

Each gets a small random `rotate-*` and a unique `delay` for the float animation, consistent with the existing pattern.

### 3d. Preserved

- 25-logo set, mixed sizes, rotations, original brand colors via `https://cdn.simpleicons.org/${slug}`.
- `float` animation with staggered delays.
- Subtle hover effect: `hover:scale-110 hover:-translate-y-1 hover:rotate-0 hover:z-20 hover:drop-shadow-[0_6px_12px_rgba(252,163,17,0.35)]`.
- Centered `max-w-3xl mx-auto` container, canvas height (`h-[420px] sm:h-[460px] md:h-[500px]`), grid backdrop, and bento wrapper.

> Note: with 25 logos in the same canvas the cluster will feel denser — that's the intent. If a specific small logo ends up unavoidably overlapping a neighbor during implementation, nudge its `top`/`left` by a few percent rather than shrinking the canvas or removing logos.

---

## Files touched

- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/Services.tsx`
- `src/components/portfolio/Skills.tsx`

No changes to About, Contact, Projects, Navbar, Footer, or routing.
