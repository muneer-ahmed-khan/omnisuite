<script setup lang="ts">
/**
 * AverageEnrollmentRate Component
 * -----------------------------------------------------------------------------
 * Displays a line chart showing course enrollment trends over time with
 * interactive dropdown menu for card actions.
 *
 * @usage
 * <AverageEnrollmentRate />
 *
 * @note
 * - Uses ApexCharts for data visualization
 * - Chart configuration imported from data file
 * - Contains contextual dropdown menu with view/edit/delete options
 */

import { average, averageEnrollmentRateChart } from './data/average-enrollment-rate.data'

defineOptions({ name: 'AverageEnrollmentRate' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-md-10 d-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Average Enrollment Rate</h5>
        <div class="dropdown">
          <button
            class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="flaticon-dots"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                View
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                Edit
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                <i class="flaticon-delete lh-1 me-8 position-relative top-1"> </i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="averageEnrollmentRateChart" class="chart">
        <apexchart
          type="line"
          height="265"
          :options="averageEnrollmentRateChart"
          :series="average"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
