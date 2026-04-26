## Goal

Apply the three pending refinements that were skipped in the last round:

1. Remove the "Currently learning" card from About and re-balance the bento row.
2. Re-cluster the toolkit logos into a tighter, varied-size cloud with a subtle hover.
3. Split the Contact section into a side-by-side text + form layout on large screens.

The Hero section is **not** touched — it's already in the desired state.

---

## 1. About — remove "Currently learning" card

**File:** `src/components/portfolio/About.tsx`

- Delete the entire navy "Currently learning" bento tile (the `<div className="bento p-6 md:col-span-2 bg-navy text-navy-foreground border-navy">…</div>` block with the `Rocket` icon and the learning list).
- Remove the now-unused `Rocket` import from `lucide-react`.
- Re-balance the second row from `md:col-span-2 × 3` to `md:col-span-3 × 2`:
  - **Based in** tile → `md:col-span-3`
  - **Off the keyboard** tile → `md:col-span-3`
- Bio article stays full width (`md:col-span-6`) — no change.
- Keep all existing styling, icons, hobby chips (Gym / Photography / Coffee), and the `Zap` decorative icon.

---

## 2. Toolkit — clustered cloud, varied sizes, subtle hover

**File:** `src/components/portfolio/Skills.tsx`

### Canvas
- Shrink the canvas:
  - From `h-[520px] sm:h-[560px] md:h-[600px]` → `h-[420px] sm:h-[460px] md:h-[500px]`.
- Constrain the cluster to a centered area by wrapping the positioned logos in a `max-w-3xl mx-auto relative` container so the cloud feels packed instead of spread edge-to-edge.

### Positions (tighter cluster, organic — not a grid)
Re-tune all 16 logos so `top` stays in roughly **12%–88%** and `left` in roughly **15%–85%**, packed closer with intentional small gaps. Example layout (4 loose rows, organic offsets):

- Row 1 (~12–22%): html5, css, tailwindcss, javascript, typescript
- Row 2 (~30–42%): react, nodedotjs, express, openjdk, python
- Row 3 (~52–66%): postgresql, mysql, mongodb, supabase, github
- Row 4 (~76–86%): postman (centered)

Exact percentages get hand-tuned so neighbors don't visually collide given their varied sizes, but stay within the bounds above.

### Random sizes
Replace the current near-uniform sizes with a deliberate mix across:
- `h-10 w-10` (small)
- `h-14 w-14` (medium)
- `h-20 w-20` (large)
- `h-24 w-24` (extra large)

Distribute so the cluster reads as varied — e.g., 2–3 XL anchors (react, typescript, nodedotjs), several mediums, and a sprinkle of smalls. No two adjacent logos share the same size.

### Hover effect (gentler)
Replace the current `hover:scale-125` + heavy drop-shadow with:
```
transition-all duration-300 ease-out
hover:scale-110 hover:-translate-y-1
hover:drop-shadow-[0_6px_12px_rgba(252,163,17,0.35)]
hover:z-20
```
Keep `hover:rotate-0` so the rotated logos straighten on hover.

### Preserved
- `float` animation with staggered delays.
- Original brand colors via `https://cdn.simpleicons.org/${slug}`.
- Subtle grid backdrop and bento container.

---

## 3. Contact — text and form side by side

**File:** `src/components/portfolio/Contact.tsx`

### Layout
- Wrap the existing intro block and the form in a single grid:
  ```
  <div className="grid lg:grid-cols-2 gap-10 items-start">
  ```
- **Left column:** the existing intro (`// contact` label, "Let's build something together" heading, intro paragraph) — moved *inside* the grid instead of sitting above it. Keep the `useReveal` ref + `reveal` / `is-visible` classes on this column so the entrance animation is preserved.
  - Add a small extras block below the paragraph:
    - A reachable-via line: `Based in Colombo, Sri Lanka · Open to remote roles` (muted text, `font-mono-ui text-sm`).
    - A soft visual flourish: a short accent-colored dashed divider, e.g. `<div className="mt-6 h-px w-24 border-t border-dashed border-accent" />`, so the column doesn't feel empty next to the form on wide screens.
- **Right column:** the existing `<form className="bento p-7 space-y-5">` — unchanged in fields, validation, `onSubmit`, and toast behavior. **Drop** the `max-w-3xl mx-auto` since it now lives in a grid cell.

### Mobile
- On `<lg`, the grid naturally stacks to a single column with text first, form second — no extra work needed.

### Preserved
- `useReveal` animation on the left column.
- Toast on submit.
- "This form is UI-ready — sending will be wired up soon." helper text under the button.

---

## Files touched

- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Skills.tsx`
- `src/components/portfolio/Contact.tsx`

No changes to Hero, Navbar, Projects, Services, Footer, or routing.
