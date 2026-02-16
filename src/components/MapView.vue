<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue'
import L from 'leaflet'
import type { HostCity } from '../types/world-cup'

// Constants
const MAP_INIT_DELAY_MS = 100 // Delay to ensure container is visible before initializing Leaflet
const TILE_LOAD_TIMEOUT_MS = 10000 // Timeout for tile loading fallback

const props = defineProps<{
  cities: HostCity[]
}>()

const mapContainer = ref<HTMLDivElement | null>(null)
const mapError = ref(false)
let map: L.Map | null = null
let markers: L.Marker[] = []
let isInitialized = false

// Custom UCL blue marker icon
const uclIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div class="marker-inner">
      <svg class="marker-svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      </svg>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
})

// Primary and fallback tile providers
const tileProviders = [
  {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    options: { maxZoom: 19 }
  },
  {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: { maxZoom: 18 }
  }
]

function initMap() {
  if (!mapContainer.value || isInitialized) return

  try {
    // Initialize map
    map = L.map(mapContainer.value, {
      center: [20, 0],
      zoom: 2,
      zoomControl: true,
      attributionControl: false,
    })

    // Add tile layer with error handling
    addTileLayerWithFallback()

    isInitialized = true
    mapError.value = false

    // Fix map rendering after it's visible
    nextTick(() => {
      if (map) {
        map.invalidateSize()
        updateMarkers()
      }
    })
  } catch {
    mapError.value = true
    console.error('Failed to initialize map')
  }
}

function addTileLayerWithFallback(providerIndex = 0) {
  if (!map || providerIndex >= tileProviders.length) {
    mapError.value = true
    return
  }

  const provider = tileProviders[providerIndex]
  const tileLayer = L.tileLayer(provider.url, provider.options)

  // Set up error handling for tile loading
  const timeoutId = setTimeout(() => {
    if (!isInitialized) {
      tileLayer.remove()
      addTileLayerWithFallback(providerIndex + 1)
    }
  }, TILE_LOAD_TIMEOUT_MS)

  tileLayer.on('load', () => {
    clearTimeout(timeoutId)
  })

  tileLayer.on('tileerror', () => {
    clearTimeout(timeoutId)
    tileLayer.remove()
    addTileLayerWithFallback(providerIndex + 1)
  })

  tileLayer.addTo(map)
}

function updateMarkers() {
  if (!map) return

  // Clear existing markers
  markers.forEach(marker => marker.remove())
  markers = []

  if (props.cities.length === 0) return

  // Add markers for each city with null checks
  const bounds: L.LatLngBoundsExpression = []

  props.cities.forEach(city => {
    if (!city.coordinates || city.coordinates.length < 2) return

    const [lat, lng] = city.coordinates
    const marker = L.marker([lat, lng], { icon: uclIcon })
      .addTo(map!)
      .bindPopup(`
        <div class="map-popup">
          <p class="map-popup-title">${city.name}</p>
          ${city.stadium ? `<p class="map-popup-stadium">${city.stadium}</p>` : ''}
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
  setTimeout(() => {
    initMap()
  }, MAP_INIT_DELAY_MS)
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
      v-if="mapError"
      class="w-full h-48 md:h-56 rounded-lg flex items-center justify-center bg-wc-ucl-dark/50"
    >
      <p class="text-wc-cream/50 text-sm">
        Map unavailable
      </p>
    </div>
    <div
      v-else
      ref="mapContainer"
      class="w-full h-48 md:h-56 rounded-lg"
    />
  </div>
</template>

<style>
.custom-marker {
  background: transparent;
  border: none;
}

.custom-marker .marker-inner {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B6B, #003399);
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: markerPulse 2s ease-in-out infinite;
}

.custom-marker .marker-svg {
  width: 12px;
  height: 12px;
  color: white;
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

.map-popup {
  padding: 8px;
}

.map-popup-title {
  font-weight: 600;
  color: #FF8E8E;
  margin: 0;
}

.map-popup-stadium {
  font-size: 12px;
  color: rgba(247, 243, 233, 0.7);
  margin-top: 4px;
}
</style>
