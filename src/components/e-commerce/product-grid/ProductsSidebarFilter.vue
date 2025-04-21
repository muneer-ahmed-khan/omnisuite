<script setup lang="ts">
// ProductsSidebarFilter.vue
// Combines all sidebar‐filter subcomponents

import { ref, watch } from 'vue'
import {
  previousSearches,
  categories,
  brands,
  ratings,
  initialMinPrice,
  initialMaxPrice,
} from './data/products-sidebar-filter.data'

const searches = ref<string[]>([...previousSearches])
const minPrice = ref<number>(initialMinPrice)
const maxPrice = ref<number>(initialMaxPrice)

function removeSearch(item: string) {
  searches.value = searches.value.filter((s) => s !== item)
}
function clearSearches() {
  searches.value = []
}

function updateRange() {
  if (minPrice.value > maxPrice.value) {
    ;[minPrice.value, maxPrice.value] = [maxPrice.value, minPrice.value]
  }
}

// enforce consistent range any time either changes
watch([minPrice, maxPrice], updateRange)
</script>

<template>
  <div class="products-sidebar-filter bg-white letter-spacing mb-25">
    <div class="title">
      <h5 class="mb-0 fw-semibold text-secondary">Filters</h5>
    </div>

    <SearchFilter :previous-searches="searches" @remove="removeSearch" @clear="clearSearches" />

    <CategoriesFilter :categories="categories" />

    <BrandsFilter :brands="brands" />

    <PricingFilter v-model:minPrice="minPrice" v-model:maxPrice="maxPrice" />

    <RatingsFilter :ratings="ratings" />
  </div>
</template>
