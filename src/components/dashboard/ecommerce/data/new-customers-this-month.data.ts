// Static data for the NewCustomersThisMonth component

import type { UserType, CustomerStats, JoinStatus } from '../types/new-customers-this-month.types'

export const customerStats: CustomerStats = {
  total: '4.5 K',
  growth: 4.3,
}

export const customerUsers: UserType[] = [
  { type: 'image', src: new URL('@/assets/images/user/user1.jpg', import.meta.url).href },
  { type: 'image', src: new URL('@/assets/images/user/user2.jpg', import.meta.url).href },
  { type: 'initial', label: 'P', bg: 'bg-primary-emphasis', size: 16 },
  { type: 'image', src: new URL('@/assets/images/user/user4.jpg', import.meta.url).href },
  { type: 'initial', label: 'S', bg: 'bg-primary', size: 16 },
  { type: 'image', src: new URL('@/assets/images/user/user3.jpg', import.meta.url).href },
  { type: 'initial', label: '+24', bg: 'bg-secondary', size: 14 },
]

export const joinStatus: JoinStatus = 'Joined Today'
