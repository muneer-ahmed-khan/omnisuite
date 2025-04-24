<!-- File: InfoList.vue -->
<script setup lang="ts">
defineOptions({ name: 'InfoList' })

import { defineProps } from 'vue'
import type { InfoItem } from './types/product-details.types.ts'

/**
 * InfoList component displays a list of product information key-value pairs.
 *
 * @props {InfoItem[]} items - Array of info items (label and value).
 */
const props = defineProps<{ items: InfoItem[] }>()
</script>

<template>
  <ul class="info ps-0 list-unstyled">
    <li v-for="(item, idx) in props.items" :key="idx" class="text-paragraph fs-md-15 fs-xxxl-16">
      <span class="text-black fw-semibold d-inline-block">{{ item.label }}</span>
      {{ item.value }}
    </li>
  </ul>
</template>
