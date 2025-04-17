<script setup lang="ts">
/**
 * NewContact Component
 * -----------------------------------------------------------------------------
 * Displays a summary card with a mini bar chart showing the number of new contacts
 * over recent months. Includes percentage change and a comparison to the previous week.
 *
 * @usage
 * <NewContact />
 *
 * @data
 * - `contactSeries`: chart series data imported from a data file.
 * - `newContactChartOptions`: ApexCharts configuration imported from a data file.
 */

import { contactSeries, newContactChartOptions } from './data/new-contact.data'

defineOptions({ name: 'NewContact' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white crm-stats-box">
    <div class="card-body letter-spacing">
      <div class="row justify-content-between justify-content-end">
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div
            class="icon mb-8 d-flex align-items-center text-uppercase text-dark-emphasis fw-medium"
          >
            <i class="flaticon-sterile-box text-primary me-6"></i>
            NEW CONTACT
          </div>
          <h3 class="fw-black mb-15 lh-1">695</h3>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            5.5%
          </span>
          <span class="d-block text-muted mt-8">Than last week</span>
        </div>
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div class="chart">
            <apexchart
              type="bar"
              height="130"
              id="newContactChart"
              :options="newContactChartOptions"
              :series="contactSeries"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
