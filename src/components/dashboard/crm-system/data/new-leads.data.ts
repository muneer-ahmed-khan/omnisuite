/**
 * @file new-leads.data.ts
 * @description
 * Static series data and ApexCharts configuration for the NewLeads component.
 * Uses `ApexOptions` for strong typing of the chart settings.
 */

import type { ApexOptions } from 'apexcharts'

/**
 * Series data for the New Leads donut chart.
 */
export const leadsSeries: number[] = [35, 35, 41]

/**
 * ApexCharts configuration options for the New Leads donut chart.
 */
export const newLeadsChartOptions: ApexOptions = {
  chart: {
    type: 'donut',
    height: 150,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ['#06B48A', '#F3C44C', '#6FD3F7'],
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
  labels: ['Week 1', 'Week 2', 'Week 3'],
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
}
