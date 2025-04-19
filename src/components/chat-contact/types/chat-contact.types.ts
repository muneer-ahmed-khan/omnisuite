/**
 * Type definitions for the ChatContact component
 */

/**
 * User interface representing chat participants
 */
export interface User {
  id: number
  name: string
  avatar: string
  isActive: boolean
  status: string
}

/**
 * Message interface representing individual chat messages
 */
export interface Message {
  id: number
  user: User
  text: string
  time: string
  isOwn: boolean
}

/**
 * MessageGroup interface for organizing messages by date
 */
export interface MessageGroup {
  date: string
  messages: Message[]
}
