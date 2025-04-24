<script setup lang="ts">
import { defineProps } from 'vue'
/**
 * RatingStars component displays star icons based on rating.
 *
 * @props {number} rating - The number of filled stars to display (out of 5).
 */
const props = defineProps<{ rating: number }>()
const totalStars = 5

defineOptions({
  name: 'RatingStars',
})
</script>

<template>
  <div class="rating lh-1">
    <i
      v-for="i in totalStars"
      :key="i"
      :class="i <= props.rating ? 'flaticon-star-1' : 'flaticon-star'"
    ></i>
  </div>
</template>
