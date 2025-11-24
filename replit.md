# FDI Investment Fund - Landing Page

## Overview

This is a premium landing page for FDI (Fond dlouhodobých investic), a qualified investor fund managed by CODYA. The application is designed to present the fund's investment thesis, portfolio structure, and benefits to potential qualified investors in the Czech market. The site emphasizes transparency, liquidity, and long-term growth through publicly traded bonds.

The landing page features an interactive dual-slider bond sensitivity calculator with animated Recharts visualization, real-time fund statistics, and a comprehensive contact form, all built with a focus on premium design aesthetics suitable for financial services.

**Latest Updates (November 2025):**
- Hero section restructured with streamlined H1/H2 hierarchy for SEO and accessibility
- Hero claim: H1 "Bankovní sazby klesají" (with "klesají" highlighted in primary color, no period), H2 combines bolded value proposition on first line with fund description on second line
- Statistical boxes moved to right side in 2x2 grid layout with card styling, including new "Minimální investice" box with Coins icon
- Hero section optimized to fit within viewport on first load - reduced padding, spacing, and font sizes while maintaining premium aesthetic
- Mobile responsiveness optimized: statistical boxes now visible on all screen sizes with responsive sizing (smaller padding/icons/text on mobile, larger on desktop)
- Badge "Pro kvalifikované investory | Min. 1M Kč" hidden on mobile devices for better H1 readability, visible from tablet size up
- All data updated to reflect November 2025 presentation: 6.5-15% p.a. returns, 65 investors, 14.1 year duration, 6.05% YTM
- Copywriting enhanced to emphasize institutional market access and comparison with direct bond purchases
- Bond calculator redesigned with simplified 5-point linear projection model (historical volatility + prediction)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with hot module replacement
- Wouter for lightweight client-side routing (single-page application)
- React Query (@tanstack/react-query) for server state management

**UI Component Library:**
- shadcn/ui components (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (defined in `client/src/index.css`)
- Component path aliases configured via TypeScript paths (`@/components`, `@/lib`, etc.)

**Design System:**
- Typography: Inter (primary sans-serif) and Playfair Display (serif for headlines)
- Premium minimalist aesthetic with Czech language support (diacritics)
- Custom color palette focused on professional financial presentation (primary gold/amber accent at hsl(42, 96%, 50%))
- Responsive design with mobile-first approach

**Key Interactive Features:**
- AnimatedBackground: Canvas-based particle system with reduced-motion support
- AnimatedCounter: Intersection Observer-based number animations with decimal support (e.g., 6.5, 14.1)
- BondSensitivitySlider: Dual-slider interactive calculator (rate change -4% to +2%, duration 5-20 years) with Recharts LineChart using simplified 5-point linear projection (4 fixed historical points oscillating around 99 ±2pb: 99.5, 101.0, 97.0, 100 + dynamic 5th point showing prediction). Y-axis is static [60, 190] covering full range of potential fund outcomes
- Full WCAG 2.1 AA accessibility with aria-labelledby, <output role="status" aria-live="polite"> for screen readers

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- Vite middleware integration for development with HMR
- Static file serving in production mode

**Development Setup:**
- Custom logging middleware for API request tracking
- Separate Vite configuration for client-side hot reloading during development
- Production build process bundles both frontend (Vite) and backend (esbuild)

**Storage Layer:**
- In-memory storage implementation (MemStorage) as baseline
- Interface-based design (IStorage) allows easy swap to database backend
- Database schema defined with Drizzle ORM for PostgreSQL
- Schema includes user table with username/password authentication structure

### Data Storage

**Database Technology:**
- PostgreSQL configured via Drizzle ORM
- Neon Database serverless driver (@neondatabase/serverless)
- Schema migrations managed through drizzle-kit
- Connection configured via DATABASE_URL environment variable

**Schema Design:**
- Users table with UUID primary keys
- Drizzle-Zod integration for runtime validation
- Type-safe database operations with TypeScript inference

**Current State:**
- Application currently uses in-memory storage (MemStorage class)
- Database infrastructure prepared but not actively used in landing page functionality
- API routes defined but minimal implementation (placeholder structure in `server/routes.ts`)

### External Dependencies

**UI & Styling:**
- Radix UI component primitives (accordion, dialog, dropdown, etc.)
- Tailwind CSS with PostCSS for styling
- Lucide React for icon library
- Google Fonts (Inter, Playfair Display) loaded via CDN

**Form Management:**
- React Hook Form for form state management
- Hookform Resolvers for validation integration
- Zod schemas via drizzle-zod

**Development Tools:**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- TypeScript with strict mode enabled
- tsx for TypeScript execution in development

**Design Guidelines:**
- Custom design system documented in `design_guidelines.md`
- Reference inspiration from premium financial platforms (Stripe, Revolut, private banking interfaces)
- Czech-first approach with proper diacritics support

### Application Structure

**Page Organization:**
- Single-page application with component-based architecture
- Home page (`client/src/pages/Home.tsx`) composes all major sections:
  - Navigation (fixed header with smooth scroll)
  - Hero Section (animated background, CTAs)
  - Investment Thesis (strategy explanation)
  - Benefits Section (3-column feature grid)
  - Data Story Section (animated statistics)
  - Bond Sensitivity Slider (interactive calculator)
  - Portfolio Section (asset allocation breakdown)
  - Investor Requirements (entry conditions)
  - Contact Section (inquiry form)
  - Footer (trust badge, links)

**Content Focus (Updated November 2025):**
- Investment thesis: Long-term government and corporate bonds with average 14.1 year duration
- Unique opportunity: Bond rates at 20-year highs before expected decline
- Target audience: Qualified investors (minimum 1M CZK investment vs. 3M+ CZK for direct purchases)
- Expected return: 6.5% p.a. (conservative scenario) to 15% p.a. (optimistic scenario if rates fall as expected)
- Hero section highlights concrete returns: 1M CZK → 1.88M CZK (conservative) or 4.05M CZK (optimistic) over 10 years
- Current fund stats: 65 investors, ~45% invested, 6.05% average YTM, average maturity 2056
- Top holdings: CZ 2057, EDF 2053, Vodafone 2081
- Key selling points: 
  - Institutional market access (bonds typically require 100-200k EUR minimum)
  - Lower tax burden (5% fund tax vs. 15-23% personal tax, no estate tax)
  - High liquidity (monthly NAV valuation, publicly traded securities)
  - Manager confidence (15M CZK of managers' own capital invested)

**Static Assets:**
- Investment thesis document stored in `attached_assets/` directory
- Design guidelines for maintaining premium aesthetic
- Favicon and meta tags optimized for Czech market