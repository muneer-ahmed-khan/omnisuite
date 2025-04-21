/**
 * emails-sidebar.data.ts
 *
 * Static sidebar data for EmailsSidebar.vue: mailbox folder items and filter items.
 */

import type { MailboxItem, FilterItem } from '../types/emails-sidebar.types'

export const mailboxItems: MailboxItem[] = [
  {
    label: 'Inbox',
    icon: 'flaticon-envelope',
    route: '/emails',
    count: 12,
    badgeColor: 'bg-danger',
    isActive: true,
  },
  { label: 'Snoozed', icon: 'flaticon-snooze', route: '/emails/snoozed' },
  {
    label: 'Draft',
    icon: 'flaticon-draft',
    route: '/emails/draft',
    count: 2,
    badgeColor: 'bg-success',
  },
  { label: 'Sent Email', icon: 'flaticon-status', route: '/emails/sent' },
  { label: 'Trash', icon: 'flaticon-delete', route: '/emails/trash' },
  {
    label: 'Spam',
    icon: 'flaticon-spam',
    route: '/emails/spam',
    count: 4,
    badgeColor: 'bg-warning',
  },
]

export const filterItems: FilterItem[] = [
  { label: 'Starred', icon: 'flaticon-star-3' },
  { label: 'Important', icon: 'flaticon-pin-1' },
]
