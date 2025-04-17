<script setup lang="ts">
/**
 * DueTicketsToday Component
 * -----------------------------------------------------------------------------
 * Displays a chart and info box for tickets due today.
 * Uses ApexCharts area chart.
 *
 * Static Data:
 * - Imports chart series and config from `data/due-tickets-today.data.ts`
 *
 * Types:
 * - Series is typed via `DueTicketsTodaySeries`
 * - Chart config typed via `ApexOptions`
 */

defineOptions({ name: 'DueTicketsToday' })

import { due, dueTicketsTodayChart } from './data/due-tickets-today.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
    <div class="card-body p-15 p-sm-20 p-md-25 pt-lg-30 letter-spacing">
      <div class="row justify-content-between">
        <div class="col-lg-5 col-md-5">
          <div class="icon position-relative text-warning-light rounded-1 text-center">
            <i class="flaticon-sterile-box"></i>
          </div>
        </div>
        <div class="col-lg-7 col-md-7">
          <div class="chart">
            <apexchart type="area" height="120" :options="dueTicketsTodayChart" :series="due" />
          </div>
        </div>
      </div>
      <div class="info d-flex align-items-center justify-content-between mt-15">
        <span class="fs-13 d-block text-uppercase text-dark-emphasis fw-bold">
          DUE TICKETS TODAY
        </span>
        <div class="d-flex align-items-center">
          <h4 class="fw-black mb-0 me-10 lh-1">15</h4>
          <span class="fw-bold text-danger text-badge d-inline-block">
            <i class="flaticon-down-arrow fs-11 lh-1 position-relative top-1"></i>
            1.5%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
