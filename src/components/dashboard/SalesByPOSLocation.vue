<script setup lang="ts">
/**
 * SalesByPOSLocation Component
 *
 * Displays sales data by POS location using a radar chart.
 * It compares "Allocated Budget" versus "Actual Spending" across different departments.
 *
 * @component
 * @example
 * <SalesByPOSLocation />
 *
 * Static Data:
 * - The sales series and chart configuration are imported from the static data file.
 *
 * Chart:
 * - Type: Radar
 * - Custom styling for polygons, tooltip, and axes.
 */

import { sales, salesByPosLocationChart } from './data/sales-by-pos-location.data'

defineOptions({ name: 'SalesByPOSLocation' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white sales-pos-location-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 d-sm-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Sales By POS Location</h6>
        <router-link
          to="/"
          class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          View Details
        </router-link>
      </div>
      <ul class="list ps-0 mb-5 list-unstyled mt-15">
        <li class="text-muted position-relative fw-medium">
          Allocated Budget -
          <span class="text-black fw-bold ms-8">$29,500.00</span>
          <span class="fw-bold text-success ms-5">
            5.5%
            <i class="flaticon-up-arrow fs-12 lh-1 position-relative top-1"></i>
          </span>
        </li>
        <li class="text-muted position-relative fw-medium">
          Actual Spending -
          <span class="text-black fw-bold ms-15">$19,500.00</span>
          <span class="fw-bold text-danger ms-5">
            1.4%
            <i class="flaticon-down-arrow fs-12 lh-1 position-relative top-1"></i>
          </span>
        </li>
      </ul>
      <div id="salesByPosLocationChart" class="chart">
        <apexchart
          type="radar"
          height="385"
          :options="salesByPosLocationChart"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
