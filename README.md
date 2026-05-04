# aBetterDriver Referral Program

A responsive React + Vite + Tailwind CSS implementation of the referral program landing page.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (icons)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx                  Root component
├── main.jsx                 Entry point
├── index.css                Tailwind + global styles
└── components/
    ├── Logo.jsx             Brand logo (light/dark variants)
    ├── Header.jsx           Top nav + mobile hamburger menu
    ├── Hero.jsx             Headline + CTAs + image with floating card
    ├── HowItWorks.jsx       3-step process with dotted connectors
    ├── WinBanner.jsx        "A Win for Everyone" benefits row
    ├── StartReferring.jsx   CTA banner with referral link button
    ├── ProgramTerms.jsx     4-column terms grid
    └── Footer.jsx           Multi-column footer with socials
```

## Responsive Breakpoints

- Mobile: stacked single column, hamburger nav, hero image above text
- Tablet (md/sm): 2-3 column grids appear, nav still collapsed below lg
- Desktop (lg+): full horizontal nav, side-by-side hero, 3-column How It Works
