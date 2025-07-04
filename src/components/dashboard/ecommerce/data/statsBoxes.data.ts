/**
 * Data for StatsBoxes component
 *
 * This file contains static data used by the StatsBoxes component, representing different metrics.
 * Each entry includes information such as the metric title, current value, previous value, percentage change, and associated icon.
 */

import type { StatBox } from '../types/stats-box.types'

export const statsBoxes: StatBox[] = [
  {
    id: 1,
    class: 'text-primary',
    icon: 'flaticon-sterile-box',
    title: 'ORDERS',
    sign: '',
    currentValue: '15,209',
    previousValue: '13,456',
    classTwo: 'text-success',
    percent: '5.5',
    iconUpDown: 'flaticon-up-arrow',
  },
  {
    id: 2,
    class: 'text-danger',
    icon: 'flaticon-trolley-cart',
    title: 'ITEMS SOLD',
    sign: '',
    currentValue: '1,204',
    previousValue: '1,103',
    classTwo: 'text-success',
    percent: '2.5',
    iconUpDown: 'flaticon-up-arrow',
  },
  {
    id: 3,
    class: 'text-info',
    icon: 'flaticon-card',
    title: 'REFUNDS',
    sign: '$',
    currentValue: '105',
    previousValue: '560',
    classTwo: 'text-danger',
    percent: '1.5',
    iconUpDown: 'flaticon-down-arrow',
  },
  {
    id: 4,
    class: 'text-success',
    icon: 'flaticon-sugar-cubes',
    title: 'GROSS SALE',
    sign: '$',
    currentValue: '12,345',
    previousValue: '10,320',
    classTwo: 'text-success',
    percent: '11.5',
    iconUpDown: 'flaticon-up-arrow',
  },
  {
    id: 5,
    class: 'text-primary',
    icon: 'flaticon-express-delivery',
    title: 'SHIPPING',
    sign: '$',
    currentValue: '360',
    previousValue: '450',
    classTwo: 'text-danger',
    percent: '1.5',
    iconUpDown: 'flaticon-down-arrow',
  },
  {
    id: 6,
    class: 'text-success',
    icon: 'flaticon-compare',
    title: 'PROCESSING',
    sign: '',
    currentValue: '84',
    previousValue: '64',
    classTwo: 'text-success',
    percent: '2.5',
    iconUpDown: 'flaticon-up-arrow',
  },
]
