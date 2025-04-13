import type { NotificationItem } from '../types/notifications-dropdown.types'

/**
 * Notification Items Data
 *
 * Static list of notifications used in the NotificationsDropdown component.
 */
export const notificationItems: NotificationItem[] = [
  {
    icon: 'ph-bold ph-chat-centered-dots',
    prefix: 'You have requested to ',
    emphasis: 'withdrawal',
    suffix: '',
    time: '2 hrs ago',
    unread: true,
  },
  {
    icon: 'ph-bold ph-user-plus',
    prefix: '',
    emphasis: 'A new user',
    suffix: ' added in Adlash',
    time: '3 hrs ago',
    unread: true,
  },
  {
    icon: 'ph-bold ph-chat-centered-dots',
    prefix: 'You have requested to ',
    emphasis: 'withdrawal',
    suffix: '',
    time: '1 day ago',
    unread: false,
  },
]
