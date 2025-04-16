<script setup lang="ts">
/**
 * WhatHappening Component
 *
 * Displays a welcome card at the top of the ecommerce dashboard.
 * Shows a personalized greeting to the user and highlights key daily statistics.
 * Includes an image to visually enhance the dashboard experience.
 *
 * @component
 * @example
 * <WhatHappening />
 *
 * Static Data:
 * - User name and daily stats are imported from static data.
 *
 * Assets:
 * - Imports an image asset for the welcome section.
 */

import { userName, welcomeStats, welcomeImage } from './data/what-happening.data'

defineOptions({ name: 'WhatHappening' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 welcome-box">
    <div class="card-body pe-15 pe-sm-20 pe-md-0 pb-0 pt-15 pt-sm-20">
      <div class="row align-items-center">
        <!-- Left Column: Greeting and Stats -->
        <div class="col-lg-6 col-md-6">
          <div class="title position-relative">
            <h3 class="fw-semibold mb-8">
              Good Morning, <span class="fw-bold">{{ userName }}!</span>
            </h3>
            <span class="d-block text-black-emphasis fs-md-15 fs-lg-16">
              Here’s what happening with your store today
            </span>
          </div>

          <ul class="ps-0 mb-0 list-unstyled">
            <li
              v-for="(stat, index) in welcomeStats"
              :key="index"
              class="d-inline-block text-uppercase fw-medium fs-13 text-black-emphasis position-relative me-20"
            >
              {{ stat.label }}
              <span class="d-block fw-black lh-1 text-black mt-5 mt-md-10">
                {{ stat.value }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Right Column: Welcome Image -->
        <div class="col-lg-6 col-md-6 text-center mt-15 mt-md-0">
          <img :src="welcomeImage" alt="Welcome image" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>
