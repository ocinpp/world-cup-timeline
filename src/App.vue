<script setup lang="ts">
import { onMounted } from 'vue'
import { useTimeline } from './composables/useTimeline'
import { useNavigation } from './composables/useNavigation'
import { worldCups as worldCupsData } from './data/world-cups'
import Timeline from './components/Timeline.vue'
import DetailView from './components/DetailView.vue'

const { setWorldCups, viewMode, closeFullscreen, displayWorldCup, currentIndex, worldCups, next, prev, hasNext, hasPrev } = useTimeline()

useNavigation()

onMounted(() => {
  setWorldCups(worldCupsData)
})
</script>

<template>
  <div class="h-screen relative overflow-hidden app-background flex flex-col">
    <!-- Decorative background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-wc-night via-transparent to-wc-night opacity-50"></div>
      <div class="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-wc-coral/15 rounded-full blur-[150px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-30%] right-[-20%] w-[70%] h-[70%] bg-wc-ucl-blue/20 rounded-full blur-[150px] animate-pulse-slow" style="animation-delay: 1s;"></div>
    </div>

    <!-- Compact Header -->
    <header class="relative z-20 px-6 py-3 flex items-center justify-between border-b border-wc-ucl-blue/20 bg-wc-ucl-dark/60 backdrop-blur-sm">
      <div class="flex items-center gap-3">
        <div class="trophy-glow">
          <svg class="w-7 h-7 text-wc-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4V5H16C16.55 5 17 5.45 17 6V8C17 10.21 15.21 12 13 12H12.83C12.42 13.17 11.31 14 10 14C8.34 14 7 12.66 7 11V6C7 5.45 7.45 5 8 5H10V4C10 2.9 10.9 2 12 2ZM12 4C11.45 4 11 4.45 11 5V5H13V4C13 4.45 12.55 4 12 4ZM9 7V11C9 11.55 9.45 12 10 12C10.55 12 11 11.55 11 11V7H9ZM13 10C14.1 10 15 9.1 15 8V7H13V10ZM5 6H6V8H5C4.45 8 4 8.45 4 9V10C4 10.55 4.45 11 5 11H6.05C6.28 11.72 6.68 12.36 7.2 12.88C6.54 12.96 5.88 13 5.2 13C4.42 13 3.67 12.95 3 12.82C2.39 12.71 2 12.16 2 11.53V9C2 7.34 3.34 6 5 6ZM19 6C20.66 6 22 7.34 22 9V11.53C22 12.16 21.61 12.71 21 12.82C20.33 12.95 19.58 13 18.8 13C18.12 13 17.46 12.96 16.8 12.88C17.32 12.36 17.72 11.72 17.95 11H19C19.55 11 20 10.55 20 10V9C20 8.45 19.55 8 19 8H18V6H19ZM12 16C14.67 16 17.24 16.79 19.26 18.14C20.4 18.92 21 20.24 21 21.6V22H3V21.6C3 20.24 3.6 18.92 4.74 18.14C6.76 16.79 9.33 16 12 16Z"/>
          </svg>
        </div>
        <div>
          <h1 class="font-display text-xl md:text-2xl tracking-wider text-wc-cream">WORLD CUP TIMELINE</h1>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <!-- Current selection indicator -->
        <div class="hidden sm:flex items-center gap-2 text-sm">
          <span class="text-wc-cream/40">Selected:</span>
          <span class="font-display text-lg text-wc-coral">{{ displayWorldCup?.year }}</span>
          <span class="text-wc-cream/60">{{ displayWorldCup?.hostCountry }}</span>
        </div>

        <!-- Keyboard hints (compact) -->
        <div class="hidden md:flex items-center gap-2 text-wc-cream/40 text-xs">
          <kbd class="px-1.5 py-0.5 bg-wc-pitch/50 rounded text-[10px]">←→</kbd>
          <kbd class="px-1.5 py-0.5 bg-wc-pitch/50 rounded text-[10px]">Enter</kbd>
        </div>
      </div>
    </header>

    <!-- Main Content Area - Split Layout -->
    <main class="relative z-10 flex-1 flex flex-col lg:flex-row overflow-hidden">
      <!-- Left: Large Featured Card -->
      <div class="lg:w-1/2 xl:w-2/5 p-4 lg:p-6 flex flex-col justify-center">
        <div class="featured-card relative overflow-hidden">
          <!-- Background glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-wc-coral/10 via-transparent to-wc-ocean/10"></div>

          <!-- Content -->
          <div class="relative p-6 lg:p-8">
            <!-- Year with Logo positioned top right -->
            <div class="relative mb-6">
              <span class="font-display text-6xl lg:text-7xl text-wc-coral leading-none transition-all duration-200">{{ displayWorldCup?.year }}</span>
              <!-- Logo - positioned top right -->
              <div v-if="displayWorldCup?.logo" class="absolute -top-2 right-0 flex-shrink-0 w-20 h-20 lg:w-28 lg:h-28 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
                <img
                  :src="displayWorldCup.logo"
                  :alt="`${displayWorldCup.year} World Cup logo`"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <!-- Host -->
            <div class="mb-6">
              <p class="text-wc-cream/50 text-sm uppercase tracking-wider mb-1">Hosted by</p>
              <p class="text-2xl lg:text-3xl font-semibold text-wc-cream transition-all duration-200">{{ displayWorldCup?.hostCountry }}</p>
            </div>

            <!-- Winner -->
            <div class="flex items-center gap-4 p-4 bg-wc-ucl-dark/60 rounded-xl border border-wc-ucl-blue/30 transition-all duration-200">
              <span class="text-5xl transition-all duration-200">{{ displayWorldCup?.winner.flag }}</span>
              <div class="flex-1">
                <p class="text-wc-gold/70 text-xs uppercase tracking-wider">Champions</p>
                <p class="text-xl lg:text-2xl font-semibold text-wc-cream transition-all duration-200">{{ displayWorldCup?.winner.country }}</p>
                <p v-if="displayWorldCup?.winner.score" class="font-display text-3xl text-wc-gold transition-all duration-200">{{ displayWorldCup.winner.score }}</p>
              </div>
            </div>

            <!-- Runner up -->
            <div v-if="displayWorldCup?.runnerUp" class="mt-4 flex items-center gap-3 text-wc-cream/60 transition-all duration-200">
              <span class="text-2xl">{{ displayWorldCup.runnerUp.flag }}</span>
              <span class="text-sm">Runner-up: {{ displayWorldCup.runnerUp.country }}</span>
            </div>

            <!-- Navigation -->
            <div class="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
              <button
                @click="prev"
                :disabled="!hasPrev"
                class="nav-arrow"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div class="text-wc-cream/40 text-xs">
                {{ currentIndex + 1 }} / {{ worldCups.length }}
              </div>

              <button
                @click="next"
                :disabled="!hasNext"
                class="nav-arrow"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Timeline + Info -->
      <div class="lg:w-1/2 xl:w-3/5 flex flex-col border-l border-white/5">
        <!-- Timeline -->
        <div class="flex-1 overflow-hidden">
          <Timeline />
        </div>

        <!-- Quick Info Bar - Hidden for now -->
      </div>
    </main>

    <!-- Detail View Overlay -->
    <Transition name="fade">
      <DetailView v-if="viewMode === 'fullscreen'" @close="closeFullscreen" />
    </Transition>
  </div>
</template>

<style scoped>
.app-background {
  background:
    radial-gradient(ellipse at 30% 0%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 100%, rgba(0, 51, 153, 0.15) 0%, transparent 50%),
    linear-gradient(180deg, #0A0E14 0%, #0A1628 50%, #0A0E14 100%);
}

.featured-card {
  background: linear-gradient(145deg, rgba(0, 51, 153, 0.35) 0%, rgba(10, 22, 40, 0.85) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 51, 153, 0.4);
  border-radius: 24px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 0 60px rgba(0, 51, 153, 0.15);
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.05); }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<style scoped>
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
