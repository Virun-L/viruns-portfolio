## Goal

Shrink the hero portrait slightly and reposition the three floating code chips so they overlap **on top of the photo** instead of sticking out beyond its frame. No changes to the rest of the Hero section, no scrolling-over-photo behavior, no neighboring sections affected.

## Hero portrait changes (`src/components/portfolio/Hero.tsx`)

### 1. Make the photo a bit smaller
- Current outer wrapper: `mx-auto w-full max-w-md lg:max-w-none` — on large screens the photo fills the entire right column.
- Change to: `mx-auto w-full max-w-sm lg:max-w-md` so the portrait is noticeably smaller on both mobile and desktop, while still centered in its column.
- The grid `lg:grid-cols-[1.1fr_0.9fr]` stays as-is — the right column just won't be fully filled by the image, which gives the chips room to sit over the photo edges instead of outside them.

### 2. Move the three floating chips inside the photo bounds
The chips currently use negative offsets (`-left-4`, `-right-3`, `-left-3 -bottom-3`) which push them outside the dashed frame. Update each to sit **within** the image area so they overlap the photo:

- `</> full-stack` chip → `left-2 top-6` (was `-left-4 top-8`) — tucks into the top-left of the photo.
- `{ devops }` chip → `right-2 top-1/2 -translate-y-1/2` (was `-right-3 top-1/3`) — sits on the right edge, vertically centered over the photo.
- `git push origin main` chip → `left-3 bottom-4` (was `-left-3 -bottom-3`) — sits inside the bottom-left of the photo.

Also bump each chip's z-index with `z-20` so they render cleanly above the image (`<img>` is `z-10`).

### 3. Also show the chips on mobile
Currently they're `hidden sm:flex`. Since the photo is the focal point and the chips now sit *on* the photo (not beside it), keep them visible on mobile too — change to just `flex`. They'll scale naturally with the smaller photo.

### 4. Tighten the dashed frame & glow to match
- The outer glow `-inset-6` and the bottom-right blur blob `-bottom-6 -right-6 h-32 w-32` are sized for a larger photo. Reduce to `-inset-4` and `-bottom-4 -right-4 h-24 w-24` so the decorative glow stays proportional to the smaller portrait.

## What stays exactly the same

- The dashed border, rounded corners, glow blobs, accent radial backdrop, animations (`animate-scale-in`, `animate-float`), and `shadow-elev` on the photo card — all preserved.
- The Hero text column, typewriter, CTAs, social icons — untouched.
- The Hero section's normal document flow — no negative margins, no z-index trickery on neighboring sections, About sits cleanly below as before.

## Files touched

- `src/components/portfolio/Hero.tsx` — only the `{/* Portrait */}` block (lines ~104–144).

## Note

The other items from the previous round (remove "Currently learning" card in About, cluster the toolkit logos with random sizes + hover, side-by-side Contact layout) are **not** in this plan — let me know if you want those folded in too or handled separately.