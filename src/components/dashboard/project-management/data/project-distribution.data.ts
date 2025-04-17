import type { ApexOptions } from 'apexcharts'
import type { DropdownItem, DistributionData } from '../types/project-distribution.types'

/**
 * Static data for the project distribution donut chart.
 */

// Chart series data
export const distribution: DistributionData = [35, 35, 41, 45]

/**
 * ApexCharts configuration options.
 * Note: The type for this chart configuration is assumed to be handled elsewhere (for example, using the AxiosOption type).
 */
export const projectDistributionChart: ApexOptions = {
  chart: {
    type: 'donut',
    height: 382,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 4,
  },
  colors: ['#F1421B', '#06B48A', '#6560F0', '#6FD3F7'],
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontWeight: 500,
    fontSize: '14px',
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
  labels: ['Research', 'Design', 'Frontend', 'Backend'],
  tooltip: {
    style: {
      fontSize: '14px',
      fontFamily: 'Red Hat Display, sans-serif',
    },
  },
}

// Data for dropdown menu items
export const dropdownItems: DropdownItem[] = [
  { icon: 'flaticon-view', text: 'View' },
  { icon: 'flaticon-pen', text: 'Edit' },
  { icon: 'flaticon-delete', text: 'Delete' },
]
