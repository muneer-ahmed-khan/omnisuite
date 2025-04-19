/**
 * Type definitions for the ChatGroup component
 */

export interface GroupUser {
  avatar: string
  name: string
  messagePreview: string
  isActive?: boolean
  unreadCount?: number
}

export interface ChatTab {
  path: string
  label: string
}

export interface GroupMember {
  avatar?: string
  initial?: string
  backgroundColor?: string
}

export interface MessageAction {
  icon: string
  label: string
}

export interface ChatMessage {
  user?: {
    avatar: string
    name: string
    time: string
  }
  isOutgoing: boolean
  time: string
  content: string
}

export interface MessageButton {
  icon: string
  isActive: boolean
}
