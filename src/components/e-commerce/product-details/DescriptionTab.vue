<!-- File: DescriptionTab.vue -->
<script setup lang="ts">
defineOptions({ name: 'DescriptionTab' })
import { defineProps } from 'vue'
import type { DescriptionTab as DescriptionTabType } from './types/product-details.types.ts'

/**
 * DescriptionTab component displays the product description content,
 * including paragraphs, bullet list items, and a ContactBox.
 *
 * @props {DescriptionTabType} description - Contains paragraphs, listItems, and contact data.
 */
const props = defineProps<{ description: DescriptionTabType }>()
</script>

<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="content">
        <p
          v-for="(para, idx) in props.description.paragraphs"
          :key="idx"
          class="text-paragraph fs-md-15 fs-xxxl-16"
        >
          {{ para }}
        </p>
        <ul class="ps-0 list-unstyled">
          <li
            v-for="(item, idx) in props.description.listItems"
            :key="idx"
            class="text-black fs-md-15 fs-xxxl-16 position-relative"
          >
            {{ item }}
          </li>
        </ul>
        <p class="text-paragraph fs-md-15 fs-xxxl-16">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt.
        </p>
        <p class="text-paragraph fs-md-15 fs-xxxl-16">
          Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="text-paragraph fs-md-15 fs-xxxl-16">
          New 2023 Speedmaster Moonwatch Professional Co-Axial Master Chronometer 42mm Mens. Lorem
          ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor.
        </p>
      </div>
    </div>
    <div class="col-lg-4">
      <ContactBox :contact="props.description.contact" />
    </div>
  </div>
</template>
