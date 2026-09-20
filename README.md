# Cocpit Landing Page (Next.js)

A Next.js 14 (App Router) + Tailwind CSS port of the Cocpit landing page design.

## File structure

```
cocpit-nextjs/
├── app/
│   ├── layout.tsx      # Root layout, loads DM Sans via next/font
│   ├── page.tsx         # Assembles all sections
│   └── globals.css      # Tailwind directives + hairline/grid utilities
├── components/
│   ├── Sidebar.tsx        # Floating left nav (desktop only)
│   ├── Hero.tsx            # Headline + footnote row
│   ├── ProductShowcase.tsx # "What We're building" / Cocpit product card
│   ├── MetricsSection.tsx  # "We're just getting started" stat cards
│   ├── BlogSection.tsx     # "What's Happening at Cocpit" article stream
│   ├── ContactSection.tsx  # Contact form (client component)
│   └── Footer.tsx
├── tailwind.config.ts   # Design tokens (colors, font family)
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- Colors, spacing, and type scale are pulled from the original design spec
  into `tailwind.config.ts` as custom tokens (`bg`, `card`, `panel`, `ink`,
  `muted`, `dim`, `faint`, `accent`).
- `ContactSection.tsx` is a client component (`"use client"`) since it has a
  form `onSubmit` handler — wire `handleSubmit` up to an API route or your
  form provider of choice.
- The right-hand product mockup panel uses a small inline SVG standing in for
  the original Figma vector illustration; swap in a real screenshot/graphic
  if you have one.
