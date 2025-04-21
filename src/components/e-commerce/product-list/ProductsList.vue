<script setup lang="ts">
// ProductsList.vue
// Combines the header, table, and pagination

import { ref, computed } from 'vue'
import { productRows, paginationConfig } from './data/products-list.data'

const rows = ref(productRows)
const page = ref(paginationConfig.currentPage)
const resultCount = computed(() => rows.value.length)
function onSearch(term: string) {
  // placeholder — filter rows by term
  console.log('Searching for:', term)
}
function onAdd() {
  // placeholder — navigate or open modal
}
function onExport() {
  // placeholder — export logic
}
function onPageChange(p: number) {
  page.value = p
}
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <SearchExportHeader @search="onSearch" @add="onAdd" @export="onExport" />
    <ProductsListTable :rows="rows" />
    <PaginationArea
      :result-count="resultCount"
      :total-results="paginationConfig.totalResults"
      :pages="paginationConfig.pages"
      :current-page="page"
      @change-page="onPageChange"
    />
  </div>
</template>
