<script setup lang="ts">
/**
 * CallLeads.vue
 *
 * This component displays call statistics in two blocks:
 * 1. Outgoing calls for the current day
 * 2. Support calls for the current week
 *
 * Each block includes:
 * - An icon representing the call type
 * - A title label
 * - Number of leads
 * - A small summary with comparison percentage and direction
 *
 * Static data is imported from `call-leads.data.ts` and typed via `call-leads.type.ts`.
 */

import { callLeadsData } from './data/call-leads.data'

defineOptions({
  name: 'CallLeads',
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 call-stats-box">
    <!-- Loop through each data block (Outgoing / Support) -->
    <div
      class="card-body letter-spacing position-relative"
      v-for="(item, index) in callLeadsData"
      :key="index"
    >
      <!-- Circular icon at top-left corner -->
      <div class="icon text-center rounded-circle position-absolute">
        <img :src="item.icon" class="position-absolute start-0 end-0 ms-auto me-auto" alt="icon" />
      </div>

      <!-- Label (e.g., OUTGOING CALL / SUPPORT CALL) -->
      <span class="d-block text-paragraph fw-medium">{{ item.label }}</span>

      <!-- Lead count with description -->
      <h3 class="fw-black text-primary">
        {{ item.leadCount }}
        <span class="text-black">{{ item.leadText }}</span>
      </h3>

      <!-- Change indicator with percentage and comparison text -->
      <div class="d-flex align-items-center">
        <span
          :class="[
            'fw-bold text-badge d-inline-block',
            item.changeType === 'up' ? 'text-success' : 'text-danger',
          ]"
        >
          <i
            :class="[
              'fs-11 lh-1 position-relative top-1',
              item.changeType === 'up' ? 'flaticon-up-arrow' : 'flaticon-down-arrow',
            ]"
          ></i>
          {{ item.changeText }}
        </span>
        <span class="text-paragraph d-inline-block ms-8">
          {{ item.comparedText }}
        </span>
      </div>

      <!-- Divider between the two stat blocks -->
      <hr v-if="index === 0" />
    </div>
  </div>
</template>
