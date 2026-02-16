import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useNavigation } from './useNavigation'
import { useTimeline } from './useTimeline'

// Mock the useTimeline module
vi.mock('./useTimeline', () => ({
  useTimeline: vi.fn(),
}))

// Helper to simulate keyboard events
function dispatchKeyEvent(key: string) {
  window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }))
}

describe('useNavigation', () => {
  let mockTimeline: {
    next: ReturnType<typeof vi.fn>
    prev: ReturnType<typeof vi.fn>
    openFullscreen: ReturnType<typeof vi.fn>
    closeFullscreen: ReturnType<typeof vi.fn>
    goToFirst: ReturnType<typeof vi.fn>
    goToLast: ReturnType<typeof vi.fn>
    toggleFullscreen: ReturnType<typeof vi.fn>
    viewMode: { value: string }
  }

  beforeEach(() => {
    mockTimeline = {
      next: vi.fn(),
      prev: vi.fn(),
      openFullscreen: vi.fn(),
      closeFullscreen: vi.fn(),
      goToFirst: vi.fn(),
      goToLast: vi.fn(),
      toggleFullscreen: vi.fn(),
      viewMode: { value: 'timeline' },
    }
    vi.mocked(useTimeline).mockReturnValue(mockTimeline as unknown as ReturnType<typeof useTimeline>)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call next on ArrowRight key press', () => {
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('ArrowRight')
    expect(mockTimeline.next).toHaveBeenCalled()

    navigation.stop()
  })

  it('should call prev on ArrowLeft key press', () => {
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('ArrowLeft')
    expect(mockTimeline.prev).toHaveBeenCalled()

    navigation.stop()
  })

  it('should call goToFirst on Home key press', () => {
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('Home')
    expect(mockTimeline.goToFirst).toHaveBeenCalled()

    navigation.stop()
  })

  it('should call goToLast on End key press', () => {
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('End')
    expect(mockTimeline.goToLast).toHaveBeenCalled()

    navigation.stop()
  })

  it('should call openFullscreen on Enter key press when in timeline mode', () => {
    mockTimeline.viewMode.value = 'timeline'
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('Enter')
    expect(mockTimeline.openFullscreen).toHaveBeenCalled()

    navigation.stop()
  })

  it('should call closeFullscreen on Escape key press when in fullscreen mode', () => {
    mockTimeline.viewMode.value = 'fullscreen'
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('Escape')
    expect(mockTimeline.closeFullscreen).toHaveBeenCalled()

    navigation.stop()
  })

  it('should not respond to key presses when typing in input', () => {
    const navigation = useNavigation()
    navigation.start()

    // Create an input element
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.focus()

    // Dispatch event with input as target
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true })
    Object.defineProperty(event, 'target', { value: input, enumerable: true })
    window.dispatchEvent(event)

    expect(mockTimeline.next).not.toHaveBeenCalled()

    document.body.removeChild(input)
    navigation.stop()
  })

  it('should stop listening after stop() is called', () => {
    const navigation = useNavigation()
    navigation.start()

    dispatchKeyEvent('ArrowRight')
    expect(mockTimeline.next).toHaveBeenCalledTimes(1)

    navigation.stop()

    dispatchKeyEvent('ArrowRight')
    expect(mockTimeline.next).toHaveBeenCalledTimes(1) // Still only 1, not 2
  })
})
