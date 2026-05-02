## Goal
Two related polish tweaks on the mobile navbar:
1. Make the dropdown panel open feel snappier.
2. Add a smooth transition when the menu button icon swaps between the hamburger (3 lines) and the close (X).

## Changes

**File: `src/components/portfolio/Navbar.tsx`**

### 1. Snappier dropdown panel
- On the mobile menu container (currently `animate-fade-in`, line 108), swap to a faster, crisper animation:
  - `animate-[fade-in_150ms_cubic-bezier(0.22,1,0.36,1)]`
  - Halves the duration (300ms → 150ms) and uses an ease-out-expo curve for an immediate-then-settle feel.

### 2. Animated hamburger ↔ X icon
Replace the current conditional render:
```tsx
{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
```
with a stacked layout where both icons are always mounted, absolutely positioned, and cross-fade + rotate based on `open`:

```tsx
<span className="relative h-5 w-5">
  <Menu
    className={cn(
      "absolute inset-0 h-5 w-5 transition-all duration-200 ease-out",
      open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
    )}
  />
  <X
    className={cn(
      "absolute inset-0 h-5 w-5 transition-all duration-200 ease-out",
      open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
    )}
  />
</span>
```

This gives a quick rotate + fade swap (200ms) instead of an instant icon switch — matching the snappier dropdown timing.

No other files change.

## Result
- Tapping the menu opens the panel almost immediately with a crisp settle.
- The button icon smoothly rotates and cross-fades between the hamburger and X instead of popping.
