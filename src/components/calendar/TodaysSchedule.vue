<script lang="ts" setup>
/**
 * @component TodaysSchedule
 * @description A component that displays the daily schedule with meetings, discussions, and reviews.
 * It visualizes the day's agenda with color-coded categories and time slots.
 *
 * @example
 * <TodaysSchedule />
 */

import { scheduleData } from './data/todays-schedule.data'

const title = scheduleData.title

const scheduleStats = scheduleData.stats

const scheduleItems = scheduleData.items
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white working-schedule-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <h6 class="card-title fw-bold mb-12">{{ title }}</h6>
      <ul class="info-list ps-0 mb-0 list-unstyled">
        <li v-for="(stat, index) in scheduleStats" :key="index" class="d-inline-block">
          <div class="d-flex align-items-center">
            <span class="d-block w-10 h-10 rounded-circle me-8" :class="stat.colorClass"></span>
            <span class="fw-bold">
              {{ stat.count }}
              <span class="text-muted fw-semibold">{{ stat.label }}</span>
            </span>
          </div>
        </li>
      </ul>
      <div class="schedule-list mt-15 mt-md-20">
        <div
          v-for="(item, index) in scheduleItems"
          :key="index"
          class="list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative"
          :class="item.bgColorClass"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                {{ item.timeRange }}
                <span class="text-muted fs-12">{{ item.timeOfDay }}</span>
              </h6>
              <div
                class="ms-10 icon rounded-circle text-center position-relative"
                :class="item.iconBgClass"
              >
                <i class="flaticon-bell-2" :class="item.iconTextClass"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1">
              {{ item.title }}
            </span>
            <span class="d-block text-muted fs-12 fw-medium">
              Lead by <span :class="item.leadTextClass">{{ item.leadBy }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
