<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useTimeline } from '../composables/useTimeline'

const { worldCups, currentIndex, hoveredIndex, setHoveredIndex, selectIndex, openFullscreen } = useTimeline()

const timelineRef = ref<HTMLElement | null>(null)
const itemRefs = ref<Map<number, HTMLElement>>(new Map())

function scrollToItem(index: number) {
  const item = itemRefs.value.get(index)
  if (item && timelineRef.value) {
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
}

function handleMouseEnter(index: number) {
  setHoveredIndex(index)
}

function handleMouseLeave() {
  // Do nothing - keep showing the hovered tournament
}

function handleClick(index: number) {
  selectIndex(index)
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
  <div class="h-full flex flex-col">
    <!-- Section Title -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-white/5">
      <h2 class="text-wc-cream/50 text-xs uppercase tracking-wider font-medium">All Tournaments</h2>
      <span class="text-wc-cream/30 text-xs">{{ worldCups.length }} World Cups</span>
    </div>

    <!-- Scrollable List -->
    <div
      ref="timelineRef"
      class="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin"
    >
      <div
        v-for="(wc, index) in worldCups"
        :key="wc.year"
        :ref="(el) => setItemRef(el as HTMLElement, index)"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
        @click="handleClick(index)"
        class="timeline-card group cursor-pointer"
        :class="{
          'selected': index === currentIndex,
          'hovered': index === hoveredIndex
        }"
      >
        <div class="flex items-center gap-4 p-3 rounded-xl transition-all duration-200"
          :class="index === currentIndex
            ? 'bg-wc-coral/15 border border-wc-coral/30'
            : index === hoveredIndex
              ? 'bg-wc-ucl-navy/40 border border-wc-gold/30'
              : 'bg-wc-ucl-dark/40 border border-transparent hover:bg-wc-ucl-navy/30'"
        >
          <!-- Logo or Flag -->
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-lg overflow-hidden">
            <img
              v-if="wc.logo"
              :src="wc.logo"
              :alt="`${wc.year} logo`"
              class="max-w-full max-h-full object-contain p-1"
            />
            <span v-else class="text-2xl">{{ wc.winner.flag }}</span>
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline gap-2">
              <span
                class="font-display text-xl transition-colors"
                :class="index === currentIndex ? 'text-wc-coral' : index === hoveredIndex ? 'text-wc-gold' : 'text-wc-cream/70'"
              >
                {{ wc.year }}
              </span>
              <span class="text-wc-cream/40 text-sm">{{ wc.hostCountry }}</span>
            </div>
            <p
              class="text-sm truncate transition-colors"
              :class="index === currentIndex ? 'text-wc-cream/80' : 'text-wc-cream/50'"
            >
              🏆 {{ wc.winner.country }}
              <span v-if="wc.winner.score" class="text-wc-gold/70 ml-1">{{ wc.winner.score }}</span>
            </p>
          </div>

          <!-- Arrow indicator -->
          <div
            class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            :class="index === currentIndex || index === hoveredIndex
              ? 'bg-wc-coral/20 text-wc-coral'
              : 'bg-transparent text-transparent group-hover:bg-wc-ucl-navy/50 group-hover:text-wc-cream/30'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
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
