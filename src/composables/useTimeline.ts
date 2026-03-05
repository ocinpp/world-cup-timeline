import { ref, computed } from 'vue'
import type { WorldCup } from '../types/world-cup'

/**
 * Module-level state for the timeline.
 * This creates a singleton pattern where all components share the same state.
 * This is intentional for this application to maintain consistent state across views.
 * For testing, call setWorldCups() to reset state between tests.
 */
const currentIndex = ref(0)
const hoveredIndex = ref<number | null>(null)
const viewMode = ref<'timeline' | 'fullscreen'>('timeline')
const worldCups = ref<WorldCup[]>([])

export function useTimeline() {
  const currentWorldCup = computed(() => worldCups.value[currentIndex.value])

  const displayWorldCup = computed(() => {
    if (hoveredIndex.value !== null) {
      return worldCups.value[hoveredIndex.value]
    }
    return currentWorldCup.value
  })

  const hasNext = computed(() => currentIndex.value < worldCups.value.length - 1)
  const hasPrev = computed(() => currentIndex.value > 0)

  function setWorldCups(data: WorldCup[]) {
    worldCups.value = data.sort((a, b) => a.year - b.year)
  }

  function selectByYear(year: number) {
    const index = worldCups.value.findIndex(wc => wc.year === year)
    if (index !== -1) {
      currentIndex.value = index
    }
  }

  function setHoveredIndex(index: number | null) {
    hoveredIndex.value = index
  }

  function selectIndex(index: number) {
    currentIndex.value = index
    hoveredIndex.value = null
  }

  function next() {
    if (hasNext.value) {
      currentIndex.value++
      hoveredIndex.value = null
    }
  }

  function prev() {
    if (hasPrev.value) {
      currentIndex.value--
      hoveredIndex.value = null
    }
  }

  function goToFirst() {
    currentIndex.value = 0
  }

  function goToLast() {
    currentIndex.value = worldCups.value.length - 1
  }

  function openFullscreen(index?: number) {
    if (index !== undefined) {
      currentIndex.value = index
    }
    viewMode.value = 'fullscreen'
  }

  function closeFullscreen() {
    viewMode.value = 'timeline'
  }

  function toggleFullscreen(index?: number) {
    if (viewMode.value === 'timeline') {
      openFullscreen(index)
    } else {
      closeFullscreen()
    }
  }

  return {
    currentIndex,
    hoveredIndex,
    viewMode,
    worldCups,
    currentWorldCup,
    displayWorldCup,
    hasNext,
    hasPrev,
    setWorldCups,
    selectByYear,
    setHoveredIndex,
    selectIndex,
    next,
    prev,
    goToFirst,
    goToLast,
    openFullscreen,
    closeFullscreen,
    toggleFullscreen,
  }
}
