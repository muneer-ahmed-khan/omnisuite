/**
 * Static data for SalesByPOSLocation Component.
 *
 * Contains the sales series and configuration options for the radar chart that
 * compares allocated budget versus actual spending across various departments.
 */

import type { ApexOptions } from 'apexcharts'
import type { SalesSeries } from '../types/average-daily-sales.types'

// Sales series data. Here we use ApexAxisChartSeries as the type for the series.
export const sales: SalesSeries[] = [
  {
    name: 'Allocated Budget',
    data: [100, 20, 45, 20, 65, 20, 60],
  },
  {
    name: 'Actual Spending',
    data: [40, 40, 40, 60, 40, 80, 40],
  },
]

// Radar chart options using the built-in ApexOptions type.
export const salesByPosLocationChart: ApexOptions = {
  chart: {
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColors: '#d9e9ef',
        connectorColors: '#d9e9ef',
      },
    },
  },
  legend: {
    show: false,
  },
  colors: ['#6560F0', '#06B48A'],
  markers: {
    size: 5,
    strokeWidth: 0,
  },
  tooltip: {
    y: {
      formatter: function (val: number): string {
        return String(val)
      },
    },
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
  xaxis: {
    categories: ['Marketing', 'Sales', 'Dev', 'Tech', 'Support', 'Social', 'Admin'],
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
  yaxis: {
    tickAmount: 7,
    show: false,
    labels: {
      formatter: function (val: number, i: number): string {
        return i % 2 === 0 ? String(val) : ''
      },
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: ['#9C9AB6'],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
}
