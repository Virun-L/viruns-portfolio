## Project card polish

Two small tweaks to `src/components/portfolio/Projects.tsx`:

### 1. More visible tech stack capsules

Current tags use `bg-surface` (very light gray) with `text-navy/80` — they fade into the card. Update to:

- Background: navy tint with accent border for clear contrast on light theme, and a slightly stronger surface in dark
- Text: full navy weight
- Slightly bolder weight + subtle border

```tsx
<span
  key={t}
  className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-navy"
>
  {t}
</span>
```

This keeps the brand orange/navy palette but makes the capsules clearly read as distinct chips.

### 2. Image fills the allocated space (no whitespace)

The image area is `aspect-[16/10]` and the `<img>` already uses `object-cover`, but some project screenshots (e.g. Health Centre, Meta Ads) likely don't match 16:10, so `object-cover` crops rather than letterboxes — meaning whitespace shouldn't appear from the image itself. The whitespace the user sees is most likely from:

- The `bg-navy` showing through when the image is shorter than the box, OR
- An aspect ratio that's too tall for some screenshots

Fix:
- Keep `object-cover` (so it fully fills), but ensure no padding/gap and explicitly set `w-full h-full` on the img, removing reliance on `absolute inset-0` which can occasionally leave sub-pixel gaps.
- Drop the `bg-navy` fallback color on the wrapper (replace with `bg-surface`) so any edge cases blend with the card instead of showing a dark band.

```tsx
<div className="relative overflow-hidden bg-surface aspect-[16/10]">
  {p.image ? (
    <img
      src={p.image}
      alt={`${p.title} preview`}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  ) : (
    /* keep existing gradient fallback */
  )}
</div>
```

No other files affected.