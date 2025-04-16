// Static data for the ExpectedEarnings component

import type { EarningsBreakdownItem } from '../types/expected-earnings.types'
import type { ApexOptions } from 'apexcharts'

export const earnings = [50, 35, 45]

export const earningBreakdown: EarningsBreakdownItem[] = [
  { category: 'Groceries', amount: '$9,500' },
  { category: 'Electronics', amount: '$11,500' },
  { category: 'Others', amount: '$11,000' },
]

export const earningChartOptions: ApexOptions = {
  dataLabels: {
    enabled: false,
  },
  colors: ['#06B48A', '#6560F0', '#6FD3F7'],
  legend: {
    show: false,
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Red Hat Display, sans-serif',
    labels: {
      colors: '#9C9AB6',
    },
    markers: {
      offsetX: -2,
      offsetY: 1,
    },
  },
  stroke: {
    width: 0,
  },
  tooltip: {
    enabled: false,
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
}
