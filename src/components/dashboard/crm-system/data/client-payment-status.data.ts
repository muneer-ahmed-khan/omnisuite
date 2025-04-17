/**
 * @file client-payment-status.data.ts
 * @description Contains static data and ApexChart options for the ClientPaymentStatus component.
 */

import type { ApexOptions } from 'apexcharts'
import type { ClientSeries } from '../types/client-payment-status.type'

/**
 * Series data representing the number of clients per status.
 */
export const clientSeries: ClientSeries = [14, 23, 21, 17, 15]

/**
 * ApexChart options configuration for the client payment status polar area chart.
 */
export const clientPaymentStatusChart: ApexOptions = {
  chart: {
    height: 430,
    type: 'polarArea',
  },
  stroke: {
    colors: ['#ffffff'],
  },
  labels: ['Started', 'Cancel', 'Success', 'InProgress', 'Completed'],
  plotOptions: {
    polarArea: {
      rings: {
        strokeColor: '#E9E8EE',
      },
    },
  },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ['#06B48A', '#6FD3F7', '#F1421B', '#6560F0', '#F3C44C'],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    fontWeight: 500,
    fontSize: '14px',
    position: 'bottom',
    horizontalAlign: 'left',
    fontFamily: 'Red Hat Display, sans-serif',
    labels: {
      colors: '#8E8DA1',
    },
    markers: {
      offsetX: -4,
    },
    itemMargin: {
      horizontal: 10,
      vertical: 5,
    },
  },
}
