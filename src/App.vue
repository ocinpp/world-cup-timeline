<script setup lang="ts">
import { onMounted } from 'vue'
import { useTimeline } from './composables/useTimeline'
import { useNavigation } from './composables/useNavigation'
import { worldCups } from './data/world-cups'
import Timeline from './components/Timeline.vue'
import DetailView from './components/DetailView.vue'

const { setWorldCups, viewMode, closeFullscreen } = useTimeline()

useNavigation()

onMounted(() => {
  setWorldCups(worldCups)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-wc-night via-wc-pitch-dark to-wc-night relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-wc-gold/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-wc-pitch/20 rounded-full blur-3xl"></div>
    </div>

    <!-- Header -->
    <header class="relative z-10 pt-8 pb-6 px-8">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <!-- Trophy Icon -->
          <div class="trophy-glow">
            <svg class="w-10 h-10 text-wc-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V5H16C16.55 5 17 5.45 17 6V8C17 10.21 15.21 12 13 12H12.83C12.42 13.17 11.31 14 10 14C8.34 14 7 12.66 7 11V6C7 5.45 7.45 5 8 5H10V4C10 2.9 10.9 2 12 2ZM12 4C11.45 4 11 4.45 11 5V5H13V4C13 4.45 12.55 4 12 4ZM9 7V11C9 11.55 9.45 12 10 12C10.55 12 11 11.55 11 11V7H9ZM13 10C14.1 10 15 9.1 15 8V7H13V10ZM5 6H6V8H5C4.45 8 4 8.45 4 9V10C4 10.55 4.45 11 5 11H6.05C6.28 11.72 6.68 12.36 7.2 12.88C6.54 12.96 5.88 13 5.2 13C4.42 13 3.67 12.95 3 12.82C2.39 12.71 2 12.16 2 11.53V9C2 7.34 3.34 6 5 6ZM19 6C20.66 6 22 7.34 22 9V11.53C22 12.16 21.61 12.71 21 12.82C20.33 12.95 19.58 13 18.8 13C18.12 13 17.46 12.96 16.8 12.88C17.32 12.36 17.72 11.72 17.95 11H19C19.55 11 20 10.55 20 10V9C20 8.45 19.55 8 19 8H18V6H19ZM12 16C14.67 16 17.24 16.79 19.26 18.14C20.4 18.92 21 20.24 21 21.6V22H3V21.6C3 20.24 3.6 18.92 4.74 18.14C6.76 16.79 9.33 16 12 16Z"/>
            </svg>
          </div>
          <div>
            <h1 class="font-display text-3xl md:text-4xl tracking-wider text-wc-cream">
              WORLD CUP TIMELINE
            </h1>
            <p class="text-wc-gold/60 text-sm tracking-wide">1930 — 2022</p>
          </div>
        </div>

        <!-- Keyboard hints -->
        <div class="hidden md:flex items-center gap-4 text-wc-cream/40 text-xs">
          <span class="flex items-center gap-1">
            <kbd class="px-2 py-1 bg-wc-pitch/50 rounded border border-wc-gold/20">←</kbd>
            <kbd class="px-2 py-1 bg-wc-pitch/50 rounded border border-wc-gold/20">→</kbd>
            Navigate
          </span>
          <span class="flex items-center gap-1">
            <kbd class="px-2 py-1 bg-wc-pitch/50 rounded border border-wc-gold/20">Enter</kbd>
            Details
          </span>
          <span class="flex items-center gap-1">
            <kbd class="px-2 py-1 bg-wc-pitch/50 rounded border border-wc-gold/20">Esc</kbd>
            Close
          </span>
        </div>
      </div>
    </header>

    <!-- Main Timeline -->
    <main class="relative z-10">
      <Timeline />
    </main>

    <!-- Detail View Overlay -->
    <Transition name="fade">
      <DetailView v-if="viewMode === 'fullscreen'" @close="closeFullscreen" />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
