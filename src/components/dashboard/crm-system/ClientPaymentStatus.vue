<script setup lang="ts">
/**
 * @file ClientPaymentStatus.vue
 * @description A Vue 3 component displaying a polar area chart with client payment status statistics.
 */

import { clientPaymentStatusChart, clientSeries } from './data/client-payment-status.data'

defineOptions({
  name: 'ClientPaymentStatus',
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <!-- Header -->
      <div class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Client Payment Status</h5>
      </div>

      <!-- ApexChart Visualization -->
      <div class="chart">
        <apexchart
          type="polarArea"
          height="430"
          id="clientPaymentStatusChart"
          :options="clientPaymentStatusChart"
          :series="clientSeries"
        />
      </div>
    </div>
  </div>
</template>
