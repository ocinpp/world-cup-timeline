# World Cup Timeline - Claude Code Context

## Project Overview

A Vue 3 + TypeScript application displaying FIFA World Cup history (1930-2022) with an immersive timeline interface.

## Architecture

### State Management

The app uses Vue composables for state management (no Pinia):

- **`useTimeline`** (`src/composables/useTimeline.ts`): Core state with module-level singletons
  - `worldCups`: Array of all World Cup data
  - `currentIndex`: Currently selected tournament index
  - `hoveredIndex`: Currently hovered tournament (for preview)
  - `displayWorldCup`: Computed - shows hovered or current World Cup
  - `viewMode`: 'timeline' | 'fullscreen'

- **`useNavigation`** (`src/composables/useNavigation.ts`): Keyboard event handling
  - Exposes `start()`/`stop()` for testing and manual control
  - Uses `getCurrentInstance()` to detect component context

### Component Structure

- **App.vue**: Split-screen layout with featured card (left) and Timeline (right)
- **Timeline.vue**: Scrollable list of World Cups with hover preview
- **DetailView.vue**: Fullscreen overlay with tournament details, map, and venues
- **MapView.vue**: Leaflet integration with custom UCL-themed markers

### Styling

- TailwindCSS with custom theme colors in `tailwind.config.js`
- UCL blue palette: `wc-ucl-blue`, `wc-ucl-navy`, `wc-ucl-dark`, etc.
- Accent colors: `wc-coral` (#FF6B6B), `wc-gold` (#FFD700)
- Custom scrollbar styles in component `<style scoped>` blocks

## Key Patterns

### Hover Preview Behavior

```typescript
// In useTimeline.ts
const displayWorldCup = computed(() => {
  if (hoveredIndex.value !== null) {
    return worldCups.value[hoveredIndex.value]
  }
  return currentWorldCup.value
})
```

Mouse leave does NOT reset to current selection - it keeps showing the last hovered item.

### Map Initialization

Map requires a delay before initialization to render properly in overlays:

```typescript
const MAP_INIT_DELAY_MS = 100 // Delay to ensure container is visible
onMounted(() => {
  setTimeout(() => initMap(), MAP_INIT_DELAY_MS)
})
```

### Scrollable Sections

For scrollable content with fixed headers, use this pattern:

```html
<div class="flex-1 flex flex-col min-h-0">
  <h3 class="flex-shrink-0">Fixed Title</h3>
  <div class="overflow-y-auto flex-1 min-h-0 scrollbar-thin">
    <!-- Scrollable content -->
  </div>
</div>
```

Parent must have `min-h-0` for flex shrinking to work.

## Data Format

World Cup data in `src/data/world-cups.ts`:

```typescript
interface WorldCup {
  year: number
  hostCountry: string
  logo: string // Path to logo image
  description: string
  hostCities: HostCity[]
  winner: { country: string; flag: string; score: string }
  runnerUp: { country: string; flag: string }
  funFacts: string[]
}

interface HostCity {
  name: string
  stadium: string
  coordinates: [number, number] // [lat, lng]
}
```

Logos are stored in `public/images/{year}.{ext}` (svg, png, or jpg).

## Testing

- Vitest with happy-dom environment
- Tests for composables in `src/composables/*.test.ts`
- useNavigation tests require calling `start()`/`stop()` manually (not in Vue context)

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (includes type check)
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix lint issues
npm run test         # Vitest in watch mode
npm run test:run     # Run tests once
```

## Recent Decisions

1. **Module-level singletons in useTimeline**: Intentional for shared state across components. Documented with JSDoc.

2. **No Pinia**: App state is simple enough for composables. Can migrate if complexity grows.

3. **UCL blue theme**: User preference for UEFA Champions League aesthetics over original green theme.

4. **Hidden Quick Info Bar**: Commented out in App.vue, can be restored if needed.

5. **Consistent scoreline styling**: Both main page and detail view use solid gold (`text-wc-gold`) for winner scores, avoiding gradient effects for consistency.
