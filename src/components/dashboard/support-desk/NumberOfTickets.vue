<script setup lang="ts">
/**
 * NumberOfTickets Component
 * -----------------------------------------------------------------------------
 * This component displays a bar chart representing the number of tickets
 * across different categories such as On Hold, Open, Due, and Unassigned.
 *
 * It uses ApexCharts to render the bar chart and imports its static
 * configuration and series data from a separate data file.
 *
 * @usage
 * <NumberOfTickets />
 *
 * @note
 * The chart uses static data and is styled with utility classes for consistency.
 */

import { numberOfTicketsSeries, numberOfTicketsChartOptions } from './data/number-of-tickets-data'

defineOptions({ name: 'NumberOfTickets' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white number-of-tickets-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="d-sm-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Number Of Tickets</h6>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>March</option>
            <option value="2" class="fw-medium">May</option>
            <option value="3" class="fw-medium">June</option>
            <option value="4" class="fw-medium">July</option>
          </select>
        </div>
      </div>

      <div id="numberOfTicketsChart" class="chart">
        <apexchart
          type="bar"
          height="251"
          :options="numberOfTicketsChartOptions"
          :series="numberOfTicketsSeries"
        />
      </div>

      <ul class="info ps-0 mb-0 list-unstyled text-center">
        <li class="d-inline-block">
          <div class="d-flex align-items-end mb-5">
            <h4 class="mb-0 text-primary lh-1 fw-black">62</h4>
            <span class="fw-bold text-success d-inline-block position-relative top-1 ms-5">
              <i class="flaticon-up-arrow fs-11 lh-1"></i>
              5.5%
            </span>
          </div>
          <span class="fw-medium fs-12 text-black-emphasis text-uppercase"> ON HOLD TICKETS </span>
        </li>

        <li class="d-inline-block">
          <div class="d-flex align-items-end mb-5">
            <h4 class="mb-0 text-info-light lh-1 fw-black">126</h4>
            <span class="fw-bold text-danger d-inline-block position-relative top-1 ms-5">
              <i class="flaticon-down-arrow fs-11 lh-1"></i>
              0.5%
            </span>
          </div>
          <span class="fw-medium fs-12 text-black-emphasis text-uppercase"> OPEN TICKETS </span>
        </li>

        <li class="d-inline-block">
          <div class="d-flex align-items-end mb-5">
            <h4 class="mb-0 text-warning lh-1 fw-black">57</h4>
            <span class="fw-bold text-success d-inline-block position-relative top-1 ms-5">
              <i class="flaticon-up-arrow fs-11 lh-1"></i>
              1.5%
            </span>
          </div>
          <span class="fw-medium fs-12 text-black-emphasis text-uppercase"> DUE TICKETS </span>
        </li>

        <li class="d-inline-block">
          <div class="d-flex align-items-end mb-5">
            <h4 class="mb-0 text-success lh-1 fw-black">126</h4>
            <span class="fw-bold text-danger d-inline-block position-relative top-1 ms-5">
              <i class="flaticon-down-arrow fs-11 lh-1"></i>
              0.5%
            </span>
          </div>
          <span class="fw-medium fs-12 text-black-emphasis text-uppercase">
            UNASSIGNED TICKETS
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
