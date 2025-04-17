/**
 * CustomerSatisfactionData
 * -----------------------------------------------------------------------------
 * This file contains the static data representing customer satisfaction metrics
 * used in the `CustomerSatisfaction` component.
 */

import type { ApexOptions } from 'apexcharts'
import type { CustomerSatisfactionSeries } from '../types/customer-satisfaction.types'

export const customerSatisfactionSeries: CustomerSatisfactionSeries = [90, 10]

export const customerSatisfactionChart: ApexOptions = {
  chart: {
    type: 'pie',
  },
  labels: ['Positive', 'Negative'],
  colors: ['#6560F0', '#F1421B'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: false,
  },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
}
