<script setup lang="ts">
// CategoriesFilter.vue
// Category list + see more

const props = defineProps<{
  categories: import('./types/products-sidebar-filter.types').Category[]
}>()
</script>

<template>
  <div class="sidebar-item">
    <h6 class="text-black fw-bold fs-md-15">Categories</h6>
    <ul class="categories-list ps-0 mb-0 list-unstyled">
      <li v-for="cat in props.categories" :key="cat.name">
        <router-link
          :to="cat.link"
          class="d-flex align-items-center justify-content-between text-decoration-none text-paragraph"
        >
          <span class="d-block fs-md-15 fw-medium">{{ cat.name }}</span>
          <span class="d-block fw-medium text-muted">{{ cat.count }}</span>
        </router-link>
      </li>
    </ul>
    <button
      type="button"
      class="see-more-btn mt-15 bg-transparent p-0 border-0 position-relative text-uppercase text-primary fw-medium fs-13"
    >
      See More
    </button>
  </div>
</template>
