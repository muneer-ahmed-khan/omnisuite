/**
 * @file most-lead.data.ts
 * @description
 * Static data for the MostLead component. Each entry represents a lead source,
 * its icon styling, progress percentage, and total count.
 */

import type { MostLeadItem } from '../types/most-lead.types'

export const mostLeadData: MostLeadItem[] = [
  {
    id: 1,
    label: 'Social Media',
    circleClass: 'text-primary',
    iconClass: 'flaticon-share',
    percent: 52,
    count: '12,302',
    barClass: '', // default bar color
  },
  {
    id: 2,
    label: 'Email',
    circleClass: 'text-info',
    iconClass: 'flaticon-envelope',
    percent: 75,
    count: '15,210',
    barClass: 'bg-info',
  },
  {
    id: 3,
    label: 'Call',
    circleClass: 'text-success',
    iconClass: 'flaticon-phone-call',
    percent: 62,
    count: '13,312',
    barClass: 'bg-success',
  },
  {
    id: 4,
    label: 'Others',
    circleClass: 'text-danger',
    iconClass: 'flaticon-copy',
    percent: 17,
    count: '1,421',
    barClass: 'bg-danger',
  },
]
