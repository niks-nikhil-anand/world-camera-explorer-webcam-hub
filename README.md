# 🌍 Global Public Camera Explorer

A production-grade Next.js application that aggregates publicly available webcams from around the world and presents them on an interactive map with search, categories, AI recommendations, and live streaming.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Database Design](#database-design)
- [Implementation Phases](#implementation-phases)
- [API Routes](#api-routes)
- [Search System](#search-system)
- [Streaming Support](#streaming-support)
- [Map Features](#map-features)
- [UI Components](#ui-components)
- [Admin Panel](#admin-panel)
- [Background Jobs](#background-jobs)
- [Performance](#performance)
- [SEO](#seo)
- [Security](#security)
- [Monitoring](#monitoring)
- [CI/CD](#cicd)
- [Project Timeline](#project-timeline)
- [Future Enhancements](#future-enhancements)
- [Getting Started](#getting-started)

---

## Features

- 🗺️ Interactive world map with camera markers, clustering, and popups
- 🔍 Full-text search + AI-powered natural language search
- 📂 Browse by country, city, and category
- 🎥 Live streaming player (HLS, RTSP, MJPEG, DASH, JPEG Snapshot)
- ❤️ Favorites, collections, and viewing history
- 🤖 AI recommendations and trending cameras
- 🛡️ Admin panel with camera management and analytics
- 📊 Real-time statistics and monitoring
- 🌙 Dark mode support
- 📱 Fully responsive design

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Shadcn UI | Component Library |
| Framer Motion | Animations |
| React Three Fiber | Optional 3D Globe |
| Mapbox GL JS / MapLibre | Interactive Maps |
| Zustand | State Management |
| TanStack Query | Data Fetching & Caching |
| React Hook Form | Form Management |
| Zod | Schema Validation |
| HLS.js / Video.js | Video Playback |

### Backend

| Technology | Purpose |
|---|---|
| Next.js Route Handlers | API Layer |
| Prisma ORM | Database Access |
| PostgreSQL | Primary Database |
| Redis | Caching & Queues |
| BullMQ | Background Job Processing |
| FFmpeg | Video/Thumbnail Processing |
| Node Cron | Scheduled Tasks |

### Storage & CDN

| Technology | Purpose |
|---|---|
| PostgreSQL | Relational Data |
| Redis | Cache Layer |
| AWS S3 | Media Storage |
| CloudFront | CDN |

### Authentication

- Clerk or NextAuth

### AI

- OpenAI
- Google Gemini

### Deployment

- Vercel
- Railway
- AWS ECS
- Docker

---

## Folder Structure

```
app/
├── (public)/
│   ├── page.tsx              # Landing page
│   ├── map/                  # Interactive map view
│   ├── camera/               # Camera detail pages
│   ├── countries/            # Country listing & drill-down
│   ├── city/                 # City listing
│   ├── category/             # Category listing
│   └── search/               # Search results
├── dashboard/                # User dashboard
├── api/                      # API route handlers
├── admin/                    # Admin panel
├── settings/                 # User settings
└── profile/                  # User profile

components/
├── map/                      # Map-related components
├── camera/                   # Camera cards, players
├── ui/                       # Shadcn UI components
├── layout/                   # Navbar, Footer, Sidebar
├── search/                   # Search bar, suggestions
├── cards/                    # Country, Category cards
├── filters/                  # Filter panels
└── globe/                    # 3D Globe components

lib/                          # Core utilities & config
services/                     # Business logic & API clients
hooks/                        # Custom React hooks
types/                        # TypeScript type definitions
utils/                        # Helper functions
store/                        # Zustand stores
prisma/                       # Prisma schema & migrations
public/                       # Static assets
```

---

## Database Design

### Camera

| Field | Type | Description |
|---|---|---|
| id | UUID | Primary key |
| name | String | Camera name |
| slug | String | URL-friendly identifier |
| country | String | Country name |
| state | String | State/Province |
| city | String | City name |
| latitude | Float | GPS latitude |
| longitude | Float | GPS longitude |
| category | String | Camera category |
| provider | String | Source provider |
| streamUrl | String | Stream URL |
| thumbnail | String | Thumbnail image URL |
| status | Enum | online / offline / unknown |
| viewCount | Int | Total views |
| rating | Float | Average rating |
| isLive | Boolean | Currently streaming |
| isVerified | Boolean | Verified by admin |
| createdAt | DateTime | Created timestamp |
| updatedAt | DateTime | Updated timestamp |

### Categories

- Traffic
- Airport
- Beach
- Mountain
- Zoo
- Nature
- Weather
- Port
- Railway
- City
- Animal

### Country

| Field | Type |
|---|---|
| id | UUID |
| name | String |
| iso | String |
| flag | String |
| cameraCount | Int |

### User

| Field | Type |
|---|---|
| id | UUID |
| name | String |
| email | String |
| favorites | Relation |
| history | Relation |
| createdAt | DateTime |

### Favorite

| Field | Type |
|---|---|
| userId | UUID (FK) |
| cameraId | UUID (FK) |

---

## Implementation Phases

### Phase 1 — Landing Page

- Hero section with animated background
- Global search bar
- Trending cameras carousel
- Popular countries grid
- Category cards
- Live statistics counter
- Newest cameras section

### Phase 2 — Interactive Map

- Mapbox GL JS / MapLibre integration
- Features:
  - Marker clustering
  - Hover popup with thumbnail preview
  - Live status indicators (green/red dots)
  - Filter controls overlay
  - Click marker → open camera detail

### Phase 3 — Camera Page

- Live video player (auto-detect stream type)
- Camera information panel:
  - Country, City, Coordinates
  - Provider, Category
  - View count, Rating
- Related cameras sidebar
- Comments section

### Phase 4 — Search

- Search by:
  - Country
  - City
  - Category
  - Camera name
  - Provider
- AI-powered natural language search
- Example queries:
  - "Beach in Thailand" → returns Phuket, Krabi, Pattaya cameras
  - "Snow mountains" → returns alpine webcams
  - "Busy cities at night" → returns city cameras

### Phase 5 — Countries Drill-Down

```
World → India → Karnataka → Bangalore → All Cameras
```

- Hierarchical navigation
- Country → State → City → Camera listing

### Phase 6 — Categories

- Traffic
- Airport
- Beach
- Mountain
- Wildlife
- Zoo
- Forest
- National Park
- Weather
- Railway

### Phase 7 — Favorites & Collections

- User login required
- Save cameras to favorites
- Organize into collections
- Viewing history

### Phase 8 — Recommendations

- Recently viewed
- Continue watching
- Trending now
- AI-powered recommendations

---

## API Routes

```
GET    /api/cameras              # List cameras (paginated, filterable)
GET    /api/camera/:id           # Get single camera details
GET    /api/country              # List all countries
GET    /api/city                 # List cities (by country)
GET    /api/category             # List categories
POST   /api/favorite             # Add to favorites
DELETE /api/favorite             # Remove from favorites
GET    /api/search               # Search cameras
POST   /api/admin/import         # Bulk import cameras
POST   /api/admin/check-status   # Check camera status
```

---

## Search System

### Normal Search

- Full-text search across camera name, country, city, category
- Instant suggestions / autocomplete
- Recent searches

### AI Search

- Natural language query processing
- Semantic understanding of intent
- Example queries:
  - "Show beaches"
  - "Traffic in Japan"
  - "Snow mountains"
  - "Animal cameras"
  - "Safari"
  - "Night cameras"
  - "Ships"
  - "Busy cities"
  - "Sunset webcams"

---

## Streaming Support

| Format | Description |
|---|---|
| HLS | HTTP Live Streaming (.m3u8) |
| RTSP | Real-Time Streaming Protocol |
| MJPEG | Motion JPEG streams |
| JPEG Snapshot | Refreshing still images |
| DASH | Dynamic Adaptive Streaming |

- Automatic format detection
- Adaptive player selection based on stream type

---

## Map Features

- Marker clustering (zoom-dependent)
- Marker animations on hover/select
- Dark mode / Light mode toggle
- Satellite view
- Terrain view
- Heatmap of camera density
- Nearby cameras (proximity)
- Radius search ("cameras within 50km")

---

## UI Components

| Component | Description |
|---|---|
| Navbar | Global navigation with search |
| Hero | Landing page hero section |
| Search | Search bar with suggestions |
| Country Card | Country with flag and count |
| Camera Card | Thumbnail, name, status badge |
| Category Card | Icon + category name |
| Map | Full interactive map |
| Sidebar | Filters and navigation |
| Filters | Multi-select filter panels |
| Video Player | Adaptive streaming player |
| Statistics | Live counters |
| Footer | Links, socials, legal |
| Login Modal | Auth modal |
| Settings | User preferences |

### Filters

- Country
- State
- City
- Category
- Provider
- Live / Offline
- HD / 4K
- Verified
- Trending
- Popular

---

## Admin Panel

### Dashboard

- Total cameras (online/offline breakdown)
- Total users
- Total views
- Countries, Cities, Providers count
- Bandwidth usage

### Camera Management

- Full CRUD operations
- Bulk upload
- CSV import
- JSON import
- API sync (external providers)
- Status checker
- Thumbnail generator

### Sections

- Users
- Cameras
- Categories
- Countries
- Cities
- Providers
- Reports
- Logs
- Analytics

---

## Background Jobs

Runs every 10 minutes via BullMQ + Node Cron:

- ✅ Check camera online/offline status
- 🖼️ Generate/refresh thumbnails
- 📊 Update view statistics
- 🔄 Refresh metadata from providers
- 🗑️ Delete broken/dead cameras
- 🔗 Sync with external APIs

---

## Performance

| Strategy | Implementation |
|---|---|
| Image Optimization | Next.js Image component, WebP/AVIF |
| Lazy Loading | Intersection Observer, dynamic imports |
| Virtualization | Virtual scrolling for large lists |
| Redis Cache | Hot data caching (cameras, countries) |
| ISR | Incremental Static Regeneration |
| Server Components | Minimize client JS bundle |
| Edge Middleware | Geo-routing, rate limiting |
| CDN | CloudFront for static assets |
| Compression | Gzip/Brotli |

---

## SEO

- Dynamic metadata per page
- Open Graph tags (social sharing)
- Sitemap generation (XML)
- robots.txt configuration
- Structured data (JSON-LD)
- Canonical URLs
- Dynamic page titles and descriptions

---

## Security

| Measure | Purpose |
|---|---|
| Rate Limiting | Prevent abuse |
| Bot Protection | Block scrapers |
| Input Validation | Zod schemas |
| CORS | Restrict origins |
| Helmet | Security headers |
| JWT | Token authentication |
| CSRF | Cross-site request forgery protection |
| Secure Cookies | HttpOnly, SameSite |

---

## Monitoring

| Tool | Purpose |
|---|---|
| Sentry | Error tracking |
| OpenTelemetry | Distributed tracing |
| Better Stack | Log management |
| Uptime Robot | Uptime monitoring |
| Grafana | Dashboards |
| Prometheus | Metrics collection |

---

## CI/CD

- GitHub Actions (lint, test, build)
- Docker containerization
- Vercel Preview deployments (PRs)
- Railway for staging
- AWS ECS for production
- Automatic deployments on merge to main

---

## Project Timeline

| Phase | Module | Estimated Time |
|---|---|---|
| 1 | Project Setup & Architecture | 2 days |
| 2 | Database & Prisma | 2 days |
| 3 | Authentication | 2 days |
| 4 | Landing Page & UI Components | 4 days |
| 5 | Interactive World Map | 5 days |
| 6 | Camera Listing & Detail Pages | 4 days |
| 7 | Search, Filters & AI Search | 5 days |
| 8 | Favorites, User Profiles & Collections | 3 days |
| 9 | Admin Panel & Camera Management | 7 days |
| 10 | Background Jobs & Data Sync | 4 days |
| 11 | Performance, SEO & Accessibility | 3 days |
| 12 | Testing, Monitoring & Deployment | 4 days |

**Total Estimated Duration:** 45–60 days for a polished MVP by one experienced full-stack developer (excluding time for negotiating camera feed licenses/partnerships).

---

## Future Enhancements

- 🌍 3D interactive globe with React Three Fiber
- 🤖 AI-powered camera discovery using natural language
- 🌦️ Live weather overlays and forecasts
- 🌅 Time-lapse generation for selected cameras
- 🔔 Alerts for sunrise, sunset, storms, or unusual events
- 📱 Progressive Web App (PWA) with offline browsing of metadata
- 🗺️ Trip planner that recommends live cameras along travel routes
- 📊 Real-time popularity heatmaps and viewing trends
- 🌐 Multi-language support with internationalization (i18n)
- 🎥 User-submitted webcams (with moderation and permissions)

---

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL
- Redis
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd cctv

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
pnpm prisma migrate dev

# Seed the database
pnpm prisma db seed

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/cctv
REDIS_URL=redis://localhost:6379
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
OPENAI_API_KEY=your_openai_key
CLERK_SECRET_KEY=your_clerk_key
AWS_S3_BUCKET=your_bucket
AWS_CLOUDFRONT_URL=your_cdn_url
```

---

## Architecture

This architecture is scalable enough to grow from a few hundred public webcams to tens of thousands while keeping the codebase modular, maintainable, and optimized for modern Next.js applications.

---

## License

MIT
