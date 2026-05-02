## Changes

### 1. Static icons in Services cards (`Services.tsx`)
Remove the hover rotate/scale on the icon tile. Drop `group-hover:-rotate-6 group-hover:scale-105` (and the `transition-transform duration-300`) so the icon stays still on hover. Other card hover effects (gradient sweep, top accent line, tag border) stay.

### 2. Contact section copy (`Contact.tsx`)
- Replace `Have an idea, a role, or just want to say hi? My inbox is open.` with **`Have an idea, a role, or just want to say hi? Hit me up!`**
- Remove the line `Based in Colombo, Sri Lanka · Open to remote roles` and the dashed divider above it (it loses its purpose without the line below).

Contact form stays UI-only — will be wired up later.

## Files touched
- `src/components/portfolio/Services.tsx` — remove icon hover transform
- `src/components/portfolio/Contact.tsx` — copy updates
