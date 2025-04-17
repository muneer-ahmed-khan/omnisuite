<script setup lang="ts">
/**
 * RevenueThisMonth Component
 *
 * Displays current month's revenue along with a percentage indicator and a
 * progress bar showing how close the store is to its revenue goal.
 *
 * This component is part of the dashboard statistics cards.
 *
 * @component
 * @example
 * <RevenueThisMonth />
 *
 * Static Data:
 * - Uses constants imported from a separate data file to represent revenue details.
 *
 * Visuals:
 * - A revenue amount
 * - A performance indicator with an arrow icon
 * - A label and percentage for goal progress
 * - A progress bar visualizing the goal progress
 */
import {
  revenueAmount,
  performanceChange,
  progressPercentage,
  goalStatusText,
} from './data/revenue-this-month.data'

defineOptions({ name: 'RevenueThisMonth' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white monthly-revenue-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <span class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis">
        REVENUE THIS MONTH
      </span>
      <h4 class="fw-black mb-12 lh-1">{{ revenueAmount }}</h4>
      <span class="fw-bold text-danger text-badge d-inline-block" v-if="performanceChange < 0">
        {{ Math.abs(performanceChange) }}%
        <i class="flaticon-down-arrow fs-11 lh-1 position-relative top-1"></i>
      </span>
      <span class="fw-bold text-success text-badge d-inline-block" v-else>
        {{ performanceChange }}%
        <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
      </span>

      <div class="mt-15 mt-md-25 mb-8 mb-md-12 d-flex justify-content-between align-items-center">
        <span class="fw-medium text-secondary">
          {{ goalStatusText }}
        </span>
        <span class="text-primary fw-semibold">{{ progressPercentage }}%</span>
      </div>

      <div
        class="progress"
        role="progressbar"
        :aria-valuenow="progressPercentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>
