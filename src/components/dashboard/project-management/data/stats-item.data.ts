import type { StatsCardItem, MembersCardData } from '../types/stats-item.types'

/**
 * An array containing the data for each statistics card displayed on the dashboard.
 */
export const statsCardsData: StatsCardItem[] = [
  {
    icon: 'flaticon-sterile-box', // Icon class for the card
    iconColor: 'text-primary', // CSS class for the icon color
    title: 'Active Projects', // Card title
    value: '69', // Main value displayed on the card
    badgeValue: '5.5%', // Badge text value
    badgeColor: 'text-success', // Badge text color class
    badgeIcon: 'flaticon-up-arrow', // Icon class for the badge indicator
    subtitle: 'Completed:', // Subtitle text for additional information
    subtitleValue: '25', // Value corresponding to the subtitle
    bottomLabel: '44 pending', // Additional descriptive text
    bottomValue: '38%', // Additional value text
    progress: 38, // Percentage of the progress bar
  },
  {
    icon: 'flaticon-sugar-cubes',
    iconColor: 'text-success',
    title: 'Total Task',
    value: '94',
    badgeValue: '3.5%',
    badgeColor: 'text-danger',
    badgeIcon: 'flaticon-down-arrow',
    subtitle: 'Completed:',
    subtitleValue: '44',
    bottomLabel: '50 pending',
    bottomValue: '42%',
    progress: 42,
    progressBarClass: 'bg-success', // Optional custom progress bar class
  },
  {
    icon: 'flaticon-idea',
    iconColor: 'text-info',
    title: 'Productivity',
    value: '90%',
    badgeValue: '9.3%',
    badgeColor: 'text-success',
    badgeIcon: 'flaticon-up-arrow',
    subtitle: 'Revenue:',
    subtitleValue: '$2500',
    bottomLabel: '$4504 more to go',
    bottomValue: '50%',
    progress: 50,
    progressBarClass: 'bg-info-light',
    valueTextClass: 'text-info-light', // Optional custom value text class
  },
]

/**
 * Data for the Total Members statistics card.
 */
export const membersCardData: MembersCardData = {
  icon: 'flaticon-user-3', // Icon class for the members card
  iconColor: 'text-danger', // CSS class for the icon color
  title: 'Total Members', // Card title
  value: '56', // Main value displayed on the card
  badgeValue: '2.5%', // Badge text value
  badgeColor: 'text-success', // Badge text color class
  badgeIcon: 'flaticon-up-arrow', // Icon class for the badge indicator
  working: '54', // Number of working members
  avatars: [
    // List of user avatars to be displayed with updated src format
    { type: 'image', src: new URL('@/assets/images/user/user1.jpg', import.meta.url).href },
    { type: 'image', src: new URL('@/assets/images/user/user2.jpg', import.meta.url).href },
    { type: 'label', label: 'P', bg: 'bg-primary-emphasis', textSize: 'fs-16' },
    { type: 'image', src: new URL('@/assets/images/user/user4.jpg', import.meta.url).href },
    { type: 'label', label: 'S', bg: 'bg-primary', textSize: 'fs-16' },
    { type: 'image', src: new URL('@/assets/images/user/user3.jpg', import.meta.url).href },
    { type: 'label', label: '+24', bg: 'bg-secondary', textSize: 'fs-14' },
  ],
}
