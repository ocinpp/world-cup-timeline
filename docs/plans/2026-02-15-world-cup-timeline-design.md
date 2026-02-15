# World Cup Timeline Gallery - Design Document

**Date**: 2026-02-15
**Purpose**: Presentation tool for World Cup history
**Tech Stack**: Vue 3 + Vite + TailwindCSS + Leaflet

## Overview

A horizontal timeline gallery application for browsing World Cup history (1930-2022). Designed as a presentation tool with immersive fullscreen detail views, interactive maps, and easy content management via MDX files.

## Architecture

### Project Structure

```
world-cup-timeline/
├── src/
│   ├── components/
│   │   ├── Timeline.vue          # Horizontal timeline navigation
│   │   ├── TimelineItem.vue      # Individual timeline thumbnail
│   │   ├── DetailView.vue        # Fullscreen expanded view
│   │   ├── MapView.vue           # Leaflet map component
│   │   └── NavigationControls.vue # Arrows, keyboard nav
│   ├── content/
│   │   ├── 1930-uruguay.mdx
│   │   ├── 1934-italy.mdx
│   │   └── ... (all World Cups)
│   ├── composables/
│   │   ├── useTimeline.js       # Timeline logic & state
│   │   └── useNavigation.js     # Navigation controls
│   ├── types/
│   │   └── world-cup.ts         # TypeScript interfaces
│   ├── App.vue
│   └── main.ts
├── public/
│   └── images/                   # World Cup logos, photos
└── package.json
```

### Key Technologies
- Vue 3 with Composition API + TypeScript
- Vite (dev server + build)
- TailwindCSS (styling)
- Leaflet (interactive maps)
- MDX (content files)

### State Management
- Simple reactive state in composables (no Pinia needed)
- Current selected World Cup year
- Timeline scroll position
- View mode (timeline vs fullscreen)

## Data Structure

### TypeScript Interface

```typescript
interface HostCity {
  name: string;
  stadium?: string;
  coordinates: [number, number]; // [lat, lng]
  googleMapsUrl?: string;
}

interface WorldCup {
  year: number;
  hostCountry: string;
  logo?: string;
  description: string;
  hostCities: HostCity[];
  winner: {
    country: string;
    flag?: string;
    score?: string;
  };
  runnerUp?: {
    country: string;
    flag?: string;
  };
  funFacts?: string[];
}
```

### MDX Content Format

Each World Cup has its own MDX file with frontmatter for structured data and markdown body for rich descriptions.

Example: `1930-uruguay.mdx`
```mdx
---
year: 1930
hostCountry: Uruguay
logo: /images/1930-uruguay-logo.png
hostCities:
  - name: Montevideo
    stadium: Estadio Centenario
    coordinates: [-34.8893, -56.1784]
winner:
  country: Uruguay
  flag: 🇺🇾
  score: "4-2"
---

# 1930 FIFA World Cup - Uruguay

The inaugural FIFA World Cup was held in Uruguay...
```

## Component Design

### 1. Timeline.vue
- Horizontal scrollable container at bottom of screen
- Shows all World Cups as circular thumbnails (logo + year)
- Current item highlighted with accent color
- Auto-hides when DetailView is active (slides down with animation)
- Responsive sizing across breakpoints

### 2. TimelineItem.vue
- Circular thumbnail showing World Cup logo
- Year label below
- Hover state: subtle scale (1.1x) + glow effect
- Click triggers DetailView expansion

### 3. DetailView.vue
- Fullscreen overlay when active
- Layout:
  - Logo (large) + Year/Host Country
  - Description (scrollable if long)
  - Interactive Leaflet map with host cities
  - Winner information with flag
  - Prev/Next navigation arrows
- Smooth entrance animation (fade + scale)
- Background: blurred thumbnail or gradient

### 4. MapView.vue
- Leaflet map centered on host country
- Custom pins for each host city/stadium
- Click pin → opens Google Maps in new tab
- Responsive sizing
- Minimal UI (just zoom controls)

### 5. NavigationControls.vue
- Left/Right arrows for prev/next
- Keyboard shortcuts support
- Appears on hover in DetailView

## Navigation & Interaction

### Timeline Navigation (Default View)
- **Horizontal scroll**: Mouse wheel or trackpad swipe
- **Keyboard**: Left/Right arrows
- **Click**: Opens DetailView
- **Auto-center**: Clicking brings item to center

### DetailView Navigation
- **Escape key**: Closes DetailView
- **Left/Right arrows**: Navigate prev/next while in fullscreen
- **Click outside**: Closes view
- **Swipe gestures** (mobile): Left/right for nav, down to close

### Keyboard Shortcuts
- `←` / `→` : Navigate prev/next
- `Enter` : Open selected item
- `Escape` : Close DetailView
- `Home` / `End` : Jump to first/last World Cup

### Visual Feedback
- Timeline item scales up (1.1x) on hover
- Active item has accent border + shadow
- Smooth transitions (300ms ease-out)
- Loading skeleton for images

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Timeline Adaptations
- Desktop: 6-8 visible thumbnails, 80px diameter
- Tablet: 4-5 visible thumbnails, 70px diameter
- Mobile: 3-4 visible thumbnails, 60px diameter, swipe scroll

### DetailView Adaptations
- Desktop: Logo and title side-by-side, map 40% height
- Tablet: Stacked layout, map 35% height
- Mobile: Fully stacked, smaller logo, map 30% height, always-visible nav

### Mobile-Specific
- Touch drag on timeline
- Swipe gestures for navigation
- Larger touch targets (min 44px)
- Disabled hover states

## Error Handling

### Image Loading
- Missing logo: Placeholder with flag emoji + year
- Slow load: Skeleton loader
- Load error: Text-only fallback

### Map Errors
- Leaflet failure: Show city list with Google Maps links
- Invalid coordinates: Skip pin, show in description only

### Content Errors
- Missing MDX: Skip in timeline, console warning
- Invalid frontmatter: Error state in DetailView
- Empty description: Show minimal card

### Navigation Edge Cases
- First/Last item: Disable appropriate arrow buttons
- Rapid navigation: Debounce events (300ms)
- Browser back button: Close DetailView if open

## Development Phases

### Phase 1: Foundation
- Project setup (Vite + Vue 3 + TailwindCSS)
- Basic timeline component
- MDX content loading
- DetailView component (basic)
- 3-5 sample World Cup files

### Phase 2: Core Features
- Full World Cup content (1930-2022)
- Leaflet map integration
- Timeline animations
- Keyboard navigation
- Responsive layouts

### Phase 3: Polish
- Smooth scroll animations
- Image optimization
- Mobile touch gestures
- Performance optimization
- Visual polish

### Phase 4: Enhancement (Optional)
- Auto-play mode
- Search/filter
- Shareable links
- Dark mode

## Testing Strategy

### Manual Testing
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Chrome Android)
- Keyboard navigation
- Touch gestures
- Presentation flow

### Automated Testing
- Unit tests: Data validation (Vitest)
- Component tests: Critical user flows
- Optional E2E: Main navigation flow

### Performance
- Lighthouse audit (target: 90+ score)
- Timeline scroll (target: 60fps)
- Bundle size (target: < 500KB)

### Accessibility
- Keyboard-only navigation
- Basic ARIA labels
- Color contrast validation
- Focus management

## Future Enhancements

- Search by country/year/winner
- Filter by winning team
- Compare mode (side-by-side)
- Stats visualization
- Social sharing
- Multi-language support
- Admin UI for content editing
- 3D timeline effects (Three.js)
