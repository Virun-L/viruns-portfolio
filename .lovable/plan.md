## New layout for the projects grid

Switch the projects section to a uniform 3-column grid where every card is the same size. Drop the featured "large" tile treatment.

---

### Changes in `src/components/portfolio/Projects.tsx`

**1. Grid container**

Replace the current 4-col bento grid with a responsive 3-col grid:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((p) => (
    <ProjectCard key={p.title} p={p} />
  ))}
</div>
```

- `grid-cols-1` on mobile, `sm:grid-cols-2` on tablet, `lg:grid-cols-3` on desktop.
- `gap-6` for slightly more breathing room than the old `gap-5`.
- `.map()` over the array instead of hand-placing each card — cleaner and future-proof for adding a sixth project.

**2. `ProjectCard` simplification**

- Remove the `large` prop and the `md:col-span-2 md:row-span-2` branch — every card is identical now.
- Keep the `aspect-[16/10]` preview area, image rendering, hover scale, tags, and link icons exactly as they are.
- Remove the "Featured" badge entirely (per the decision to treat all projects equally). Also remove the unused `Star` import.
- Remove the `featured` field from the `Project` type and from the Fintrix entry in `projects` (no behavioral effect, just cleanup).

**3. Section header copy**

The current subhead ("Real details coming soon — these are placeholders for now.") is now stale since every card has real content. Replace with:

```tsx
<p className="mt-3 text-muted-foreground">
  A selection of things I've built — from full-stack platforms to data automation tools.
</p>
```

---

### Files touched

- `src/components/portfolio/Projects.tsx` — grid container, `ProjectCard` simplification, type cleanup, header copy, drop `Star` import.

### Out of scope

- No changes to card visuals (image, blurb, tags, link icons), section background, or other portfolio sections.
- No changes to the project data itself beyond removing the now-unused `featured` flag.
