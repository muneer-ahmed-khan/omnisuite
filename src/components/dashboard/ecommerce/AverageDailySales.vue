<script setup lang="ts">
/**
 * AverageDailySales Component
 *
 * Displays the average daily sales in a bar chart format.
 * Leverages ApexCharts to render sales data over time.
 *
 * @component
 * @example
 * <AverageDailySales />
 *
 * Static Data:
 * - Chart configuration and sales series are imported from the data file.
 *
 * Chart:
 * - Type: Bar
 * - Responsive and minimal style, tailored for dashboard display.
 */

import { sales, averageDailySalesChart } from './data/average-daily-sales.data'

defineOptions({ name: 'AverageDailySales' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white daily-sales-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <span class="d-block mb-6 fs-13 text-uppercase fw-medium text-dark-emphasis">
        AVERAGE DAILY SALES
      </span>
      <h4 class="fw-black mb-12 lh-1">$5,302</h4>
      <span class="fw-bold text-success text-badge d-inline-block">
        3.9%
        <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
      </span>

      <div class="chart">
        <apexchart
          type="bar"
          height="150"
          width="220"
          id="averageDailySalesChart"
          :options="averageDailySalesChart"
          :series="sales"
        />
      </div>
    </div>
  </div>
</template>
