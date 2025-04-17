<script setup lang="ts">
/**
 * WeeklySales Component
 *
 * Displays weekly sales data using a smooth line chart.
 * Uses ApexCharts to show a comparison between current and previous week.
 *
 * @component
 * @example
 * <WeeklySales />
 *
 * Static Data:
 * - Chart options and sales series are imported from the data file.
 *
 * Chart:
 * - Type: Line
 * - Responsive and styled for dashboard integration.
 */

import { salesData, weeklySalesChartOptions } from './data/weekly-sales.data'

defineOptions({ name: 'WeeklySales' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white sales-pos-location-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-sm-0 d-sm-flex align-items-center justify-content-between">
        <div class="title">
          <span class="fw-medium text-muted fs-13 d-block mb-5 text-uppercase"> WEEKLY SALES </span>
          <h4 class="card-title fw-black mb-0">$25,302</h4>
        </div>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Select</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium">This Week</option>
            <option value="2" class="fw-medium" selected>This Month</option>
            <option value="3" class="fw-medium">This Year</option>
          </select>
        </div>
      </div>

      <div id="weeklySalesChart" class="chart">
        <apexchart
          type="line"
          height="375"
          :options="weeklySalesChartOptions"
          :series="salesData"
        />
      </div>
    </div>
  </div>
</template>
