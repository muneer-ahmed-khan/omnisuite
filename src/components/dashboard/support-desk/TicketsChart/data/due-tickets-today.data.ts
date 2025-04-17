/**
 * Static data for the DueTicketsToday component
 * -----------------------------------------------------------------------------
 * Exports chart series and config for "due tickets today" mini-chart.
 */

import type { ApexOptions } from 'apexcharts'
import type { DueTicketsTodaySeries } from '../types/due-tickets-today.types'

export const due: DueTicketsTodaySeries[] = [
  {
    name: 'Due Tickets Today',
    data: [8, 9, 11, 9, 9, 8, 9, 8, 9, 8, 7],
  },
]

export const dueTicketsTodayChart: ApexOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#EF7C29'],
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
