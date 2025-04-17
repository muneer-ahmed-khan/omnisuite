/**
 * Static data for the AnsweredTickets component
 * -----------------------------------------------------------------------------
 * This file exports the chart series data and the chart options used in the
 * AnsweredTickets component. The series data represents the answered tickets
 * over a period, and the chart options define the visual configuration for the
 * area chart rendered by ApexCharts.
 */

import type { AnsweredTicketsSeries } from '../types/answered-tickets.types'
import type { ApexOptions } from 'apexcharts'

export const answered: AnsweredTicketsSeries[] = [
  {
    name: 'Answered Tickets',
    data: [8, 9, 10, 9, 9, 8, 9, 8, 9, 8, 7],
  },
]

export const answeredTicketsChart: ApexOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#F3C44C'],
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
