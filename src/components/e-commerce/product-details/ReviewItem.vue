<script setup lang="ts">
defineOptions({ name: 'ReviewItem' })
import { defineProps } from 'vue'
import type { ReviewItemData } from './types/product-details.types.ts'

/**
 * ReviewItem component displays a single user review, including rating stars, text, and user info.
 *
 * @props {ReviewItemData} review - The review data (rating, text, user image & name).
 */
const props = defineProps<{ review: ReviewItemData }>()
</script>

<template>
  <div class="col-lg-4 mb-25">
    <div class="p-15 p-sm-20 p-md-25 rounded-1 bg-gray">
      <RatingStars :rating="props.review.rating" />
      <p class="text-paragraph lh-base fs-md-15 fs-lg-16 mb-0">
        {{ props.review.text }}
      </p>
      <div class="mt-15 d-flex align-items-center">
        <img :src="props.review.user.image" alt="user" class="rounded-circle me-12" width="30" />
        <span class="fs-md-15 d-block text-black fw-medium">
          {{ props.review.user.name }}
        </span>
      </div>
    </div>
  </div>
</template>
