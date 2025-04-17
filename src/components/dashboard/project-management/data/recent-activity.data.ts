import type { DropdownItem, RecentActivityItem } from '../types/recent-activity.types'

/**
 * Static data for the dropdown menu items in the RecentActivity component.
 */
export const dropdownItems: DropdownItem[] = [
  { icon: 'flaticon-view', text: 'View' },
  { icon: 'flaticon-pen', text: 'Edit' },
  { icon: 'flaticon-delete', text: 'Delete' },
]

/**
 * Static data representing a list of recent activity items.
 */
export const recentActivityItems: RecentActivityItem[] = [
  {
    icon: 'ph-duotone ph-envelope-simple',
    segments: [{ text: 'J. Ronan', bold: true }, { text: ' sent an Email' }],
    time: '35 mins ago',
    link: '/project-management',
  },
  {
    icon: 'ph-duotone ph-first-aid-kit',
    segments: [
      { text: 'Victoria', bold: true },
      { text: ' archived a ' },
      { text: 'Board for Project', bold: true },
      { text: ' in team' },
    ],
    time: '1 hr ago',
    link: '/project-management',
  },
  {
    icon: 'ph-duotone ph-check-circle',
    segments: [
      { text: 'Walter White', bold: true },
      { text: ' completed the project ' },
      { text: '“The Dashboard”', bold: true },
    ],
    time: '2 hrs ago',
    link: '/project-management',
  },
  {
    icon: 'ph-duotone ph-shield-plus',
    segments: [
      { text: 'Jennifer', bold: true },
      { text: ' added ' },
      { text: 'Micheal', bold: true },
      { text: ' in the project ' },
      { text: '“The Adlash Design”', bold: true },
    ],
    time: '3 hrs ago',
    link: '/project-management',
  },
  {
    icon: 'ph-duotone ph-envelope-simple',
    segments: [{ text: 'S. Smith', bold: true }, { text: ' sent an Email' }],
    time: '1 day ago',
    link: '/project-management',
  },
]
