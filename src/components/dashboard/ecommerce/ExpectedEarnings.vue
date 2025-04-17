<script setup lang="ts">
/**
 * ExpectedEarnings Component
 *
 * Displays the total expected earnings with a percentage increase and a breakdown
 * of category-wise revenue, accompanied by a donut chart visualization.
 *
 * @component
 * @example
 * <ExpectedEarnings />
 *
 * Static Data:
 * - Chart series and options are imported from the data file.
 * - Breakdown items are imported as well.
 *
 * Libraries:
 * - Uses ApexCharts (via vue-apexcharts) to render a donut chart.
 */

import { earnings, earningChartOptions, earningBreakdown } from './data/expected-earnings.data'

defineOptions({ name: 'ExpectedEarnings' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white expected-earnings-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <span class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis">
        EXPECTED EARNINGS
      </span>
      <h4 class="fw-black mb-12 lh-1">$32,000</h4>
      <span class="fw-bold text-success text-badge d-inline-block">
        5.5%
        <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1" />
      </span>

      <ul class="list ps-0 mb-0 list-unstyled mt-15">
        <li
          v-for="(item, index) in earningBreakdown"
          :key="index"
          class="text-muted position-relative fw-medium"
        >
          {{ item.category }} -
          <span class="text-black fw-bold">{{ item.amount }}</span>
        </li>
      </ul>

      <div id="earningChart" class="chart">
        <apexchart type="donut" height="150" :options="earningChartOptions" :series="earnings" />
      </div>
    </div>
  </div>
</template>
