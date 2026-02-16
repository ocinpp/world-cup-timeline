# World Cup Timeline

An immersive Vue.js application showcasing the history of FIFA World Cups from 1930 to 2022.

## Features

- **Split-screen Layout**: Featured card with current selection on the left, scrollable timeline on the right
- **Responsive Design**: Optimized layouts for both mobile and desktop with smooth scrolling
- **Interactive Map**: Leaflet-powered map showing host cities with custom markers and smart zoom for crowded areas
- **Fullscreen Detail View**: Comprehensive tournament information including champions, venues, and fun facts
- **World Cup Logos**: Authentic tournament logos for each year
- **Keyboard Navigation**: Arrow keys, Home/End, Enter/Escape for quick navigation
- **UCL Blue Theme**: Inspired by UEFA Champions League aesthetics

## Tech Stack

- **Vue 3** with Composition API and `<script setup>`
- **TypeScript** for type safety
- **TailwindCSS** for styling with custom theme colors
- **Leaflet** for interactive maps
- **Vitest** for unit testing
- **ESLint** with Vue and TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testing

```bash
npm run test          # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:coverage # Run with coverage
```

### Linting

```bash
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
```

## Project Structure

```
src/
├── components/
│   ├── DetailView.vue    # Fullscreen tournament details
│   ├── MapView.vue       # Leaflet map integration
│   └── Timeline.vue      # Scrollable timeline list
├── composables/
│   ├── useNavigation.ts  # Keyboard navigation logic
│   ├── useTimeline.ts    # Timeline state management
│   └── *.test.ts         # Unit tests
├── data/
│   └── world-cups.ts     # World Cup data (1930-2022)
├── types/
│   └── world-cup.ts      # TypeScript interfaces
├── App.vue               # Main application
├── style.css             # Global styles
└── main.ts               # Entry point

public/
└── images/               # World Cup logos ({year}.{ext})
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ← | Previous World Cup |
| → | Next World Cup |
| Home | First World Cup (1930) |
| End | Latest World Cup (2022) |
| Enter | Open detail view |
| Escape | Close detail view |

## Data

Each World Cup entry includes:
- Host country and cities with stadiums
- Winner and runner-up with scores
- Tournament description
- Fun facts
- Geographic coordinates for map display
- Official tournament logo

## License

MIT
