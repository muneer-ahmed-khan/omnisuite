/**
 * Static chart data and configuration for Average Call Duration ApexChart.
 * This configuration is used in the AverageCallDuration component.
 */

import type { ApexOptions } from 'apexcharts'
import type { AverageCallDurationSeries } from '../types/average-call-duration-chart.type'

export const average: AverageCallDurationSeries[] = [
  {
    data: [7, 8, 9, 9, 8, 9, 8, 9, 11, 9, 8],
  },
]

export const averageCallDurationChart: ApexOptions = {
  chart: {
    height: 110,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#06B48A'],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
  },
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
