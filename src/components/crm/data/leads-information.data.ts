/**
 * leads-information.data.ts
 *
 * Static data for the LeadsInformation component, including profile and detailed info.
 */

import type { LeadProfile, LeadDetailItem } from '../types/leads-information.types'

export const leadProfile: LeadProfile = {
  name: 'Jonathon Ronan',
  title: 'Chief Software Developer',
  company: 'Solit IT Solution',
  image: new URL('@/assets/images/user/user14.jpg', import.meta.url).href,
}

export const leadDetails: LeadDetailItem[] = [
  {
    label: 'Email',
    icon: 'flaticon-mail-inbox-app',
    iconColor: 'text-success',
    value: 'johnathon23@gmail.com',
    link: 'mailto:johnathon23@gmail.com',
    isPrimary: true,
  },
  {
    label: 'Phone No',
    icon: 'flaticon-telephone-call',
    iconColor: 'text-info',
    value: '+1-321-456-8756',
    link: 'tel:+1-321-456-8756',
  },
  {
    label: 'Website',
    icon: 'flaticon-web',
    iconColor: 'text-primary',
    value: 'Johnydev.com',
    link: '#',
  },
  {
    label: 'Industry',
    icon: 'flaticon-industry',
    iconColor: 'text-warning',
    value: 'Medium',
  },
  {
    label: 'No Of Employees',
    icon: 'flaticon-employee',
    iconColor: 'text-info',
    value: '125',
  },
  {
    label: 'Annual Revenue',
    icon: 'flaticon-money',
    iconColor: 'text-success',
    value: '$ 24000 USD',
  },
  {
    label: 'Last Contacted',
    icon: 'flaticon-date-1',
    iconColor: 'text-info',
    value: '12 March 2023, 10:54 AM',
  },
  {
    label: 'Lead Source',
    icon: 'flaticon-search-1',
    iconColor: 'text-primary',
    value: 'Social media advertisement',
  },
  {
    label: 'Lead Status',
    icon: 'flaticon-status',
    iconColor: 'text-warning',
    value: 'New Lead',
    isPrimary: false,
  },
]
