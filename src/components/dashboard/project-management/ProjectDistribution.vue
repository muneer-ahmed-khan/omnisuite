<script setup lang="ts">
/**
 * @component ProjectDistribution
 *
 * @description
 * A project distribution card that displays a donut chart summarizing project data.
 * The component includes a dropdown button with options for actions such as View, Edit,
 * and Delete. It uses ApexCharts for rendering the donut chart.
 *
 * @usage
 * <template>
 *   <ProjectDistribution />
 * </template>
 *
 * @dataSources
 * - Static chart data and configuration are imported from "data/project-distribution.data.ts".
 *
 * @specialLogic
 * - The dropdown menu items are generated using a v-for loop based on static data for maintainability.
 */

defineOptions({
  name: 'ProjectDistribution',
})

import {
  distribution,
  projectDistributionChart,
  dropdownItems,
} from './data/project-distribution.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-15 d-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Project Distribution</h5>
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
            <li v-for="(item, index) in dropdownItems" :key="index">
              <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                <i :class="[item.icon, 'lh-1', 'me-8', 'position-relative', 'top-1']"></i>
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="projectDistributionChart" class="chart">
        <apexchart
          type="donut"
          height="382"
          :options="projectDistributionChart"
          :series="distribution"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
