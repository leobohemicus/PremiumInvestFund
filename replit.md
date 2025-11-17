# FDI Investment Fund - Landing Page

## Overview

This is a premium landing page for FDI (Fond dlouhodobých investic), a qualified investor fund managed by CODYA. The application is designed to present the fund's investment thesis, portfolio structure, and benefits to potential qualified investors in the Czech market. The site emphasizes transparency, liquidity, and long-term growth through publicly traded bonds.

The landing page features an interactive bond sensitivity calculator, animated statistics, and a comprehensive contact form, all built with a focus on premium design aesthetics suitable for financial services.

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
- AnimatedCounter: Intersection Observer-based number animations
- BondSensitivitySlider: Interactive calculator showing bond price sensitivity to interest rate changes

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

**Content Focus:**
- Investment thesis: Long-term government and corporate bonds with 15+ year duration
- Target audience: Qualified investors (minimum 1M CZK investment)
- Expected return: 7% p.a. with monthly portfolio valuation
- Key selling points: High liquidity, transparency, tax efficiency (5% fund tax, exempt after 3 years)

**Static Assets:**
- Investment thesis document stored in `attached_assets/` directory
- Design guidelines for maintaining premium aesthetic
- Favicon and meta tags optimized for Czech market