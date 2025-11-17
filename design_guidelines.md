# FDI Investment Fund - Premium Landing Page Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from premium financial platforms (Stripe, Revolut premium tiers, private banking interfaces) combined with luxury brand minimalism (Apple, Aston Martin). Focus on sophisticated restraint, generous whitespace, and typography-driven hierarchy to convey exclusivity and trust.

## Core Design Principles
- **Premium Minimalism**: Every element must earn its place - no decorative filler
- **Trust Through Clarity**: Financial transparency reflected in visual clarity
- **Exclusive Yet Accessible**: Professional but welcoming to qualified investors
- **Czech-First**: Typography must accommodate Czech diacritics beautifully

## Typography System

**Font Stack**:
- Primary: Inter or Manrope (clean, professional, excellent Czech support)
- Display/Accents: Playfair Display or Cormorant (serif elegance for headlines)

**Hierarchy**:
- Hero Headline: 4xl-6xl, serif display font, font-light, tracking-tight
- Section Headlines: 3xl-4xl, sans-serif, font-semibold
- Subheadlines: xl-2xl, font-medium
- Body: base-lg, font-normal, leading-relaxed (readability priority)
- Fine Print/Legal: sm, font-light
- Numbers/Stats: 2xl-4xl, font-bold, tabular-nums

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 24, 32 for consistent rhythm
- Section padding: py-24 md:py-32 lg:py-40 (generous breathing room)
- Component gaps: gap-8 to gap-16
- Container: max-w-7xl with px-6 md:px-8

**Grid Strategy**:
- Hero: Full-width asymmetric split (60/40 text-to-visual)
- Investment Thesis: 2-column on desktop (strategy + supporting points)
- Benefits/Features: 3-column grid (lg:grid-cols-3)
- Portfolio Details: 2-column comparison layout
- Investor Requirements: Single column, centered, max-w-3xl
- Contact: 2-column (form + information)

## Component Library

**Navigation**:
- Fixed top bar, minimal height, logo left, CTA right
- Smooth sticky scroll behavior with subtle backdrop blur
- Desktop: horizontal menu; Mobile: elegant hamburger

**Hero Section**:
- Large hero image (premium office/Prague skyline/abstract financial visualization)
- Asymmetric layout: headline + subheadline on left, image bleeding right
- Primary CTA (blurred background when over image): "Zjistit více" or "Kontaktovat správce"
- Trust indicator: "Pro kvalifikované investory | Min. 1M Kč"

**Investment Strategy Section**:
- 2-column: Left - headline + narrative; Right - key statistics in elegant cards
- Stats: Large numbers (7% p.a., 5% daň) with subtle dividers

**Benefits Grid**:
- 3 cards: Likvidita | Transparentnost | Daňová výhodnost
- Each card: icon space (use Heroicons), headline, 2-3 sentence description
- Minimal borders, generous padding (p-8)

**Portfolio Composition**:
- Horizontal sections showing asset allocation
- Visual hierarchy: Státní dluhopisy (primary) → Bankovní dluhopisy → Akcie
- Use subtle background differentiation (not color-based, use opacity/borders)

**Investor Requirements**:
- Centered panel with clear conditions
- Checkmarks for: Min. 1M Kč | Horizont 3+ let | Kvalifikovaný investor
- Elegant dividing lines

**Contact Section**:
- Form (left): Name, Email, Phone, Investment Amount, Message
- Info (right): Contact details, office hours, compliance statement
- Form inputs: Generous padding (p-4), clear focus states

**Footer**:
- 3-column: Company info | Quick links | Legal/Disclaimers
- Include: Registration details, fund manager info, regulatory disclaimers
- Social proof: "Regulováno ČNB" badge

## Images Strategy

**Required Images**:
1. **Hero**: Premium financial imagery - modern Prague architecture, abstract bond market visualization, or sophisticated office interior (full-bleed right side)
2. **Trust Section**: Team photo or professional office setting (if applicable)
3. **Background Textures**: Subtle geometric patterns for section breaks (very light opacity)

**Image Treatment**:
- High quality, professional photography only
- Subtle overlays for text readability
- No stock photo clichés (handshakes, generic business people)

## Interaction Patterns

**Minimal Animations**:
- Subtle fade-in on scroll for section reveals (stagger by 100ms)
- Smooth hover states on cards (transform: translateY(-4px))
- Number count-up animation for statistics (one-time, on viewport enter)
- NO complex scroll-triggered animations, parallax, or distracting motion

**Focus on Polish**:
- Perfect alignment and spacing
- Smooth transitions (150-200ms)
- Accessibility-first form validation
- Mobile-responsive refinement (stack columns gracefully)

## Content Structure (7 Sections)

1. Hero + Navigation
2. Investment Thesis (Why Now?)
3. Fund Benefits (3-column grid)
4. Portfolio Strategy (detailed breakdown)
5. Performance & Transparency
6. Investor Requirements
7. Contact + Footer

**Viewport Usage**: Sections use natural content height (py-24/32/40), only hero can use 80vh for impact.