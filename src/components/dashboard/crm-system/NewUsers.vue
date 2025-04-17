<script setup lang="ts">
/**
 * NewUsers Component
 * -----------------------------------------------------------------------------
 * Displays a summary card with a mini area chart showing the number of new users
 * over recent intervals. Includes percentage change and comparison to the previous week.
 *
 * @usage
 * <NewUsers />
 *
 * @data
 * - `usersSeries`: Series data imported from a data file.
 * - `newUsersChartOptions`: ApexCharts configuration imported from a data file.
 */

import { usersSeries, newUsersChartOptions } from './data/new-users.data'

defineOptions({ name: 'NewUsers' })
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
            NEW USERS
          </div>
          <h3 class="fw-black mb-15 lh-1">721</h3>
          <span class="fw-bold text-danger text-badge d-inline-block">
            <i class="flaticon-down-arrow fs-11 lh-1 position-relative top-1"></i>
            2.5%
          </span>
          <span class="d-block text-muted mt-8">Than last week</span>
        </div>
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div class="chart">
            <apexchart
              type="area"
              height="135"
              id="newUsersChart"
              :options="newUsersChartOptions"
              :series="usersSeries"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
