<script setup lang="ts">
import { ref } from 'vue'
// SearchExportHeader.vue
// Renders search input, "Add New Product", and "Export" controls

const emits = defineEmits<{
  (e: 'search', term: string): void
  (e: 'add'): void
  (e: 'export'): void
}>()

const searchTerm = ref('')
function onSearch(e: Event) {
  e.preventDefault()
  emits('search', searchTerm.value)
}
function onAdd() {
  emits('add')
}
function onExport() {
  emits('export')
}
</script>

<template>
  <div
    class="card-head box-shadow bg-white d-md-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
  >
    <form class="search-box position-relative" @submit.prevent="onSearch">
      <input
        v-model="searchTerm"
        type="text"
        class="form-control shadow-none text-black rounded-0 border-0"
        placeholder="Search product"
      />
      <button type="submit" class="bg-transparent text-primary transition p-0 border-0">
        <i class="flaticon-search-interface-symbol"></i>
      </button>
    </form>
    <div class="d-sm-flex align-items-center">
      <a
        href="#"
        class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mt-10 mt-md-0 text-decoration-none"
        @click.prevent="onAdd"
      >
        Add New Product
        <i class="flaticon-plus position-relative ms-5 fs-12"></i>
      </a>
      <button
        class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mt-10 mt-md-0"
        type="button"
        @click="onExport"
      >
        Export
        <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
      </button>
    </div>
  </div>
</template>
