/**
 * @file new-users.data.ts
 * @description
 * Static series data and chart configuration for the NewUsers component.
 * The series data array drives the area chart, and the ApexOptions type
 * is used to ensure strong typing of the chart settings.
 */

import type { NewUserSeries } from '../types/new-users.types'
import type { ApexOptions } from 'apexcharts'

/**
 * Series data for the New Users area chart.
 */
export const usersSeries: NewUserSeries[] = [
  {
    name: 'New Users',
    data: [7, 8, 9, 9, 8, 9, 8, 9, 11, 9, 8],
  },
]

/**
 * ApexCharts configuration options for the New Users area chart.
 */
export const newUsersChartOptions: ApexOptions = {
  chart: {
    height: 135,
    type: 'area',
    toolbar: { show: false },
  },
  colors: ['#6FD3F7'],
  dataLabels: { enabled: false },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
  },
  yaxis: { show: false },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: '#f0f0f0',
  },
  tooltip: {
    enabled: false,
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
}
