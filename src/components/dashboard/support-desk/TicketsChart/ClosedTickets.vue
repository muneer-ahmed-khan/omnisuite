<script setup lang="ts">
/**
 * ClosedTickets Component
 * -----------------------------------------------------------------------------
 * Displays a chart and summary showing the number of closed support tickets.
 * Uses ApexCharts for rendering a minimal area chart.
 *
 * Static Data:
 * - Imports chart series and options from `data/closed-tickets.data.ts`
 *
 * Types:
 * - Chart options are typed using ApexCharts' ApexOptions type.
 * - Series is typed via a custom `ClosedTicketsSeries` interface.
 */

defineOptions({ name: 'ClosedTickets' })

import { closed, closedTicketsChart } from './data/closed-tickets.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
    <div class="card-body p-15 p-sm-20 p-md-25 pt-lg-30 letter-spacing">
      <div class="row justify-content-between">
        <div class="col-lg-5 col-md-5">
          <div class="icon position-relative text-success rounded-1 text-center">
            <i class="flaticon-sterile-box"></i>
          </div>
        </div>
        <div class="col-lg-7 col-md-7">
          <div class="chart">
            <apexchart type="area" height="120" :options="closedTicketsChart" :series="closed" />
          </div>
        </div>
      </div>
      <div class="info d-flex align-items-center justify-content-between mt-15">
        <span class="fs-13 d-block text-uppercase text-dark-emphasis fw-bold">
          CLOSED TICKETS
        </span>
        <div class="d-flex align-items-center">
          <h4 class="fw-black mb-0 me-10 lh-1">77</h4>
          <span class="fw-bold text-danger text-badge d-inline-block">
            <i class="flaticon-down-arrow fs-11 lh-1 position-relative top-1"></i>
            4.3%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
