import { ref, computed } from 'vue'
import type { WorldCup } from '../types/world-cup'

const currentIndex = ref(0)
const viewMode = ref<'timeline' | 'fullscreen'>('timeline')
const worldCups = ref<WorldCup[]>([])

export function useTimeline() {
  const currentWorldCup = computed(() => worldCups.value[currentIndex.value])

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

  function next() {
    if (hasNext.value) {
      currentIndex.value++
    }
  }

  function prev() {
    if (hasPrev.value) {
      currentIndex.value--
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
    viewMode,
    worldCups,
    currentWorldCup,
    hasNext,
    hasPrev,
    setWorldCups,
    selectByYear,
    next,
    prev,
    goToFirst,
    goToLast,
    openFullscreen,
    closeFullscreen,
    toggleFullscreen,
  }
}
