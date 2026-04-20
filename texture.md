# Texture Options Catalog

Each option is a self-contained swap of the `body::before` block in `globals.css`.
Try them one at a time — just approve the plan and say which number to apply.

Current file: `/Users/jeffreyg/Projects/portfolio-project/portfolio/src/app/globals.css`
Current block to replace each time (lines 26–35 area):
```css
body::before { ... background-image: ... background-size: ... }
```

---

## Option 1 — Dot Grid (current favorite)
Classic uniform dots. Feels like Figma / design canvas.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: -1;
}
```

---

## Option 2 — Dual Dot Grid (varied scale)
Two overlapping dot grids: fine (20px) + coarse (80px).
Creates subtle depth — small dots everywhere, larger accent dots on a wider grid.
More interesting than uniform, still clean.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px),
    radial-gradient(circle, rgba(0,0,0,0.1) 1.5px, transparent 1.5px);
  background-size: 20px 20px, 80px 80px;
  pointer-events: none;
  z-index: -1;
}
```

---

## Option 3 — SVG Noise / Grain
Fine paper grain using an inline SVG turbulence filter.
Tactile, analog, like textured matte paper or film grain.
Pairs well with monochrome — reads as "intentional" rather than "background pattern."

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.4;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
  z-index: -1;
}
```

---

## Option 4 — Horizontal Scanlines
Single-direction lines only (0deg). Like ruled paper or a CRT terminal.
Extremely subtle. Reinforces the monospace/CLI aesthetic of the nav and section headers.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.03) 0px,
    rgba(0,0,0,0.03) 1px,
    transparent 1px,
    transparent 24px
  );
  pointer-events: none;
  z-index: -1;
}
```

---

## Option 5 — Cross Marks
Small `+` marks at each grid intersection via SVG data URL.
More sparse than a full grid, more structured than dots.
Looks like a surveyor's map or technical drawing sheet.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 9v6M9 12h6' stroke='rgba(0,0,0,0.12)' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: 24px 24px;
  pointer-events: none;
  z-index: -1;
}
```

---

## Option 6 — Straight Grid (current — no rotation)
Horizontal + vertical lines, 16px spacing, 3.2% opacity.
Clean graph paper. What's currently live.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    repeating-linear-gradient(0deg,  rgba(0,0,0,0.032) 0px, rgba(0,0,0,0.032) 1px, transparent 1px, transparent 50%),
    repeating-linear-gradient(90deg, rgba(0,0,0,0.032) 0px, rgba(0,0,0,0.032) 1px, transparent 1px, transparent 50%);
  background-size: 16px 16px;
  pointer-events: none;
  z-index: -1;
}
```

---

## Verification (each swap)
1. `npm run dev`
2. View at arm's length — texture should be perceptible but never distracting
3. Check that white nav notch still reads cleanly over the texture
4. Check hero section — watermark `JG` + texture should not fight each other
