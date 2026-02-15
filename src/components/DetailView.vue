<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTimeline } from '../composables/useTimeline'
import MapView from './MapView.vue'

const emit = defineEmits<{
  close: []
}>()

const { currentWorldCup, hasNext, hasPrev, next, prev, closeFullscreen } = useTimeline()

const overlayRef = ref<HTMLElement | null>(null)

function handleClose() {
  closeFullscreen()
  emit('close')
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === overlayRef.value) {
    handleClose()
  }
}

// Compute host cities for the map
const mapCities = computed(() => {
  if (!currentWorldCup.value) return []
  return currentWorldCup.value.hostCities
})
</script>

<template>
  <div
    ref="overlayRef"
    @click="handleBackdropClick"
    class="detail-overlay detail-enter"
    role="dialog"
    aria-modal="true"
  >
    <div class="h-full flex flex-col items-center justify-center p-4 md:p-6">
      <div class="max-w-6xl mx-auto w-full flex-1 flex flex-col min-h-0">
        <!-- Close Button -->
        <button
          @click="handleClose"
          class="fixed top-4 right-4 nav-arrow z-50"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Navigation -->
        <div class="flex justify-between items-center mb-4 flex-shrink-0">
          <button
            @click="prev"
            :disabled="!hasPrev"
            class="nav-arrow"
            aria-label="Previous World Cup"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Year indicator in nav -->
          <div class="font-display text-2xl text-wc-gold/60 tracking-widest">
            {{ currentWorldCup?.year }}
          </div>

          <button
            @click="next"
            :disabled="!hasNext"
            class="nav-arrow"
            aria-label="Next World Cup"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Main Content -->
        <div v-if="currentWorldCup" class="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 min-h-0 overflow-hidden">
          <!-- Left Column - Year & Winner -->
          <div class="flex flex-col gap-4 min-h-0">
            <!-- Logo & Host Country Card - Compact -->
            <div class="glass-card p-4 relative flex-shrink-0">
              <!-- Year with Logo positioned top right -->
              <div class="relative mb-3">
                <span class="font-display text-4xl text-wc-coral leading-none">{{ currentWorldCup.year }}</span>
                <!-- Logo - positioned top right -->
                <div v-if="currentWorldCup.logo" class="absolute -top-1 right-0 w-14 h-14 bg-white rounded-lg p-1 flex items-center justify-center shadow">
                  <img
                    :src="currentWorldCup.logo"
                    :alt="`${currentWorldCup.year} World Cup logo`"
                    class="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <!-- Host -->
              <div>
                <p class="text-wc-cream/50 text-xs uppercase tracking-wider mb-0.5">Hosted by</p>
                <p class="text-lg font-semibold text-wc-cream">{{ currentWorldCup.hostCountry }}</p>
              </div>
            </div>

            <!-- Winner -->
            <div class="glass-card p-4 flex-shrink-0">
              <h3 class="text-wc-gold/60 text-xs uppercase tracking-wider mb-3">Champions</h3>
              <div class="flex items-center">
                <span class="winner-flag text-3xl">{{ currentWorldCup.winner.flag }}</span>
                <div>
                  <p class="text-xl font-semibold text-wc-cream">{{ currentWorldCup.winner.country }}</p>
                  <p v-if="currentWorldCup.winner.score" class="score-display text-xl">{{ currentWorldCup.winner.score }}</p>
                </div>
              </div>
              <div v-if="currentWorldCup.runnerUp" class="mt-3 pt-3 border-t border-wc-gold/10">
                <p class="text-wc-cream/50 text-xs">vs</p>
                <div class="flex items-center mt-1">
                  <span class="text-xl mr-2">{{ currentWorldCup.runnerUp.flag }}</span>
                  <span class="text-wc-cream/70 text-sm">{{ currentWorldCup.runnerUp.country }}</span>
                </div>
              </div>
            </div>

            <!-- Fun Facts -->
            <div v-if="currentWorldCup.funFacts?.length" class="glass-card p-4 flex-1 flex flex-col min-h-0">
              <h3 class="text-wc-gold/60 text-xs uppercase tracking-wider mb-3 flex-shrink-0">Fun Facts</h3>
              <ul class="space-y-2 overflow-y-auto scrollbar-thin flex-1 min-h-0 pr-1">
                <li
                  v-for="(fact, i) in currentWorldCup.funFacts"
                  :key="i"
                  class="flex items-start text-wc-cream/70 text-sm"
                >
                  <span class="fun-fact-bullet mt-1.5"></span>
                  <span>{{ fact }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Middle Column - Map & Venues -->
          <div class="flex flex-col gap-4 min-h-0">
            <div class="glass-card p-3 flex-shrink-0">
              <h3 class="text-wc-gold/60 text-xs uppercase tracking-wider mb-2 px-1">Host Cities</h3>
              <MapView :cities="mapCities" />
            </div>

            <!-- Venues List - Improved -->
            <div class="glass-card p-4 flex-1 flex flex-col min-h-0">
              <div class="flex items-center justify-between mb-3 flex-shrink-0">
                <h3 class="text-wc-gold/60 text-xs uppercase tracking-wider">Venues</h3>
                <span class="text-wc-cream/30 text-xs">{{ currentWorldCup.hostCities.length }} {{ currentWorldCup.hostCities.length === 1 ? 'city' : 'cities' }}</span>
              </div>
              <div class="space-y-3 overflow-y-auto scrollbar-thin flex-1 min-h-0 pr-1">
                <div
                  v-for="(city, idx) in currentWorldCup.hostCities"
                  :key="city.name"
                  class="venue-card group relative p-3 rounded-xl bg-wc-ucl-dark/40 border border-wc-ucl-blue/20 hover:border-wc-coral/30 transition-all duration-200"
                >
                  <!-- Index number -->
                  <div class="absolute -left-1 -top-1 w-5 h-5 rounded-full bg-wc-ucl-blue flex items-center justify-center text-[10px] font-bold text-white">
                    {{ idx + 1 }}
                  </div>

                  <div class="flex items-start gap-3">
                    <!-- Stadium icon -->
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-wc-ucl-navy/50 flex items-center justify-center">
                      <svg class="w-5 h-5 text-wc-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>

                    <!-- City info -->
                    <div class="flex-1 min-w-0">
                      <p class="text-wc-cream font-semibold text-sm truncate">{{ city.name }}</p>
                      <p v-if="city.stadium" class="text-wc-cream/50 text-xs truncate mt-0.5">{{ city.stadium }}</p>
                    </div>

                    <!-- Map link -->
                    <a
                      v-if="city.googleMapsUrl"
                      :href="city.googleMapsUrl"
                      target="_blank"
                      rel="noopener"
                      class="flex-shrink-0 w-8 h-8 rounded-lg bg-wc-ucl-navy/50 hover:bg-wc-coral/20 flex items-center justify-center text-wc-cream/40 hover:text-wc-coral transition-all"
                      title="View on Google Maps"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Tournament -->
          <div class="glass-card p-4 flex flex-col min-h-0">
            <h3 class="text-wc-gold/60 text-xs uppercase tracking-wider mb-3 flex-shrink-0">Tournament</h3>
            <p class="text-wc-cream/80 leading-relaxed text-sm overflow-y-auto scrollbar-thin flex-1 min-h-0 pr-1">{{ currentWorldCup.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(255, 107, 107, 0.15);
  border-radius: 3px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 107, 107, 0.3);
}
</style>
