// Static data and configuration for the Average Daily Sales chart.

import type { ApexOptions } from 'apexcharts'
import type { SalesSeries } from '../types/average-daily-sales.types'

export const sales: SalesSeries[] = [
  {
    name: 'Sales',
    data: [100, 30, 65, 90, 40, 100, 35],
  },
]

export const averageDailySalesChart: ApexOptions = {
  chart: {
    type: 'bar',
    height: 150,
    width: 220,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '35%',
      borderRadiusApplication: 'around',
    },
  },
  dataLabels: { enabled: false },
  colors: ['#6FD3F7'],
  stroke: { show: false },
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
    axisTicks: { show: false },
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
  fill: { opacity: 1 },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
    y: {
      formatter: (val: number) => `${val}%`,
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: '#f0f0f0',
  },
}
