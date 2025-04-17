/**
 * @file number-of-tickets-data.ts
 * @description Static series data and chart configuration options used by the NumberOfTickets component.
 */

import type { ApexOptions } from 'apexcharts'
import type { ChartSeries } from '../types/number-of-tickets-types'

/**
 * Chart series data for the Number of Tickets bar chart.
 * Contains ticket counts for each status over a fixed time period.
 */
export const numberOfTicketsSeries: ChartSeries[] = [
  {
    name: 'On Hold',
    data: [65, 25, 50, 58, 44, 64],
  },
  {
    name: 'Open',
    data: [58, 38, 78, 18, 55, 30],
  },
  {
    name: 'Due',
    data: [30, 59, 18, 35, 38, 40],
  },
  {
    name: 'Unassigned',
    data: [70, 45, 30, 50, 10, 50],
  },
]

/**
 * ApexCharts configuration options for the Number of Tickets bar chart.
 * Controls appearance, axes, grid, tooltip, legend, etc.
 */
export const numberOfTicketsChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 251,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      horizontal: false,
      columnWidth: '42%',
      borderRadiusApplication: 'end',
    },
  },
  colors: ['#6560F0', '#6FD3F7', '#F3C44C', '#06B48A'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 4,
    show: true,
    colors: ['transparent'],
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
  xaxis: {
    categories: ['Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06'],
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
