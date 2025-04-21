/**
 * emails-sidebar.types.ts
 *
 * Type definitions for EmailsSidebar.vue data.
 */

/**
 * One item in the mailbox folder list.
 */
export interface MailboxItem {
  /** Display name of the mailbox (e.g. "Inbox") */
  label: string
  /** CSS class for the icon (e.g. "flaticon-envelope") */
  icon: string
  /** Vue router path for navigation */
  route: string
  /** Optional badge count (e.g. unread messages) */
  count?: number
  /** Marks this mailbox as the currently active view */
  isActive?: boolean

  badgeColor?: string
}

/**
 * One item in the filter list.
 */
export interface FilterItem {
  /** Display name of the filter (e.g. "Starred") */
  label: string
  /** CSS class for the icon (e.g. "flaticon-star-3") */
  icon: string
}
