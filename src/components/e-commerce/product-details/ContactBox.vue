<!-- File: ContactBox.vue -->
<script setup lang="ts">
defineOptions({ name: 'ContactBox' })
import { defineProps } from 'vue'
import type { ContactBox as ContactBoxType } from './types/product-details.types.ts'

/**
 * ContactBox component displays a campaign contact box.
 *
 * @props {ContactBoxType} contact - Data for heading, strong text, icon, link, and image.
 */
const props = defineProps<{ contact: ContactBoxType }>()
</script>

<template>
  <div class="card mb-0 border-0 rounded-0 campaign-contact-box">
    <div class="card-body letter-spacing position-relative">
      <h2 class="fw-medium text-white mb-0">
        {{ props.contact.heading }}
        <strong class="fw-black">{{ props.contact.strong }}</strong>
        <a
          :href="props.contact.link"
          class="text-white text-decoration-none lh-1 position-relative ms-5 top-3"
        >
          <i :class="props.contact.icon"></i>
        </a>
      </h2>
      <img :src="props.contact.image" alt="contact-image" />
    </div>
  </div>
</template>
