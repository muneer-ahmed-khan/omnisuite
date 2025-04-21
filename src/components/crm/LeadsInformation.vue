<script setup lang="ts">
/**
 * LeadsInformation.vue
 *
 * Displays detailed lead information using a card layout.
 * This version fully aligns with the original styling and structure.
 */

import { leadProfile, leadDetails } from './data/leads-information.data'

defineOptions({
  name: 'LeadsInformation',
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing lead-info-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <!-- Profile Section -->
      <div class="profile-info d-sm-flex align-items-center">
        <img :src="leadProfile.image" class="rounded" :alt="leadProfile.name" />
        <div class="title mt-12 mt-sm-0">
          <h5 class="text-black fw-medium mb-8">{{ leadProfile.name }}</h5>
          <span class="d-block fs-md-15 fs-lg-16 text-dark-emphasis mb-8">
            {{ leadProfile.title }}
          </span>
          <span class="d-block fw-bold text-primary">
            {{ leadProfile.company }}
          </span>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="border-top mt-15 mb-15 mt-sm-20 mb-sm-20 mt-md-25 mb-md-25 mt-lg-30 mb-lg-30"
      ></div>

      <!-- Info Header -->
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="fw-medium text-black-emphasis mb-0">Lead’s Information</h5>
        <router-link
          to="/lead-details"
          class="d-inline-block text-decoration-none lh-1 text-muted fw-medium"
        >
          <i class="ph-duotone ph-pencil text-black position-relative top-1 fs-16 me-1"></i>
          Edit
        </router-link>
      </div>

      <!-- Info List -->
      <ul class="info mt-25 ps-0 mb-0 list-unstyled">
        <li v-for="(item, index) in leadDetails" :key="index" class="position-relative">
          <div :class="`icon ${item.iconColor} rounded-circle text-center`">
            <i :class="item.icon"></i>
          </div>
          <span class="d-block text-black mb-5 fw-semibold">{{ item.label }}</span>

          <template v-if="item.link">
            <a
              :href="item.link"
              target="_blank"
              class="d-inline-block fs-md-15 fs-lg-16 text-decoration-none"
              :class="item.isPrimary ? 'text-primary' : 'text-muted'"
            >
              {{ item.value }}
            </a>
          </template>
          <template v-else-if="item.label === 'Lead Status'">
            <span class="badge text-outline-info">{{ item.value }}</span>
          </template>
          <template v-else>
            <span class="d-inline-block fs-md-15 fs-lg-16 text-muted">
              {{ item.value }}
            </span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
