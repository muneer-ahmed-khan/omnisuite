<script setup lang="ts">
/**
 * AverageCallDuration.vue
 *
 * This component renders a mini area chart displaying the average call duration
 * using ApexCharts. Chart options and data are extracted from a separate file.
 */

import { average, averageCallDurationChart } from './data/average-call-duration-chart.data'

defineOptions({
  name: 'AverageCallDuration',
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white time-duration-box">
    <div class="card-body position-relative letter-spacing">
      <div class="icon position-relative lh-1 text-success">
        <i class="flaticon-clock"></i>
      </div>
      <div class="content mb-0">
        <span class="d-block fw-bold text-dark-emphasis mb-1"> Average Call Duration </span>
        <h2 class="mb-0 fw-black">8 min 30s</h2>
      </div>
      <div class="chart">
        <div id="averageCallDurationChart">
          <apexchart
            type="area"
            height="110"
            id="averageCallDurationChart"
            :options="averageCallDurationChart"
            :series="average"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
