/**
 * UnresolvedTicketsByPriorityData
 * -----------------------------------------------------------------------------
 * This file contains the static data representing unresolved tickets by priority
 * used in the `UnresolvedTicketsByPriority` component. It holds the chart data
 * and the ticket counts for different priority levels.
 */

import type { ApexOptions } from 'apexcharts'
import type { UnresolvedTicketsData } from '../types/unresolved-tickets-by-priority.types'

/**
 * Static unresolved tickets data by priority
 */
export const unresolvedTicketsData: UnresolvedTicketsData[] = [
  {
    name: 'Urgent',
    data: [20, 30, 15, 8, 20, 5, 18],
  },
  {
    name: 'High',
    data: [20, 20, 10, 40, 20, 10, 15],
  },
  {
    name: 'Medium',
    data: [16, 20, 18, 10, 15, 10, 15],
  },
  {
    name: 'Low',
    data: [10, 20, 10, 18, 10, 8, 8],
  },
]

export const unresolvedTicketsChart: ApexOptions = {
  chart: {
    type: 'bar',
    height: 337,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['#6560F0', '#847ff3', '#9290f5', '#a4a0f7'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '14%',
      dataLabels: {
        total: {
          enabled: false,
        },
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      show: true,
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
    axisBorder: {
      show: false,
    },
  },
  fill: {
    opacity: 1,
  },
  yaxis: {
    show: true,
    tickAmount: 5,
    labels: {
      show: true,
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: ['#9C9AB6'],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    axisBorder: {
      show: true,
      color: '#eeeeee',
    },
  },
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
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    borderColor: '#d9e9ef',
  },
}
