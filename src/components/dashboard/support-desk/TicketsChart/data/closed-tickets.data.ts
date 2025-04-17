/**
 * Static data for the ClosedTickets component
 * -----------------------------------------------------------------------------
 * Exports chart series and configuration for the closed tickets chart.
 */

import type { ClosedTicketsSeries } from '../types/closed-tickets.types'
import type { ApexOptions } from 'apexcharts'

export const closed: ClosedTicketsSeries[] = [
  {
    name: 'Closed Tickets',
    data: [7, 8, 9, 9, 8, 9, 8, 9, 11, 9, 8],
  },
]

export const closedTicketsChart: ApexOptions = {
  chart: {
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
