## Toolkit logo swaps — `src/components/portfolio/Skills.tsx`

Two single-entry edits. No layout, sizing, rotation, animation, or positioning changes — only the logo source for two items.

---

### 1. Java → coffee cup logo

Currently we use Simple Icons' `openjdk` slug, which renders the duke/coffee-steam icon in solid color. The user wants the classic **Java coffee cup** mark (the steaming red/blue mug, a.k.a. the "Java Coffee Cup Logo" originally from Sun).

Simple Icons does not ship the coffee-cup mark (it's a legacy Sun trademark). The cleanest, reliably-hosted source is Devicon's original Java SVG, which is the coffee-cup design in its proper red/blue colors and reads on both light and dark backgrounds:

- New URL: `https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/java/java-original.svg`

Update the existing entry (line 53):

```ts
{
  slug: "java",
  name: "Java",
  top: "42%", left: "24%",
  size: "h-14 w-14",
  rotate: "-rotate-5",
  delay: "1.0s",
  url: "https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/java/java-original.svg",
},
```

(Slug renamed from `openjdk` → `java` since it's only used as a React `key` and tooltip fallback; the actual image now comes from `url`.)

---

### 2. GitHub → purple variant

Currently GitHub uses the dual-color Simple Icons URL (`181717` light / `ffffff` dark). The user wants a **purple** GitHub logo instead.

Simple Icons supports forcing any hex color via `https://cdn.simpleicons.org/{slug}/{hex}`. Using a vivid purple that reads on both light and dark surfaces:

- New URL: `https://cdn.simpleicons.org/github/8b5cf6` (Tailwind violet-500, `#8b5cf6`)

This single color works on both modes — bright enough on the dark navy background, saturated enough to stand out on light. No dual-color URL needed.

Update the existing entry (lines 54–63):

```ts
{
  slug: "github",
  name: "GitHub",
  top: "30%", left: "90%",
  size: "h-14 w-14",
  rotate: "-rotate-6",
  delay: "0.9s",
  url: "https://cdn.simpleicons.org/github/8b5cf6",
},
```

---

## Files touched

**Modified:**
- `src/components/portfolio/Skills.tsx` — swap `url` (and rename slug for Java) on the two affected entries.

**No changes to:** any other logo, layout coordinates, sizes, rotations, delays, the `Logo` type, the `logoUrl` helper, the JSX, the float animation, or dark-mode handling for the rest of the icons.

## Out of scope

- Not touching the other 22 logos.
- Not changing the toolkit container, hover effects, or theme behavior.
