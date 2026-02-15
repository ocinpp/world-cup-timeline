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
    <div class="h-full overflow-y-auto p-4 md:p-8">
      <div class="max-w-6xl mx-auto">
        <!-- Close Button -->
        <button
          @click="handleClose"
          class="fixed top-6 right-6 nav-arrow z-50"
          aria-label="Close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Navigation -->
        <div class="flex justify-between items-center mb-6">
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
        <div v-if="currentWorldCup" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Left Column - Info -->
          <div class="space-y-6">
            <!-- Year & Host -->
            <div class="glass-card p-6 relative">
              <div class="corner-accent top-left"></div>
              <div class="corner-accent top-right"></div>
              <div class="corner-accent bottom-left"></div>
              <div class="corner-accent bottom-right"></div>

              <div class="text-center">
                <h2 class="font-display text-7xl md:text-8xl text-wc-gold tracking-wider">
                  {{ currentWorldCup.year }}
                </h2>
                <div class="host-badge mt-4">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ currentWorldCup.hostCountry }}
                </div>
              </div>
            </div>

            <!-- Winner -->
            <div class="glass-card p-6">
              <h3 class="text-wc-gold/60 text-sm uppercase tracking-wider mb-4">Champions</h3>
              <div class="flex items-center">
                <span class="winner-flag">{{ currentWorldCup.winner.flag }}</span>
                <div>
                  <p class="text-2xl font-semibold text-wc-cream">{{ currentWorldCup.winner.country }}</p>
                  <p v-if="currentWorldCup.winner.score" class="score-display">{{ currentWorldCup.winner.score }}</p>
                </div>
              </div>
              <div v-if="currentWorldCup.runnerUp" class="mt-4 pt-4 border-t border-wc-gold/10">
                <p class="text-wc-cream/50 text-sm">vs</p>
                <div class="flex items-center mt-2">
                  <span class="text-2xl mr-2">{{ currentWorldCup.runnerUp.flag }}</span>
                  <span class="text-wc-cream/70">{{ currentWorldCup.runnerUp.country }}</span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="glass-card p-6">
              <h3 class="text-wc-gold/60 text-sm uppercase tracking-wider mb-4">Tournament</h3>
              <p class="text-wc-cream/80 leading-relaxed">{{ currentWorldCup.description }}</p>
            </div>

            <!-- Fun Facts -->
            <div v-if="currentWorldCup.funFacts?.length" class="glass-card p-6">
              <h3 class="text-wc-gold/60 text-sm uppercase tracking-wider mb-4">Fun Facts</h3>
              <ul class="space-y-3">
                <li
                  v-for="(fact, i) in currentWorldCup.funFacts"
                  :key="i"
                  class="flex items-start text-wc-cream/70"
                >
                  <span class="fun-fact-bullet mt-2"></span>
                  <span>{{ fact }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column - Map -->
          <div class="space-y-6">
            <div class="glass-card p-4">
              <h3 class="text-wc-gold/60 text-sm uppercase tracking-wider mb-4 px-2">Host Cities</h3>
              <MapView :cities="mapCities" />
            </div>

            <!-- Host Cities List -->
            <div class="glass-card p-6">
              <h3 class="text-wc-gold/60 text-sm uppercase tracking-wider mb-4">Venues</h3>
              <div class="space-y-3">
                <div
                  v-for="city in currentWorldCup.hostCities"
                  :key="city.name"
                  class="flex items-center justify-between p-3 bg-wc-pitch/20 rounded-lg"
                >
                  <div>
                    <p class="text-wc-cream font-medium">{{ city.name }}</p>
                    <p v-if="city.stadium" class="text-wc-cream/50 text-sm">{{ city.stadium }}</p>
                  </div>
                  <a
                    v-if="city.googleMapsUrl"
                    :href="city.googleMapsUrl"
                    target="_blank"
                    rel="noopener"
                    class="text-wc-gold/60 hover:text-wc-gold transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
