<script setup lang="ts">
/**
 * WebsiteVisitors Component
 *
 * Displays a bar chart of website visitors over several months.
 * Uses ApexCharts to visualize visitor trends, with custom styling applied.
 *
 * @component
 * @example
 * <WebsiteVisitors />
 *
 * Static Data:
 * - Chart configuration and series data are imported from the data file.
 *
 * Chart:
 * - Type: Bar
 * - Configured using the ApexOptions type from the apexcharts package.
 */
import { website, websiteVisitorsChart } from './data/website-visitors.data'

defineOptions({ name: 'WebsiteVisitors' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white website-visitors">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-lg-15 d-sm-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Website Visitors</h6>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Last</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium">1 Month</option>
            <option value="2" class="fw-medium">2 Months</option>
            <option value="3" class="fw-medium">3 Months</option>
            <option value="4" class="fw-medium">4 Months</option>
            <option value="5" class="fw-medium">5 Months</option>
            <option value="6" class="fw-medium">6 Months</option>
            <option value="7" class="fw-medium">7 Months</option>
            <option value="8" class="fw-medium" selected>8 Months</option>
            <option value="9" class="fw-medium">9 Months</option>
          </select>
        </div>
      </div>
      <div id="websiteVisitorsChart" class="chart">
        <apexchart
          type="bar"
          height="385"
          :options="websiteVisitorsChart"
          :series="website"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
