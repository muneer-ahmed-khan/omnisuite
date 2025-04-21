<script setup lang="ts">
// BrandsFilter.vue
// Brand checkboxes + see more

const props = defineProps<{
  brands: import('./types/products-sidebar-filter.types').Brand[]
}>()
</script>

<template>
  <div class="sidebar-item">
    <h6 class="text-black fw-bold fs-md-15">Brands</h6>
    <ul class="brands-list ps-0 mb-0 list-unstyled">
      <li
        v-for="b in props.brands"
        :key="b.id"
        class="d-flex align-items-center justify-content-between text-paragraph"
      >
        <div class="form-check mb-0">
          <input class="form-check-input shadow-none" type="checkbox" :id="b.id" />
          <label class="form-check-label fs-md-15 fw-medium" :for="b.id">
            {{ b.name }}
          </label>
        </div>
        <span class="d-block fw-medium text-muted">{{ b.count }}</span>
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
