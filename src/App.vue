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
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-wc-night via-transparent to-wc-night opacity-50" />
      <div class="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-wc-accent/15 rounded-full blur-[150px] animate-pulse-slow" />
      <div
        class="absolute bottom-[-30%] right-[-20%] w-[70%] h-[70%] bg-wc-ucl-blue/20 rounded-full blur-[150px] animate-pulse-slow"
        style="animation-delay: 1s;"
      />
    </div>

    <!-- Compact Header -->
    <header class="relative z-20 px-6 py-3 flex items-center justify-between border-b border-wc-ucl-blue/20 bg-wc-ucl-dark/60 backdrop-blur-sm">
      <div class="flex items-center gap-3">
        <div class="trophy-glow">
          <img
            src="/images/FIFA_World_Cup_Icon_(Campionato_mondiale_di_calcio).svg"
            alt="World Cup Trophy"
            class="h-8 w-auto object-contain"
          >
        </div>
        <div>
          <h1 class="font-display text-xl md:text-2xl tracking-wider text-wc-cream">
            WORLD CUP TIMELINE
          </h1>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <!-- Current selection indicator -->
        <div class="hidden sm:flex items-center gap-2 text-sm">
          <span class="text-wc-cream/40">Selected:</span>
          <span class="font-display text-lg text-wc-accent">{{ displayWorldCup?.year }}</span>
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
    <main class="relative z-10 flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
      <!-- Left: Large Featured Card -->
      <div class="lg:w-1/2 xl:w-2/5 p-4 lg:p-6 flex flex-col lg:justify-center flex-shrink-0">
        <div class="featured-card relative overflow-hidden">
          <!-- Background glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-wc-accent/10 via-transparent to-wc-ocean/10" />

          <!-- Content -->
          <div class="relative p-4 lg:p-6 xl:p-8">
            <!-- Year with Logo positioned top right -->
            <div class="relative mb-3 lg:mb-6">
              <span class="font-display text-5xl lg:text-6xl xl:text-7xl text-wc-accent leading-none transition-all duration-200">{{ displayWorldCup?.year }}</span>
              <!-- Logo - positioned top right -->
              <div
                v-if="displayWorldCup?.logo"
                class="absolute -top-1 right-0 flex-shrink-0 w-14 h-14 lg:w-20 lg:h-20 xl:w-28 xl:h-28 bg-white rounded-lg lg:rounded-xl p-1 lg:p-2 flex items-center justify-center shadow-lg"
              >
                <img
                  :src="displayWorldCup.logo"
                  :alt="`${displayWorldCup.year} World Cup logo`"
                  class="max-w-full max-h-full object-contain"
                >
              </div>
            </div>

            <!-- Host -->
            <div class="mb-3 lg:mb-6">
              <p class="text-wc-cream/50 text-xs lg:text-sm uppercase tracking-wider mb-0.5 lg:mb-1">
                Hosted by
              </p>
              <p class="text-xl lg:text-2xl xl:text-3xl font-semibold text-wc-cream transition-all duration-200">
                {{ displayWorldCup?.hostCountry }}
              </p>
            </div>

            <!-- Winner -->
            <div class="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-wc-ucl-dark/60 rounded-xl border border-wc-ucl-blue/30 transition-all duration-200">
              <span class="text-4xl lg:text-5xl transition-all duration-200">{{ displayWorldCup?.winner.flag }}</span>
              <div class="flex-1">
                <p class="text-wc-gold/70 text-xs uppercase tracking-wider">
                  Champions
                </p>
                <p class="text-lg lg:text-xl xl:text-2xl font-semibold text-wc-cream transition-all duration-200">
                  {{ displayWorldCup?.winner.country }}
                </p>
                <p
                  v-if="displayWorldCup?.winner.score"
                  class="font-display text-2xl lg:text-3xl text-wc-gold transition-all duration-200"
                >
                  {{ displayWorldCup.winner.score }}
                </p>
              </div>
            </div>

            <!-- Runner up -->
            <div
              v-if="displayWorldCup?.runnerUp"
              class="mt-3 lg:mt-4 flex items-center gap-2 lg:gap-3 text-wc-cream/60 transition-all duration-200"
            >
              <span class="text-xl lg:text-2xl">{{ displayWorldCup.runnerUp.flag }}</span>
              <span class="text-xs lg:text-sm">Runner-up: {{ displayWorldCup.runnerUp.country }}</span>
            </div>

            <!-- Navigation -->
            <div class="flex items-center justify-between mt-4 lg:mt-8 pt-3 lg:pt-4 border-t border-white/10">
              <button
                :disabled="!hasPrev"
                class="nav-arrow"
                @click="prev"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div class="text-wc-cream/40 text-xs">
                {{ currentIndex + 1 }} / {{ worldCups.length }}
              </div>

              <button
                :disabled="!hasNext"
                class="nav-arrow"
                @click="next"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Timeline + Info -->
      <div class="lg:w-1/2 xl:w-3/5 flex flex-col border-l border-white/5 min-h-0">
        <!-- Timeline -->
        <div class="flex-1 overflow-y-auto lg:overflow-hidden min-h-0">
          <Timeline />
        </div>

        <!-- Quick Info Bar - Hidden for now -->
      </div>
    </main>

    <!-- Detail View Overlay -->
    <Transition name="fade">
      <DetailView
        v-if="viewMode === 'fullscreen'"
        @close="closeFullscreen"
      />
    </Transition>
  </div>
</template>

<style scoped>
.app-background {
  background:
    radial-gradient(ellipse at 30% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
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
