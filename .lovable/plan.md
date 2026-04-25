## Changes

### 1. Hero photo swap (`src/components/portfolio/Hero.tsx` + new asset)
- Copy `user-uploads://dp_1.jpg` → `src/assets/virun-portrait-2.jpg`.
- Update the import in `Hero.tsx` to the new asset (keep the existing portrait frame, glow, dashed border, and floating code chips intact).
- The new photo has a light gray background, so I'll tone down the orange radial backdrop behind the subject (it currently fights with the lighter image) and switch the inner card background from `bg-navy` to a soft neutral so the photo blends cleanly.

### 2. Remove the dot from section-label pills (`src/index.css`)
- The `.section-label::before` pseudo-element renders the leading orange dot. Remove that block entirely.
- Keep the pill background, border, and `// label` text styling untouched. This affects every section (`// about`, `// services`, `// skills`, `// work`, `// contact`) consistently.

### 3. About section — remove the stats card (`src/components/portfolio/About.tsx`)
- Delete the entire `Stats` bento (Years coding / Projects built / Technologies / % Curiosity) including the `useCounter` hook, `Stat` component, `statsRef`, and `statsIn` state — they become dead code once the card is gone.
- Adjust the bio article's grid span so the layout stays balanced after removal:
  - Bio: `md:col-span-4 md:row-span-2` → `md:col-span-6` (full width, single row), OR keep span 4 and grow Currently learning to span 2 + Location span 2 + Off the keyboard span 2 in a tidy 6-col second row. I'll go with bio spanning all 6 cols on top and the three remaining tiles (Currently learning, Location, Off the keyboard) each `md:col-span-2` underneath — clean 3-up row, no empty slot.

### 4. About — "Off the keyboard" hobbies (`About.tsx`)
- Replace the single line "Tea, side projects, and hunting for new tech to learn." with three hobby chips: **Gym**, **Photography**, **Coffee**.
- Render as small rounded chips with icons (lucide: `Dumbbell`, `Camera`, `Coffee`) inside the existing tile, keeping the orange `Zap` background flourish.

### 5. Toolkit — original-color logos + curated list (`src/components/portfolio/Skills.tsx`)
- Switch logo URLs from `cdn.simpleicons.org/{slug}/14213d` → `cdn.simpleicons.org/{slug}` so each brand renders in its native color.
- Replace the logo array with **only** the requested techs, in this order:
  HTML5, CSS3, Tailwind CSS, JavaScript, Java, Python, React, Node.js, MySQL, PostgreSQL, Supabase, MongoDB, TypeScript, Postman, GitHub, Express.
  Simple Icons slugs: `html5`, `css3` (or `css` if css3 is missing — will verify with the CDN), `tailwindcss`, `javascript`, `openjdk` (Java), `python`, `react`, `nodedotjs`, `mysql`, `postgresql`, `supabase`, `mongodb`, `typescript`, `postman`, `github`, `express`.
- Re-distribute the `top` / `left` / `rotate` / `size` / `delay` values across the 16 logos so they spread evenly through the container without overlap (manually tuned, still randomized-looking, no grid).
- Keep float animation, hover scale, and the orange drop-shadow glow on hover.

### 6. Contact — remove the info aside (`src/components/portfolio/Contact.tsx`)
- Delete the `<aside>` "Reach out" card (Email / Location / social links).
- Change the wrapper grid from `lg:grid-cols-5` + form `lg:col-span-3` to a single-column layout, with the form constrained to `max-w-3xl mx-auto` so it doesn't stretch awkwardly on wide screens.
- Form, validation, and submit stay exactly as-is.

## Files touched

- `src/assets/virun-portrait-2.jpg` (new — copied from upload)
- `src/components/portfolio/Hero.tsx` (image import + backdrop tweak)
- `src/index.css` (remove `.section-label::before`)
- `src/components/portfolio/About.tsx` (drop stats card, restructure grid, hobby chips)
- `src/components/portfolio/Skills.tsx` (colorful logos, curated list, new positions)
- `src/components/portfolio/Contact.tsx` (drop info aside, single-column form)

## Notes

- The old `virun-portrait.jpg` asset will be left in place but unreferenced. Happy to delete it too if you'd prefer a clean tree.
- For the hobby chips I'll use the same pill style as the section-label (sans dot) so they feel native to the design system.
- If any Simple Icons slug 404s (e.g., `css3`), I'll fall back to the closest valid slug and note it.
