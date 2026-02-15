import { onMounted, onUnmounted } from 'vue'
import { useTimeline } from './useTimeline'

export function useNavigation() {
  const {
    next,
    prev,
    goToFirst,
    goToLast,
    openFullscreen,
    closeFullscreen,
    toggleFullscreen,
    viewMode,
  } = useTimeline()

  function handleKeydown(event: KeyboardEvent) {
    // Ignore if typing in an input
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      return
    }

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        prev()
        break
      case 'ArrowRight':
        event.preventDefault()
        next()
        break
      case 'Escape':
        event.preventDefault()
        if (viewMode.value === 'fullscreen') {
          closeFullscreen()
        }
        break
      case 'Enter':
        event.preventDefault()
        if (viewMode.value === 'timeline') {
          openFullscreen()
        }
        break
      case 'Home':
        event.preventDefault()
        goToFirst()
        break
      case 'End':
        event.preventDefault()
        goToLast()
        break
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    next,
    prev,
    goToFirst,
    goToLast,
    openFullscreen,
    closeFullscreen,
    toggleFullscreen,
  }
}
