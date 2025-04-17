/**
 * Static data for the WebsiteVisitors component.
 *
 * Contains the series data and configuration options for the bar chart
 * that visualizes website visitor statistics over time.
 */

import type { ApexOptions } from 'apexcharts'
import type { WebsiteVisitorsData } from '../types/website-visitors.types'

// Series data for website visitors
export const website: WebsiteVisitorsData[] = [
  {
    name: 'Website Visitors',
    data: [65, 20, 95, 125, 40, 75, 30, 150],
  },
]

// Chart configuration options for website visitors
export const websiteVisitorsChart: ApexOptions = {
  chart: {
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      horizontal: false,
      columnWidth: '28%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#6560F0'],
  stroke: {
    show: false,
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      show: true,
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: '#9C9AB6',
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    show: true,
    tickAmount: 8,
    labels: {
      show: true,
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: ['#9C9AB6'],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  fill: {
    opacity: 1,
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
