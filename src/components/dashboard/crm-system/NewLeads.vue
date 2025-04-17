<script setup lang="ts">
/**
 * NewLeads Component
 * -----------------------------------------------------------------------------
 * Displays a summary card with a mini donut chart showing the number of new leads
 * over recent weeks. Includes percentage change and comparison to the previous week.
 *
 * @usage
 * <NewLeads />
 *
 * @data
 * - `leadsSeries`: donut chart series data imported from data file.
 * - `newLeadsChartOptions`: ApexCharts configuration imported from data file.
 */

import { leadsSeries, newLeadsChartOptions } from './data/new-leads.data'

defineOptions({ name: 'NewLeads' })
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
            NEW LEADS
          </div>
          <h3 class="fw-black mb-15 lh-1">1058</h3>
          <span class="fw-bold text-success text-badge d-inline-block">
            <i class="flaticon-up-arrow fs-11 lh-1 position-relative top-1"></i>
            3.3%
          </span>
          <span class="d-block text-muted mt-8">Than last week</span>
        </div>
        <div class="col-xxxl-6 col-lg-6 col-md-6">
          <div class="chart style-two">
            <apexchart
              type="donut"
              height="150"
              id="newLeadsChart"
              :options="newLeadsChartOptions"
              :series="leadsSeries"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
