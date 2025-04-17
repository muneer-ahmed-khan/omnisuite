/**
 * @file performance-progress.data.ts
 * @description
 * Static data for the PerformanceProgress component. Contains the series data
 * and the ApexCharts configuration options for the performance donut chart.
 */

import type { ApexOptions } from 'apexcharts'

/**
 * Series data representing the distribution of time (in percentages)
 * across different teaching activities.
 */
export const performance: number[] = [35, 35, 41]

/**
 * ApexCharts options for the Performance donut chart.
 */
export const performanceChart: ApexOptions = {
  chart: {
    type: 'donut',
    height: 270,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 4,
  },
  colors: ['#06B48A', '#6560F0', '#6FD3F7'],
  legend: {
    show: false,
    fontWeight: 500,
    fontSize: '14px',
    position: 'bottom',
    horizontalAlign: 'center',
    fontFamily: 'Red Hat Display, sans-serif',
    labels: {
      colors: '#9C9AB6',
    },
    markers: {
      offsetX: -2,
    },
    itemMargin: {
      horizontal: 8,
      vertical: 5,
    },
  },
  labels: ['Lesson Discuss', 'Taking Class', 'Work In Progress'],
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
}
