<script setup lang="ts">
/**
 * OnHoldTicket Component
 * -----------------------------------------------------------------------------
 * Displays an area chart for tickets that are currently on hold.
 *
 * Uses static series and chart config from external files,
 * with ApexCharts integration and typed with `ApexOptions`.
 */

defineOptions({ name: 'OnHoldTicket' })

import { hold, onHoldTicketsChart } from './data/on-hold-ticket.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
    <div class="card-body p-15 p-sm-20 p-md-25 pt-lg-30 letter-spacing">
      <div class="row justify-content-between">
        <div class="col-lg-5 col-md-5">
          <div class="icon position-relative text-info-light rounded-1 text-center">
            <i class="flaticon-sterile-box"></i>
          </div>
        </div>
        <div class="col-lg-7 col-md-7">
          <div class="chart">
            <apexchart type="area" height="120" :options="onHoldTicketsChart" :series="hold" />
          </div>
        </div>
      </div>
      <div class="info d-flex align-items-center justify-content-between mt-15">
        <span class="fs-13 d-block text-uppercase text-dark-emphasis fw-bold">
          ON HOLD TICKETS
        </span>
        <div class="d-flex align-items-center">
          <h4 class="fw-black mb-0 me-10 lh-1">69</h4>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            5.5%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
