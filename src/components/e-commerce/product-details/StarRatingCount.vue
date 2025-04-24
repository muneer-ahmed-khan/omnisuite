<script setup lang="ts">
defineOptions({ name: 'StarRatingCount' })
import { defineProps } from 'vue'
import type { RatingCount } from './types/product-details.types.ts'

/**
 * StarRatingCount component displays a horizontal progress bar representing
 * the percentage of reviews for a given star rating.
 *
 * @props {number} star – The star level (1–5).
 * @props {number} count – Total number of reviews at this star level.
 * @props {number} percent – Percentage (0–100) for the progress bar width.
 */
const props = defineProps<RatingCount>()
</script>

<template>
  <div class="mt-15 mb-5 d-flex justify-content-between align-items-center">
    <span class="fw-medium text-black">{{ props.star }} Star</span>
    <span class="fw-medium text-black">{{ props.count }}</span>
  </div>
  <div
    class="progress"
    role="progressbar"
    :aria-valuenow="props.percent"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar" :style="{ width: props.percent + '%' }"></div>
  </div>
</template>
