/**
 * Data for WeeklySales component
 *
 * This file contains static data used by the WeeklySales component to display sales data for different time periods.
 * The data includes two sales series ("This Week" and "Previous Week") with values for each day of the week.
 */

import type { WeeklySalesData } from '../types/weekly-sales.types'
import type { ApexOptions } from 'apexcharts'

export const salesData: WeeklySalesData[] = [
  {
    name: 'This Week',
    data: [80, 110, 50, 100, 70, 100, 140],
  },
  {
    name: 'Previous Week',
    data: [60, 90, 20, 60, 40, 40, 100],
  },
]

export const weeklySalesChartOptions: ApexOptions = {
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  colors: ['#6560F0', '#6FD3F7'],
  legend: {
    position: 'top',
    fontSize: '14px',
    fontWeight: 500,
    horizontalAlign: 'center',
    fontFamily: 'Red Hat Display, sans-serif',
    labels: {
      colors: '#8E8DA1',
    },
    markers: {
      offsetY: -1,
      offsetX: -4,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    borderColor: '#d9e9ef',
  },
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
    y: {
      formatter: function (val: number) {
        return '$' + val + 'K'
      },
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
    tooltip: {
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        fontSize: '14px',
      },
    },
  },
  yaxis: {
    show: true,
    labels: {
      style: {
        fontFamily: 'Red Hat Display, sans-serif',
        colors: ['#9C9AB6'],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
}
