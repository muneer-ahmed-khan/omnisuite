<script setup lang="ts">
/**
 * AnsweredTickets Component
 * -----------------------------------------------------------------------------
 * This component renders a card that displays a small area chart using ApexCharts,
 * which visualizes the number of answered tickets over time. It also shows a summary
 * of the total answered tickets along with a percentage change.
 *
 * Static Data:
 * - The series data and chart options are imported from a separate data file:
 *     data/answered-tickets.data.ts
 *
 * Apex Chart Types:
 * - The chart options are strongly typed using the ApexOptions type from ApexCharts.
 * - The series data is typed using custom types defined in types/answered-tickets.types.ts.
 *
 * @usage
 * <AnsweredTickets />
 */

defineOptions({ name: 'AnsweredTickets' })

import { answered, answeredTicketsChart } from './data/answered-tickets.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
    <div class="card-body p-15 p-sm-20 p-md-25 pt-lg-30 letter-spacing">
      <div class="row justify-content-between">
        <div class="col-lg-5 col-md-5">
          <div class="icon position-relative text-warning rounded-1 text-center">
            <i class="flaticon-sterile-box"></i>
          </div>
        </div>
        <div class="col-lg-7 col-md-7">
          <div class="chart">
            <apexchart
              type="area"
              height="120"
              :options="answeredTicketsChart"
              :series="answered"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="info d-flex align-items-center justify-content-between mt-15">
        <span class="fs-13 d-block text-uppercase text-dark-emphasis fw-bold">
          ANSWERED TICKETS
        </span>
        <div class="d-flex align-items-center">
          <h4 class="fw-black mb-0 me-10 lh-1">13</h4>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            1.2%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
