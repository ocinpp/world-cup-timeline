<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue'
import L from 'leaflet'
import type { HostCity } from '../types/world-cup'

const props = defineProps<{
  cities: HostCity[]
}>()

const mapContainer = ref<HTMLDivElement | null>(null)
let map: L.Map | null = null
let markers: L.Marker[] = []
let isInitialized = false

// Custom UCL blue marker icon
const uclIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#FF6B6B,#003399);border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
      <svg style="width:12px;height:12px;color:white;" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      </svg>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
})

function initMap() {
  if (!mapContainer.value || isInitialized) return

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

  isInitialized = true

  // Fix map rendering after it's visible
  nextTick(() => {
    if (map) {
      map.invalidateSize()
      updateMarkers()
    }
  })
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
    const marker = L.marker([lat, lng], { icon: uclIcon })
      .addTo(map!)
      .bindPopup(`
        <div style="padding:8px;">
          <p style="font-weight:600;color:#FF8E8E;">${city.name}</p>
          ${city.stadium ? `<p style="font-size:12px;color:rgba(247,243,233,0.7);margin-top:4px;">${city.stadium}</p>` : ''}
        </div>
      `)

    markers.push(marker)
    bounds.push([lat, lng])
  })

  // Fit map to bounds
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 6 })
  }
}

// Watch for city changes
watch(() => props.cities, () => {
  nextTick(() => {
    if (map) {
      map.invalidateSize()
    }
    updateMarkers()
  })
}, { deep: true })

onMounted(() => {
  // Small delay to ensure container is visible
  setTimeout(() => {
    initMap()
  }, 100)
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
    isInitialized = false
  }
})
</script>

<template>
  <div class="map-container">
    <div
      ref="mapContainer"
      class="w-full h-48 md:h-56 rounded-lg"
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
    box-shadow: 0 0 0 rgba(255, 107, 107, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 107, 107, 0.6);
  }
}

.leaflet-popup-content-wrapper {
  background: rgba(10, 22, 40, 0.95) !important;
  border: 1px solid rgba(0, 51, 153, 0.4) !important;
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
