<script setup lang="ts">
// PricingFilter.vue
// Dual‑range slider for price filter

const props = defineProps<{
  minPrice: number
  maxPrice: number
}>()
const emits = defineEmits<{
  (e: 'update:minPrice', val: number): void
  (e: 'update:maxPrice', val: number): void
}>()

function onMinChange(e: Event) {
  emits('update:minPrice', +(e.target as HTMLInputElement).value)
}
function onMaxChange(e: Event) {
  emits('update:maxPrice', +(e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="sidebar-item">
    <h6 class="text-black fw-bold fs-md-15">Pricing</h6>
    <div class="pricing-filter" id="pricing-filter">
      <div class="range-slider">
        <input
          type="range"
          class="min-price"
          min="10"
          :value="props.minPrice"
          @change="onMinChange"
        />
        <input
          type="range"
          class="max-price"
          max="6000"
          :value="props.maxPrice"
          @change="onMaxChange"
        />
      </div>
      <div class="price-content d-flex align-items-center justify-content-between">
        <span class="d-block text-black fw-medium fs-13"> ${{ props.minPrice }} </span>
        <span class="d-block text-black fw-medium fs-13"> ${{ props.maxPrice }} </span>
      </div>
    </div>
  </div>
</template>
