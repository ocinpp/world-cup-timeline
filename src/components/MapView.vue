<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import L from 'leaflet'
import type { HostCity } from '../types/world-cup'

const props = defineProps<{
  cities: HostCity[]
}>()

const mapContainer = ref<HTMLDivElement | null>(null)
let map: L.Map | null = null
let markers: L.Marker[] = []

// Custom gold marker icon
const goldIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div class="w-6 h-6 rounded-full bg-wc-gold border-2 border-white shadow-lg flex items-center justify-center">
      <svg class="w-3 h-3 text-wc-pitch-dark" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      </svg>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
})

function initMap() {
  if (!mapContainer.value) return

  // Initialize map
  map = L.map(mapContainer.value, {
    center: [20, 0],
    zoom: 2,
    zoomControl: true,
    attributionControl: false,
  })

  // Add dark tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
  }).addTo(map)

  updateMarkers()
}

function updateMarkers() {
  if (!map) return

  // Clear existing markers
  markers.forEach(marker => marker.remove())
  markers = []

  if (props.cities.length === 0) return

  // Add markers for each city
  const bounds: L.LatLngBoundsExpression = []

  props.cities.forEach(city => {
    const [lat, lng] = city.coordinates
    const marker = L.marker([lat, lng], { icon: goldIcon })
      .addTo(map!)
      .bindPopup(`
        <div class="p-2">
          <p class="font-semibold text-wc-gold">${city.name}</p>
          ${city.stadium ? `<p class="text-sm text-wc-cream/70">${city.stadium}</p>` : ''}
        </div>
      `)

    markers.push(marker)
    bounds.push([lat, lng])
  })

  // Fit map to bounds
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 6 })
  }
}

// Watch for city changes
watch(() => props.cities, () => {
  updateMarkers()
}, { deep: true })

onMounted(() => {
  initMap()
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<template>
  <div class="map-container">
    <div
      ref="mapContainer"
      class="w-full h-64 md:h-80 rounded-lg"
    ></div>
  </div>
</template>

<style>
.custom-marker {
  background: transparent;
  border: none;
}

.custom-marker > div {
  animation: markerPulse 2s ease-in-out infinite;
}

@keyframes markerPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(201, 162, 39, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(201, 162, 39, 0.6);
  }
}

.leaflet-popup-content-wrapper {
  background: rgba(15, 20, 25, 0.95) !important;
  border: 1px solid rgba(201, 162, 39, 0.3) !important;
  border-radius: 8px !important;
}

.leaflet-popup-content {
  margin: 8px 12px !important;
  color: #F7F3E9 !important;
}

.leaflet-popup-tip {
  background: rgba(15, 20, 25, 0.95) !important;
}
</style>
