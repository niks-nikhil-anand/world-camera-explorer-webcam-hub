# 🎨 Frontend Architecture & Design Plan

**Project:** World Camera Explorer

A modern, responsive, and scalable frontend built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Shadcn UI, following a reusable component-based architecture.

---

## Table of Contents

- [Goals](#goals)
- [Tech Stack](#tech-stack)
- [Design Principles](#design-principles)
- [Design System](#design-system)
- [Component Architecture](#component-architecture)
- [Layout Components](#layout-components)
- [UI Components](#ui-components)
- [Feature Components](#feature-components)
- [Pages](#pages)
- [Responsive Strategy](#responsive-strategy)
- [Theme System](#theme-system)
- [Animation Guidelines](#animation-guidelines)
- [State Management](#state-management)
- [API Layer](#api-layer)
- [Hooks](#hooks)
- [Providers](#providers)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Coding Standards](#coding-standards)
- [Development Roadmap](#development-roadmap)
- [Success Criteria](#success-criteria)

---

## Goals

- ✅ Production-ready architecture
- ✅ Fully responsive
- ✅ High performance
- ✅ Reusable UI components
- ✅ Scalable folder structure
- ✅ Accessible (WCAG)
- ✅ SEO optimized
- ✅ Dark & Light Mode
- ✅ Beautiful animations
- ✅ Easy to maintain
- ✅ AI-friendly codebase

---

## Tech Stack

### Framework

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Full-stack framework |
| React 19 | UI library |
| TypeScript | Type safety |

### Styling

| Technology | Purpose |
|---|---|
| Tailwind CSS | Utility-first CSS |
| Shadcn UI | Component primitives |
| Tailwind Merge | Class merging |
| clsx | Conditional classes |
| tailwindcss-animate | Animation utilities |

### Animation

| Technology | Purpose |
|---|---|
| Framer Motion | Declarative animations |
| GSAP | Hero section animations (optional) |
| Lenis | Smooth scrolling |

### State Management

| Technology | Purpose |
|---|---|
| Zustand | Global state |

### Data Fetching

| Technology | Purpose |
|---|---|
| TanStack Query | Server state management |

### Forms

| Technology | Purpose |
|---|---|
| React Hook Form | Form state |
| Zod | Schema validation |

### Icons

| Technology | Purpose |
|---|---|
| Lucide React | Icon library |

### Maps

| Technology | Purpose |
|---|---|
| Mapbox GL JS / MapLibre | Interactive maps |

### Charts

| Technology | Purpose |
|---|---|
| Recharts | Data visualization |

---

## Design Principles

The application follows a modern dashboard-inspired design with:

- Generous spacing
- Rounded corners
- Glassmorphism where appropriate
- Subtle gradients
- Smooth micro-interactions
- Excellent readability

**Rules:**

- Every component should be reusable and isolated
- Avoid duplicated UI
- Never hardcode colors
- Use design tokens

---

## Design System

### Color Palette

All colors defined using CSS variables through Shadcn:

| Token | Usage |
|---|---|
| `--primary` | Primary brand color |
| `--secondary` | Secondary actions |
| `--accent` | Accent highlights |
| `--success` | Success states |
| `--warning` | Warning states |
| `--danger` | Error/destructive states |
| `--muted` | Muted text/backgrounds |
| `--background` | Page background |
| `--foreground` | Primary text |
| `--card` | Card backgrounds |
| `--border` | Border colors |
| `--input` | Input borders/backgrounds |
| `--popover` | Popover backgrounds |
| `--sidebar` | Sidebar background |

### Typography

| Property | Value |
|---|---|
| Font | Geist |
| Fallback | Inter |

**Sizes:**

| Name | Usage |
|---|---|
| Hero | Landing page headlines |
| Heading | Section headers |
| Subheading | Sub-sections |
| Body | Paragraph text |
| Caption | Small descriptive text |
| Label | Form labels |
| Code | Code snippets |

### Border Radius

| Size | Token |
|---|---|
| Small | `--radius-sm` |
| Medium | `--radius-md` |
| Large | `--radius-lg` |
| Extra Large | `--radius-xl` |
| Full | `--radius-full` |

### Shadows

| Size | Usage |
|---|---|
| Small | Subtle elevation |
| Medium | Cards, dropdowns |
| Large | Modals, dialogs |
| Floating | Floating action buttons |
| Glass | Glassmorphism elements |

### Spacing Scale

```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 96 · 128
```

---

## Component Architecture

### Folder Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── features/               # Feature-specific components
├── hooks/                  # Custom React hooks
├── services/               # API service layer
├── lib/                    # Utility libraries
├── providers/              # Context providers
├── store/                  # Zustand stores
├── types/                  # TypeScript type definitions
├── constants/              # App constants
├── config/                 # Configuration files
├── styles/                 # Global styles
├── utils/                  # Helper utilities
└── assets/                 # Static assets
```

### Components Structure

```
components/
├── ui/                     # Shadcn UI primitives
├── layout/                 # Layout wrappers
├── navigation/             # Nav components
├── buttons/                # Button variants
├── cards/                  # Card variants
├── camera/                 # Camera-specific UI
├── map/                    # Map components
├── search/                 # Search components
├── filters/                # Filter components
├── country/                # Country components
├── city/                   # City components
├── category/               # Category components
├── player/                 # Video player
├── statistics/             # Stats displays
├── charts/                 # Chart components
├── sidebar/                # Sidebar components
├── dialogs/                # Dialog components
├── modals/                 # Modal components
├── forms/                  # Form components
├── animations/             # Animation wrappers
├── feedback/               # Toast, alerts
├── empty/                  # Empty state components
├── loaders/                # Loading skeletons
└── common/                 # Shared utilities
```

Each folder exposes components through an `index.ts` barrel file.

---

## Layout Components

| Component | Description |
|---|---|
| `AppLayout` | Root application layout |
| `PublicLayout` | Public pages layout |
| `DashboardLayout` | Admin/dashboard layout |
| `Sidebar` | Collapsible sidebar |
| `Navbar` | Top navigation bar |
| `Footer` | Site footer |
| `Breadcrumb` | Breadcrumb navigation |
| `Container` | Max-width container |
| `Section` | Page section wrapper |
| `PageHeader` | Page header with title |
| `PageTitle` | Consistent page titles |
| `ThemeSwitcher` | Dark/Light mode toggle |

---

## UI Components

| Component | Description |
|---|---|
| Button | Multiple variants and sizes |
| Input | Text input with validation |
| Textarea | Multi-line input |
| Select | Dropdown select |
| Dropdown | Dropdown menu |
| Dialog | Modal dialog |
| Popover | Popover overlay |
| Tooltip | Hover tooltip |
| Accordion | Collapsible sections |
| Tabs | Tab navigation |
| Badge | Status badges |
| Avatar | User avatars |
| Skeleton | Loading placeholders |
| Toast | Notification toasts |
| Card | Content cards |
| Pagination | Page navigation |
| Command Palette | Command menu (⌘K) |
| Breadcrumb | Navigation breadcrumb |
| Separator | Visual dividers |
| Hover Card | Hover info cards |
| Scroll Area | Custom scrollbars |
| Resizable Panels | Adjustable panels |

---

## Feature Components

### Home

| Component | Description |
|---|---|
| Hero | Animated hero section |
| Featured Cameras | Highlighted cameras |
| Trending | Trending cameras carousel |
| Categories | Category grid |
| Statistics | Live stat counters |
| Popular Countries | Country cards |
| Newsletter | Email signup |
| Testimonials | User testimonials |
| Footer CTA | Call to action |

### Map

| Component | Description |
|---|---|
| Interactive Map | Main map view |
| Map Marker | Camera marker |
| Marker Popup | Click/hover popup |
| Cluster Marker | Grouped markers |
| Map Legend | Layer legend |
| Layer Switcher | Map style toggle |
| Map Controls | Zoom, rotate, tilt |
| Search Marker | Search result marker |
| Radius Search | Area-based search |

### Camera

| Component | Description |
|---|---|
| Camera Card | Camera preview card |
| Camera Player | Live video player |
| Camera Information | Details panel |
| Related Cameras | Similar cameras |
| View Counter | Live view count |
| Camera Tags | Category/status tags |
| Provider Information | Source info |
| Location Card | Location mini-map |
| Share Button | Social share |
| Favorite Button | Add to favorites |

### Search

| Component | Description |
|---|---|
| Search Bar | Global search input |
| Recent Searches | Search history |
| Suggestions | Autocomplete |
| Search Results | Results grid/list |
| AI Search Panel | AI query interface |
| Filter Chips | Active filter pills |
| Voice Search | Voice input (optional) |

### Filters

| Component | Description |
|---|---|
| Country Filter | Country multi-select |
| State Filter | State selector |
| City Filter | City selector |
| Provider Filter | Provider selector |
| Resolution Filter | HD/4K toggle |
| Category Filter | Category selector |
| Status Filter | Online/offline toggle |
| Sort Dropdown | Sort order selector |

### Country

| Component | Description |
|---|---|
| Country Grid | Country listing |
| Country Card | Country with flag |
| Country Statistics | Camera counts |
| Flag Component | Country flag display |

### Dashboard

| Component | Description |
|---|---|
| Sidebar | Admin navigation |
| Overview Cards | KPI summary cards |
| Analytics Charts | Data visualizations |
| Activity Feed | Recent activity |
| Recent Cameras | Latest additions |
| Top Providers | Provider rankings |

---

## Pages

```
/                           # Home / Landing
/search                     # Search results
/map                        # Interactive world map
/camera/[slug]              # Camera detail page
/country                    # All countries
/country/[country]          # Country cameras
/city/[city]                # City cameras
/category                   # All categories
/category/[slug]            # Category cameras
/favorites                  # User favorites
/history                    # Viewing history
/dashboard                  # Admin dashboard
/profile                    # User profile
/settings                   # User settings
/about                      # About page
/privacy                    # Privacy policy
/terms                      # Terms of service
/404                        # Not found
```

---

## Responsive Strategy

### Approach: Mobile First

### Breakpoints

| Name | Width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

### Responsive Patterns

- Flexible card grids (1 → 2 → 3 → 4 columns)
- Collapsible sidebar on mobile
- Bottom navigation on mobile
- Sticky search bar
- Responsive tables (horizontal scroll or stacked)

---

## Theme System

### Modes

- ☀️ Light
- 🌙 Dark
- 💻 System (auto-detect)

### Features

- Theme persistence (localStorage)
- Animated transitions between themes
- CSS variable-based (instant swap)
- No flash of unstyled content (FOUC prevention)

---

## Animation Guidelines

### Page Transitions

| Animation | Usage |
|---|---|
| Fade In | Default page enter |
| Slide Up | Content reveal |
| Scale | Modal/dialog enter |

### Interactions

| Animation | Usage |
|---|---|
| Card Lift | Hover on cards |
| Button Ripple | Click feedback |
| Skeleton Loading | Content placeholder |
| Animated Counters | Statistics |
| Floating Elements | Hero decorations |
| Smooth Scroll | Page scrolling (Lenis) |

---

## State Management

### Global State (Zustand)

| Store | Purpose |
|---|---|
| Theme | Dark/Light/System mode |
| Authentication | User auth state |
| User | User profile data |
| Favorites | Saved cameras |
| Search | Search query & history |
| Filters | Active filters |
| Notifications | Toast queue |
| Sidebar | Sidebar open/closed |
| Modal | Active modal state |
| Player | Video player state |
| Map | Map viewport & markers |

---

## API Layer

```
services/
├── camera.service.ts       # Camera CRUD & queries
├── country.service.ts      # Country data
├── category.service.ts     # Category data
├── search.service.ts       # Search & AI search
├── user.service.ts         # User profile & prefs
└── provider.service.ts     # Provider data
```

**Rule:** Never call `fetch` directly inside components. Always go through the service layer.

---

## Hooks

```
hooks/
├── useCamera()             # Camera data & actions
├── useCountries()          # Country list & details
├── useSearch()             # Search state & actions
├── useFavorites()          # Favorite management
├── useTheme()              # Theme switching
├── useMap()                # Map state & controls
├── useFilters()            # Filter state
├── useDebounce()           # Debounced values
├── usePagination()         # Pagination logic
└── useInfiniteScroll()     # Infinite scroll loading
```

---

## Providers

```
providers/
├── ThemeProvider            # Theme context (next-themes)
├── QueryProvider            # TanStack Query client
├── AuthProvider             # Authentication context
├── ToastProvider            # Toast notifications
└── MapProvider              # Map instance context
```

---

## Performance

| Strategy | Implementation |
|---|---|
| Server Components | Default for all non-interactive UI |
| Streaming | Suspense boundaries for progressive loading |
| Suspense | Granular loading states |
| Code Splitting | Route-based splitting (automatic) |
| Lazy Loading | `next/dynamic` for heavy components |
| Dynamic Imports | Map, Charts, Player loaded on demand |
| Memoization | `React.memo`, `useMemo`, `useCallback` |
| Virtualized Lists | Virtual scrolling for large camera lists |
| Optimized Images | `next/image` with WebP/AVIF |
| Prefetching | Link prefetch, query prefetch |
| Caching | TanStack Query + HTTP cache headers |

---

## Accessibility

- ⌨️ Full keyboard navigation
- 🏷️ ARIA labels on interactive elements
- 🎯 Focus management (focus trapping in modals)
- 📐 Semantic HTML (`<main>`, `<nav>`, `<article>`, etc.)
- 🔊 Screen reader support
- 🎨 Contrast compliance (WCAG AA minimum)
- 🎬 Reduced motion support (`prefers-reduced-motion`)

---

## SEO

| Feature | Implementation |
|---|---|
| Metadata API | Next.js `generateMetadata` |
| Dynamic Metadata | Per-page titles & descriptions |
| Open Graph | Social sharing cards |
| Twitter Cards | Twitter-specific meta |
| JSON-LD | Structured data for cameras |
| Canonical URLs | Prevent duplicate content |
| Sitemap | Auto-generated XML sitemap |
| Robots.txt | Crawler directives |

---

## Error Handling

| Component | Purpose |
|---|---|
| Error Boundaries | Graceful error recovery |
| 404 Page | Custom not found page |
| Loading UI | Skeleton loaders per route |
| Empty States | Friendly empty state messages |
| Retry Components | Retry failed requests |
| Offline Indicator | Network status banner |

---

## Testing

| Type | Tool |
|---|---|
| Unit Tests | Vitest |
| Component Tests | React Testing Library |
| Integration Tests | Vitest + MSW |
| Accessibility Tests | axe-core |
| Visual Regression | Chromatic / Percy |
| End-to-End Tests | Playwright |

---

## Coding Standards

- ✅ Strict TypeScript (`strict: true`)
- ✅ Functional components only (no class components)
- ✅ Reusable, composable components
- ✅ Single Responsibility Principle
- ✅ Barrel exports (`index.ts` per folder)
- ✅ No inline styles
- ✅ No duplicated code (DRY)
- ✅ Consistent naming conventions:
  - Components: `PascalCase`
  - Hooks: `camelCase` with `use` prefix
  - Utils: `camelCase`
  - Types: `PascalCase`
  - Constants: `UPPER_SNAKE_CASE`
- ✅ Feature-first architecture
- ✅ Clean separation of UI and business logic

---

## Development Roadmap

### Phase 1 — Foundation

- [ ] Initialize Next.js project
- [ ] Configure Tailwind CSS and Shadcn UI
- [ ] Set up fonts, themes, and design tokens
- [ ] Create layouts and navigation
- [ ] Configure providers and global utilities

### Phase 2 — Design System

- [ ] Build reusable UI primitives
- [ ] Create shared cards, buttons, forms, dialogs, and loaders
- [ ] Document component usage

### Phase 3 — Public Experience

- [ ] Home page
- [ ] Search experience
- [ ] Interactive world map
- [ ] Country, city, category, and camera pages

### Phase 4 — User Features

- [ ] Authentication UI
- [ ] Favorites
- [ ] History
- [ ] User profile
- [ ] Settings

### Phase 5 — Dashboard

- [ ] Admin layout
- [ ] Camera management UI
- [ ] Analytics
- [ ] Provider management
- [ ] Monitoring screens

### Phase 6 — Polish

- [ ] Animations
- [ ] Accessibility improvements
- [ ] Responsive refinements
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## Success Criteria

- ✅ Fully responsive across mobile, tablet, and desktop
- ✅ Reusable component library with Shadcn UI
- ✅ Consistent design language and theming
- ✅ High Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- ✅ Scalable architecture suitable for long-term feature growth
- ✅ Clean, maintainable, and well-documented codebase
