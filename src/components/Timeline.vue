<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useTimeline } from '../composables/useTimeline'

const { worldCups, currentIndex, openFullscreen, hasNext, hasPrev, next, prev } = useTimeline()

const timelineRef = ref<HTMLElement | null>(null)
const itemRefs = ref<Map<number, HTMLElement>>(new Map())

const progressWidth = computed(() => {
  if (worldCups.value.length === 0) return 0
  return ((currentIndex.value + 1) / worldCups.value.length) * 100
})

function scrollToItem(index: number) {
  const item = itemRefs.value.get(index)
  if (item && timelineRef.value) {
    const container = timelineRef.value
    const itemLeft = item.offsetLeft
    const itemWidth = item.offsetWidth
    const containerWidth = container.clientWidth

    container.scrollTo({
      left: itemLeft - containerWidth / 2 + itemWidth / 2,
      behavior: 'smooth'
    })
  }
}

function handleItemClick(index: number) {
  openFullscreen(index)
}

function setItemRef(el: HTMLElement | null, index: number) {
  if (el) {
    itemRefs.value.set(index, el)
  }
}

watch(currentIndex, (newIndex) => {
  scrollToItem(newIndex)
})

onMounted(() => {
  if (worldCups.value.length > 0) {
    setTimeout(() => scrollToItem(currentIndex.value), 100)
  }
})
</script>

<template>
  <div class="relative px-4 py-8">
    <!-- Navigation Arrows -->
    <button
      @click="prev"
      :disabled="!hasPrev"
      class="nav-arrow absolute left-4 top-1/2 -translate-y-1/2 z-20"
      aria-label="Previous"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="next"
      :disabled="!hasNext"
      class="nav-arrow absolute right-4 top-1/2 -translate-y-1/2 z-20"
      aria-label="Next"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Timeline Scroll Container -->
    <div
      ref="timelineRef"
      class="overflow-x-auto scrollbar-hide py-8 px-12"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      <div class="flex items-end gap-4 min-w-max px-4">
        <div
          v-for="(wc, index) in worldCups"
          :key="wc.year"
          :ref="(el) => setItemRef(el as HTMLElement, index)"
          @click="handleItemClick(index)"
          class="stagger-fade-in timeline-item group"
          :style="{ animationDelay: `${index * 0.03}s` }"
          :class="{ 'selected': index === currentIndex }"
        >
          <!-- Year Label -->
          <div
            class="year-badge mb-2 transition-colors duration-300"
            :class="index === currentIndex ? 'text-wc-gold' : 'text-wc-cream/60 group-hover:text-wc-gold/80'"
          >
            {{ wc.year }}
          </div>

          <!-- Thumbnail Card -->
          <div
            class="timeline-thumbnail relative"
            :class="{ 'active': index === currentIndex }"
          >
            <!-- Flag Background -->
            <div class="absolute inset-0 flex items-center justify-center text-4xl opacity-80">
              {{ wc.winner.flag }}
            </div>

            <!-- Selection Ring -->
            <div
              v-if="index === currentIndex"
              class="absolute -inset-1 rounded-full border-2 border-wc-gold animate-glow-pulse"
            ></div>
          </div>

          <!-- Winner Label -->
          <div class="mt-2 text-center max-w-[80px]">
            <p
              class="text-xs font-medium truncate transition-colors duration-300"
              :class="index === currentIndex ? 'text-wc-gold' : 'text-wc-cream/70'"
            >
              {{ wc.winner.country }}
            </p>
            <p class="text-[10px] text-wc-cream/40 truncate">{{ wc.hostCountry }}</p>
          </div>

          <!-- Connector Line -->
          <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-wc-gold/30 to-transparent"></div>
        </div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="mx-12 mt-4">
      <div class="h-1 bg-wc-pitch/50 rounded-full overflow-hidden">
        <div
          class="progress-line h-full"
          :style="{ width: `${progressWidth}%` }"
        ></div>
      </div>
      <div class="flex justify-between mt-2 text-xs text-wc-cream/40">
        <span>1930</span>
        <span class="text-wc-gold">{{ worldCups[currentIndex]?.year }}</span>
        <span>2022</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
