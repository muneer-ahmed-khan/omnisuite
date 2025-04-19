/**
 * @file chat-content.types.ts
 * @description Type definitions for the ChatContent component
 */

/**
 * Represents a single action item in dropdown menus
 * @interface ChatAction
 * @property {string} icon - CSS class for the action icon
 * @property {string} label - Display text for the action
 */
export interface ChatAction {
  icon: string
  label: string
}

/**
 * Represents a user in the chat sidebar
 * @interface ChatUser
 * @property {string} avatar - Path to the user's avatar image
 * @property {string} name - User's display name
 * @property {string} lastSeen - Time since user was last active
 * @property {string} lastMessage - Preview of the last message
 * @property {boolean} isTyping - Whether the user is currently typing
 * @property {boolean} isActive - Whether this is the currently selected chat
 * @property {number} unreadCount - Number of unread messages from this user
 * @property {string} status - User's current status (e.g., "Active Now")
 * @property {ChatAction[]} actions - Available actions for this user
 */
export interface ChatUser {
  avatar: string
  name: string
  lastSeen: string
  lastMessage: string
  isTyping: boolean
  isActive: boolean
  unreadCount: number
  status?: string
  actions?: ChatAction[]
}

/**
 * Represents a single message in the chat thread
 * @interface ChatMessage
 * @property {boolean} isOutgoing - Whether message was sent by current user
 * @property {string} sender - Name of message sender
 * @property {string} avatar - Path to sender's avatar image
 * @property {string} time - Time the message was sent
 * @property {string} content - Message text content
 * @property {ChatAction[]} actions - Available actions for this message
 */
export interface ChatMessage {
  isOutgoing: boolean
  sender: string
  avatar: string
  time: string
  content: string
  actions: ChatAction[]
}

/**
 * Represents a navigation tab in the chat sidebar
 * @interface ChatTab
 * @property {string} path - Router path for the tab
 * @property {string} label - Display text for the tab
 */
export interface ChatTab {
  path: string
  label: string
}

/**
 * Represents a button in the message input area
 * @interface MessageButton
 * @property {string} icon - CSS class for the button icon
 * @property {boolean} isActive - Whether the button is in active state
 */
export interface MessageButton {
  icon: string
  isActive: boolean
}
