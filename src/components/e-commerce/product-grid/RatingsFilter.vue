<script setup lang="ts">
// RatingsFilter.vue
// Star‑based ratings checkboxes

const props = defineProps<{
  ratings: import('./types/products-sidebar-filter.types').Rating[]
}>()

function starIcons(count: number) {
  // returns array of five booleans to render filled vs. empty
  return Array.from({ length: 5 }, (_, i) => i < count)
}
</script>

<template>
  <div class="sidebar-item">
    <h6 class="text-black fw-bold fs-md-15">Ratings</h6>
    <ul class="ratings-list ps-0 mb-0 list-unstyled">
      <li
        v-for="r in props.ratings"
        :key="r.id"
        class="d-flex align-items-center justify-content-between text-paragraph"
      >
        <div class="form-check mb-0">
          <input class="form-check-input shadow-none" type="checkbox" :id="r.id" />
          <label class="form-check-label fw-medium" :for="r.id">
            <span>
              <i
                v-for="filled in starIcons(r.stars)"
                :key="+filled"
                :class="filled ? 'flaticon-star-1' : 'flaticon-star'"
              ></i>
            </span>
            {{ r.stars }}.00 &amp; above
          </label>
        </div>
        <span class="d-block fw-medium text-muted">{{ r.count }}</span>
      </li>
    </ul>
  </div>
</template>
