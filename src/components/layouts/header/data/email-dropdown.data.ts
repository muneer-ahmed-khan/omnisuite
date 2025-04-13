import user1 from '@/assets/images/user/user1.jpg'
import user2 from '@/assets/images/user/user2.jpg'
import user3 from '@/assets/images/user/user3.jpg'
import type { Message } from '../types/email-dropdown.types'

/**
 * Message Items Data
 *
 * Static list of messages used in the EmailDropdown component.
 */

export const messages: Message[] = [
  {
    id: 1,
    image: user1,
    name: 'Jacob Linowiski',
    timeAgo: '35 mins ago',
    messageSnippet: 'Hey Victor! Could you please...',
    unread: true,
  },
  {
    id: 2,
    image: user2,
    name: 'Angela Carter',
    timeAgo: '1 day ago',
    messageSnippet: 'How are you Victor? Would you please...',
    unread: false,
  },
  {
    id: 3,
    image: user3,
    name: 'Brad Traversy',
    timeAgo: '2 days ago',
    messageSnippet: 'Hey Victor! Could you please...',
    unread: false,
  },
]
