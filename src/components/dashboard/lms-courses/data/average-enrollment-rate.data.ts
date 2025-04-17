/**
 * AverageEnrollmentRate Data
 * -----------------------------------------------------------------------------
 * Chart configuration and data series for enrollment rate visualization
 */

import type { ApexOptions } from 'apexcharts'
import type { SeriesData } from '../types/average-enrollment-rate.types'

export const average: SeriesData[] = [
  {
    name: 'On Sale Course',
    data: [80, 110, 50, 100, 70],
  },
  {
    name: 'Regular Paid Course',
    data: [60, 90, 20, 60, 40],
  },
]

export const averageEnrollmentRateChart: ApexOptions = {
  chart: {
    height: 265,
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  colors: ['#6560F0', '#6FD3F7'],
  legend: {
    show: true,
    offsetY: 15,
    position: 'top',
    fontWeight: 500,
    fontSize: '14px',
    horizontalAlign: 'right',
    fontFamily: 'Red Hat Display, sans-serif',
    labels: { colors: '#8E8DA1' },
    markers: {
      offsetX: -4,
    },
    itemMargin: { horizontal: 10 },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    borderColor: '#d9e9ef',
  },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
  xaxis: {
    categories: ['Launch', 'Week_01', 'Week_02', 'Week_03', 'Week_04'],
    labels: {
      show: true,
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: '#9C9AB6',
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    axisTicks: { show: false },
    axisBorder: { show: false },
    tooltip: {
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        fontSize: '14px',
      },
    },
  },
  yaxis: {
    show: true,
    tickAmount: 4,
    labels: {
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: ['#9C9AB6'],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
}
