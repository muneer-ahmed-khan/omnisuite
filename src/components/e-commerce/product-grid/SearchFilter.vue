<script setup lang="ts">
// SearchFilter.vue
// Stand‑alone search box + previous searches

import { ref } from 'vue'

const props = defineProps<{
  previousSearches: string[]
}>()
const emits = defineEmits<{
  (e: 'remove', item: string): void
  (e: 'clear'): void
}>()

const searchTerm = ref('')

function onSubmit() {
  // placeholder—for actual search you could emit('search', searchTerm.value)
}

function remove(item: string) {
  emits('remove', item)
}

function clearAll() {
  emits('clear')
}

defineOptions({
  name: 'SearchFilter',
})
</script>

<template>
  <div class="sidebar-item">
    <h6 class="text-black fw-bold fs-md-15">Search</h6>
    <form class="search-box position-relative mb-15" @submit.prevent="onSubmit">
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
    <span class="d-block fs-13 fw-medium text-black mb-10"> Previous Searches </span>
    <div class="previous-searches-list">
      <div
        v-for="item in props.previousSearches"
        :key="item"
        class="item d-inline-block fw-medium fs-13 text-primary position-relative"
      >
        {{ item }}
        <button type="button" class="bg-transparent p-0 border-0 transition" @click="remove(item)">
          <i class="flaticon-close"></i>
        </button>
      </div>
    </div>
    <a
      href="javascript:void(0);"
      class="clear-btn text-decoration-none fs-13 fw-medium text-black position-relative d-inline-block mt-10"
      @click.prevent="clearAll"
    >
      Clear
    </a>
  </div>
</template>
