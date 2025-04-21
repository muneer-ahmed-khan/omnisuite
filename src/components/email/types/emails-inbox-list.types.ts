// emails-list.types.ts
/**
 * emails-list.types.ts
 *
 * Type definitions for emails displayed in EmailsList.vue.
 */

export interface EmailAttachment {
  name: string
}

export interface EmailItem {
  id: string
  starred: boolean
  starType: 'default' | 'warning'
  user: { name: string; image: string; alt: string }
  badge?: string
  title: string
  snippet?: string
  time: string
  isBgColor?: boolean
  attachments?: EmailAttachment[]
}
