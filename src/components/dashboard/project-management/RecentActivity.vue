<script setup lang="ts">
/**
 * @component RecentActivity
 *
 * @description
 * This component displays a card containing a list of recent activities along with a dropdown
 * menu for quick actions. Each activity item shows an icon, a detailed message with selectively
 * bolded text parts, a timestamp, and a link to the project management page.
 *
 * @usage
 * <template>
 *   <RecentActivity />
 * </template>
 *
 * @dataSources
 * - Static activity data and dropdown options are imported from "data/recent-activity.data.ts".
 *
 * @specialLogic
 * - The list of activities is rendered dynamically using nested v-for loops.
 * - Each activity's text is segmented to allow specific words to be bolded.
 */

defineOptions({ name: 'RecentActivity' })

import { dropdownItems, recentActivityItems } from './data/recent-activity.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white recent-activity-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-20 mb-xxxl-25 d-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Recent Activity</h5>
        <div class="dropdown">
          <button
            class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="flaticon-dots"></i>
          </button>
          <ul class="dropdown-menu">
            <li v-for="(item, index) in dropdownItems" :key="index">
              <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                <i :class="[item.icon, 'lh-1', 'me-8', 'position-relative', 'top-1']"></i>
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li
          v-for="(activity, index) in recentActivityItems"
          :key="index"
          class="position-relative fw-medium text-dark-emphasis"
        >
          <div class="icon position-absolute start-0 rounded-circle text-center">
            <i :class="activity.icon"></i>
          </div>
          <template v-for="(segment, segIndex) in activity.segments" :key="segIndex">
            <template v-if="segment.bold">
              <span class="text-black fw-bold">{{ segment.text }}</span>
            </template>
            <template v-else>
              {{ segment.text }}
            </template>
          </template>
          <span class="d-block fs-13 mt-1">{{ activity.time }}</span>
          <router-link
            :to="activity.link"
            class="link-btn text-decoration-none position-absolute end-0"
          >
            <i class="flaticon-chevron"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
