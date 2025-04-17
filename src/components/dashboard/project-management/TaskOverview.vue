<script setup lang="ts">
/**
 * @component TaskOverview
 *
 * @description
 * A task overview card that displays a bar chart summarizing the tasks for the week.
 * The component includes a dropdown to filter the view by day (All, Sat, Sun, etc.) and an
 * ApexCharts bar chart for visualization.
 *
 * @usage
 * <template>
 *   <TaskOverview />
 * </template>
 *
 * @dataSources
 * - Static chart data and configuration are imported from "data/taskOverview.data.ts".
 * - Type definitions (including TaskSeries, ChartOptions, and AxiosOption) are imported from
 *   "types/taskOverview.types.ts".
 *
 * @specialLogic
 * - The dropdown options are generated using a v-for loop for maintainability.
 * - When integrating with an API, axios options for chart data can be defined using the AxiosOption type.
 */

defineOptions({
  name: 'TaskOverview',
})

// Import static data
import { taskOverviewData, taskOverviewChart } from './data/task-overview.data'

// Dropdown options for filtering
const filterOptions = ['All', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Task Overview</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Show</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option
              v-for="(item, index) in filterOptions"
              :key="item"
              :value="index + 1"
              class="fw-medium"
              :selected="item === 'All'"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div id="taskOverviewChart" class="chart">
        <apexchart
          type="bar"
          height="370"
          :options="taskOverviewChart"
          :series="taskOverviewData"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
