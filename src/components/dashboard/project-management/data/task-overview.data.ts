import type { ApexOptions } from 'apexcharts'
import type { TaskSeries } from '../types/task-overview.types'

/**
 * Static data for the task overview chart.
 */
export const taskOverviewData: TaskSeries[] = [
  {
    name: 'This Week',
    data: [250, 200, 280, 150, 190, 350, 220, 180],
  },
]

/**
 * ApexCharts options for the task overview chart.
 */
export const taskOverviewChart: ApexOptions = {
  chart: {
    type: 'bar',
    height: 370,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '24%',
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
    categories: ['Spt_01', 'Spt_02', 'Spt_03', 'Spt_04', 'Spt_05', 'Spt_06', 'Spt_07', 'Spt_08'],
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
  yaxis: {
    show: true,
    tickAmount: 6,
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
      color: '#eee',
    },
  },
  fill: {
    opacity: 1,
    // Uncomment and adjust the following lines if a gradient fill is desired.
    // type: 'gradient',
    // gradient: {
    //     opacityTo: 1,
    //     opacityFrom: 0.01,
    //     type: "vertical",
    //     stops: [0, 60, 100]
    // }
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
