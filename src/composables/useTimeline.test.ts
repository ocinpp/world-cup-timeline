import { describe, it, expect, beforeEach } from 'vitest'
import { useTimeline } from './useTimeline'
import type { WorldCup } from '../types/world-cup'

// Test data
const mockWorldCups: WorldCup[] = [
  {
    year: 1930,
    hostCountry: 'Uruguay',
    description: 'First World Cup',
    hostCities: [{ name: 'Montevideo', coordinates: [-34.8929, -56.1674] }],
    winner: { country: 'Uruguay', flag: '🇺🇾', score: '4-2' },
    runnerUp: { country: 'Argentina', flag: '🇦🇷' },
    funFacts: ['First tournament'],
  },
  {
    year: 1934,
    hostCountry: 'Italy',
    description: 'Second World Cup',
    hostCities: [{ name: 'Rome', coordinates: [41.9028, 12.4964] }],
    winner: { country: 'Italy', flag: '🇮🇹', score: '2-1' },
    runnerUp: { country: 'Czechoslovakia', flag: '🇨🇿' },
    funFacts: ['First with qualifiers'],
  },
  {
    year: 1938,
    hostCountry: 'France',
    description: 'Third World Cup',
    hostCities: [{ name: 'Paris', coordinates: [48.8566, 2.3522] }],
    winner: { country: 'Italy', flag: '🇮🇹', score: '4-2' },
    runnerUp: { country: 'Hungary', flag: '🇭🇺' },
    funFacts: ['Italy retained title'],
  },
]

describe('useTimeline', () => {
  // Get shared instance
  const timeline = useTimeline()

  // Reset state before each test
  beforeEach(() => {
    // Reset to initial state
    timeline.setWorldCups([])
    timeline.goToFirst()
    timeline.setHoveredIndex(null)
    timeline.closeFullscreen()
  })

  describe('setWorldCups', () => {
    it('should set world cups data', () => {
      timeline.setWorldCups(mockWorldCups)
      expect(timeline.worldCups.value).toHaveLength(3)
    })

    it('should sort world cups by year', () => {
      const unsorted = [mockWorldCups[2], mockWorldCups[0], mockWorldCups[1]]
      timeline.setWorldCups(unsorted)
      expect(timeline.worldCups.value[0].year).toBe(1930)
      expect(timeline.worldCups.value[1].year).toBe(1934)
      expect(timeline.worldCups.value[2].year).toBe(1938)
    })
  })

  describe('navigation', () => {
    beforeEach(() => {
      timeline.setWorldCups(mockWorldCups)
      timeline.goToFirst()
    })

    it('should start at index 0', () => {
      expect(timeline.currentIndex.value).toBe(0)
    })

    it('should have hasPrev as false at start', () => {
      expect(timeline.hasPrev.value).toBe(false)
    })

    it('should have hasNext as true at start', () => {
      expect(timeline.hasNext.value).toBe(true)
    })

    it('should navigate to next', () => {
      timeline.next()
      expect(timeline.currentIndex.value).toBe(1)
    })

    it('should navigate to prev after next', () => {
      timeline.next()
      expect(timeline.currentIndex.value).toBe(1)
      timeline.prev()
      expect(timeline.currentIndex.value).toBe(0)
    })

    it('should not go below 0', () => {
      timeline.prev()
      expect(timeline.currentIndex.value).toBe(0)
    })

    it('should not go above max', () => {
      timeline.goToLast()
      timeline.next()
      expect(timeline.currentIndex.value).toBe(2)
    })

    it('should go to first', () => {
      timeline.next()
      timeline.next()
      timeline.goToFirst()
      expect(timeline.currentIndex.value).toBe(0)
    })

    it('should go to last', () => {
      timeline.goToLast()
      expect(timeline.currentIndex.value).toBe(2)
    })

    it('should clear hovered index when navigating next', () => {
      timeline.setHoveredIndex(2)
      timeline.next()
      expect(timeline.hoveredIndex.value).toBeNull()
    })

    it('should clear hovered index when navigating prev', () => {
      timeline.selectIndex(2)
      timeline.setHoveredIndex(0)
      timeline.prev()
      expect(timeline.hoveredIndex.value).toBeNull()
    })
  })

  describe('selectByYear', () => {
    beforeEach(() => {
      timeline.setWorldCups(mockWorldCups)
      timeline.goToFirst()
    })

    it('should select by year', () => {
      timeline.selectByYear(1938)
      expect(timeline.currentIndex.value).toBe(2)
    })

    it('should not change index if year not found', () => {
      const initialIndex = timeline.currentIndex.value
      timeline.selectByYear(9999)
      expect(timeline.currentIndex.value).toBe(initialIndex)
    })
  })

  describe('selectIndex', () => {
    beforeEach(() => {
      timeline.setWorldCups(mockWorldCups)
      timeline.goToFirst()
    })

    it('should select by index', () => {
      timeline.selectIndex(1)
      expect(timeline.currentIndex.value).toBe(1)
    })

    it('should clear hovered index', () => {
      timeline.setHoveredIndex(2)
      timeline.selectIndex(1)
      expect(timeline.hoveredIndex.value).toBeNull()
    })
  })

  describe('currentWorldCup', () => {
    beforeEach(() => {
      timeline.setWorldCups(mockWorldCups)
      timeline.goToFirst()
    })

    it('should return current world cup', () => {
      expect(timeline.currentWorldCup.value?.year).toBe(1930)
    })

    it('should update when index changes', () => {
      timeline.next()
      expect(timeline.currentWorldCup.value?.year).toBe(1934)
    })
  })

  describe('displayWorldCup', () => {
    beforeEach(() => {
      timeline.setWorldCups(mockWorldCups)
      timeline.goToFirst()
    })

    it('should return current world cup when not hovered', () => {
      expect(timeline.displayWorldCup.value?.year).toBe(1930)
    })

    it('should return hovered world cup when set', () => {
      timeline.setHoveredIndex(2)
      expect(timeline.displayWorldCup.value?.year).toBe(1938)
    })

    it('should fall back to current when hover is cleared', () => {
      timeline.selectIndex(1)
      timeline.setHoveredIndex(2)
      timeline.setHoveredIndex(null)
      expect(timeline.displayWorldCup.value?.year).toBe(1934)
    })
  })

  describe('viewMode', () => {
    beforeEach(() => {
      timeline.setWorldCups(mockWorldCups)
      timeline.closeFullscreen()
    })

    it('should start as timeline', () => {
      expect(timeline.viewMode.value).toBe('timeline')
    })

    it('should open fullscreen', () => {
      timeline.openFullscreen()
      expect(timeline.viewMode.value).toBe('fullscreen')
    })

    it('should close fullscreen', () => {
      timeline.openFullscreen()
      timeline.closeFullscreen()
      expect(timeline.viewMode.value).toBe('timeline')
    })

    it('should toggle fullscreen', () => {
      timeline.toggleFullscreen()
      expect(timeline.viewMode.value).toBe('fullscreen')
      timeline.toggleFullscreen()
      expect(timeline.viewMode.value).toBe('timeline')
    })

    it('should select index when opening fullscreen', () => {
      timeline.openFullscreen(2)
      expect(timeline.currentIndex.value).toBe(2)
      expect(timeline.viewMode.value).toBe('fullscreen')
    })
  })
})
