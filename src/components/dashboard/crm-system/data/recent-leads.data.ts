/**
 * @file recent-leads.data.ts
 * @description
 * Static array of recent leads used in the RecentLeads component.
 */

import type { RecentLead } from '../types/recent-leads.types'

/**
 * Array of recent leads to be displayed in a table.
 */
export const recentLeads: RecentLead[] = [
  {
    id: 1,
    image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href,
    name: 'J. Ronan',
    email: 'ronanjohnny@gmail.com',
    class: 'text-outline-success',
    status: 'Won Lead',
  },
  {
    id: 2,
    image: new URL('@/assets/images/user/user6.jpg', import.meta.url).href,
    name: 'J. Pinkman',
    email: 'pinky321@gmail.com',
    class: 'text-outline-info',
    status: 'New Lead',
  },
  {
    id: 3,
    image: new URL('@/assets/images/user/user13.jpg', import.meta.url).href,
    name: 'A. Carter',
    email: 'angela326421@gmail.com',
    class: 'text-outline-danger',
    status: 'Cold Lead',
  },
  {
    id: 4,
    image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
    name: 'V. Loper',
    email: 'lopervic@gmail.com',
    class: 'text-outline-success',
    status: 'Won Lead',
  },
  {
    id: 5,
    image: new URL('@/assets/images/user/user1.jpg', import.meta.url).href,
    name: 'W. White',
    email: 'whitespace@gmail.com',
    class: 'text-outline-info',
    status: 'New Lead',
  },
  {
    id: 6,
    image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href,
    name: 'T. Skyler',
    email: 'skylertina213@gmail.com',
    class: 'text-outline-danger',
    status: 'Cold Lead',
  },
]
