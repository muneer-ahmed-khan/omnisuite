<script setup lang="ts">
/**
 * NewCustomersThisMonth Component
 *
 * Displays the number of new customers joined this month, percentage growth,
 * and a visual list of profile images or initials representing the new customers.
 *
 * This component is part of the dashboard statistics cards.
 *
 * @component
 * @example
 * <NewCustomersThisMonth />
 *
 * Static Data:
 * - Uses a list of user avatars/initials imported from a data file.
 */

defineOptions({ name: 'NewCustomersThisMonth' })

import { customerStats, customerUsers, joinStatus } from './data/new-customers-this-month.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white monthly-new-customers-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="title">
        <span class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis">
          NEW CUSTOMERS THIS MONTH
        </span>
        <h4 class="fw-black mb-12 lh-1">{{ customerStats.total }}</h4>
        <span class="fw-bold text-success text-badge d-inline-block">
          {{ customerStats.growth }}%
          <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
        </span>
      </div>
      <div class="users-list d-flex align-items-center">
        <template v-for="(user, index) in customerUsers" :key="index">
          <div v-if="user.type === 'image'" class="rounded-circle text-center">
            <img :src="user.src" class="rounded-circle" alt="user" />
          </div>
          <div
            v-else
            class="rounded-circle text-center d-flex align-items-center justify-content-center text-white"
            :class="[user.bg, 'fs-' + user.size, 'fw-bold']"
          >
            {{ user.label }}
          </div>
        </template>
        <span class="text-black fw-bold ms-25 ms-md-30">{{ joinStatus }}</span>
      </div>
    </div>
  </div>
</template>
