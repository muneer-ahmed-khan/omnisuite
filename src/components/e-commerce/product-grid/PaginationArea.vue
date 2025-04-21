<script setup lang="ts">
// PaginationArea.vue
// Renders pagination controls
import type { Pagination } from './types/products-grid.types'

const props = defineProps<Pagination & { resultCount: number }>()
const emits = defineEmits<{ (e: 'change-page', page: number): void }>()
function go(page: number) {
  emits('change-page', page)
}
</script>

<template>
  <div class="pagination-area d-md-flex mb-25 justify-content-between align-items-center">
    <p class="mb-0 text-paragraph">
      Showing <span class="fw-bold">{{ props.resultCount }}</span> out of
      <span class="fw-bold">{{ props.totalResults }}</span> results
    </p>
    <nav class="mt-15 mt-md-0">
      <ul class="pagination mb-0">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="go(props.currentPage - 1)"
            :class="{ disabled: props.currentPage === 1 }"
          >
            <i class="flaticon-chevron-1"></i>
          </a>
        </li>
        <li v-for="p in props.pages" :key="p" class="page-item">
          <a
            class="page-link"
            href="#"
            :class="{ active: p === props.currentPage }"
            @click.prevent="go(p)"
          >
            {{ p }}
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="go(props.currentPage + 1)"
            :class="{ disabled: props.currentPage === props.pages[props.pages.length - 1] }"
          >
            <i class="flaticon-chevron"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
