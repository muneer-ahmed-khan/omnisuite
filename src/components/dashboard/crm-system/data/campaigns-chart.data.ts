/**
 * campaigns-chart.data.ts
 *
 * Static chart data for the CampaignsChart component.
 */

import type { ApexOptions } from 'apexcharts'

/**
 * Chart configuration and series for the Campaigns radial bar chart.
 */

export const campaigns: number[] = [44, 55, 67]
export const campaignsChartData: ApexOptions = {
  chart: {
    height: 325,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '16px',
          fontWeight: 700,
          fontFamily: 'Red Hat Display, sans-serif',
        },
        value: {
          fontWeight: 500,
          fontSize: '14px',
          fontFamily: 'Red Hat Display, sans-serif',
        },
      },
    },
  },
  colors: ['#6560F0', '#6FD3F7', '#06B48A'],
  labels: ['Total Sent', 'Reached', 'Opened'],
}
