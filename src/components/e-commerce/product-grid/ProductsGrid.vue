<script setup lang="ts">
// ProductsGrid.vue
// Combines the sidebar, product cards, and pagination

import { ref, computed } from 'vue'
import { products, pagination } from './data/products-grid.data'

const page = ref(pagination.currentPage)
function changePage(p: number) {
  page.value = p
}

const paginatedProducts = computed(() => {
  // For now, static page size equals total products on page
  return products
})
</script>

<template>
  <div class="row">
    <div class="col-lg-4 col-xxxl-3">
      <ProductsSidebarFilter />
    </div>
    <div class="col-lg-8 col-xxxl-9">
      <div class="row">
        <div v-for="p in paginatedProducts" :key="p.id" class="col-sm-6 col-lg-6 col-xxxl-3">
          <ProductCard :product="p" />
        </div>
      </div>

      <PaginationArea
        :result-count="paginatedProducts.length"
        :total-results="pagination.totalResults"
        :pages="pagination.pages"
        :current-page="page"
        @change-page="changePage"
      />
    </div>
  </div>
</template>
