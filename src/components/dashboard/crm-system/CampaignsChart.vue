<script setup lang="ts">
/**
 * CampaignsChart.vue
 *
 * This component renders a radial bar chart using ApexCharts to visualize
 * campaign statistics: total sent, reached, and opened.
 *
 * The chart is styled and driven by static configuration imported
 * from `campaigns-chart.data.ts`, and typed via `ApexOptions` in `campaigns-chart.type.ts`.
 */

import { campaignsChartData, campaigns } from './data/campaigns-chart.data'

defineOptions({
  name: 'CampaignsChart',
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white campaigns-box">
    <div class="card-body letter-spacing">
      <!-- Header with title and filter dropdown -->
      <div class="mb-5 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Campaigns</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Last</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>1 Week</option>
            <option value="2" class="fw-medium">2 Week</option>
            <option value="3" class="fw-medium">3 Week</option>
          </select>
        </div>
      </div>

      <!-- Radial bar chart visualization -->
      <div class="chart">
        <apexchart
          type="radialBar"
          height="325"
          id="campaignsChart"
          :options="campaignsChartData"
          :series="campaigns"
        ></apexchart>
      </div>

      <!-- Summary statistics list -->
      <ul class="list ps-0 mb-0 list-unstyled text-center">
        <li class="d-inline-block position-relative text-primary text-start">
          <h5 class="fw-black mb-1 text-primary">5218</h5>
          <span class="d-block text-black-emphasis fw-medium">Total Sent</span>
        </li>
        <li class="d-inline-block position-relative text-info text-start">
          <h5 class="fw-black mb-1 text-info">5218</h5>
          <span class="d-block text-black-emphasis fw-medium">Reached</span>
        </li>
        <li class="d-inline-block position-relative text-success text-start">
          <h5 class="fw-black mb-1 text-success">5218</h5>
          <span class="d-block text-black-emphasis fw-medium">Opened</span>
        </li>
      </ul>
    </div>
  </div>
</template>
