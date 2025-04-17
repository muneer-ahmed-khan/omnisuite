/**
 * @file new-contact.data.ts
 * @description
 * Static data and chart configuration for the NewContact component.
 * Uses ApexOptions for strong typing of the chart configuration.
 */

import type { NewContactSeries } from '../types/new-contact.types'
import type { ApexOptions } from 'apexcharts'

/**
 * Series data for the New Contact bar chart.
 */
export const contactSeries: NewContactSeries[] = [
  {
    name: 'New Contact',
    data: [100, 30, 65, 90, 40, 100, 35],
  },
]

/**
 * ApexCharts configuration options for the New Contact chart.
 */
export const newContactChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 130,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#F3C44C'],
  stroke: {
    show: false,
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: {
      show: false,
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: '#9C9AB6',
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    tickAmount: 8,
    labels: {
      show: true,
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: ['#9C9AB6'],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: '#f0f0f0',
  },
}
