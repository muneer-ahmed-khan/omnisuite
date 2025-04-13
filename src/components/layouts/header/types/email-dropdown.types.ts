/**
 * Message Interface
 *
 * Represents a single message item in the dropdown.
 */

export interface Message {
  id: number
  image: string
  name: string
  timeAgo: string
  messageSnippet: string
  unread?: boolean
}
