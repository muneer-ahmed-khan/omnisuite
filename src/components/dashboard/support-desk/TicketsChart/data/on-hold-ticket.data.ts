/**
 * Static data for the OnHoldTicket component
 * -----------------------------------------------------------------------------
 * Exports Apex chart series and config for the On Hold Tickets card.
 */

import type { ApexOptions } from 'apexcharts'
import type { OnHoldTicketSeries } from '../types/on-hold-ticket.types'

export const hold: OnHoldTicketSeries[] = [
  {
    name: 'On Hold Tickets',
    data: [7, 8, 9, 9, 8, 9, 8, 9, 11, 9, 8],
  },
]

export const onHoldTicketsChart: ApexOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#6FD3F7'],
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
