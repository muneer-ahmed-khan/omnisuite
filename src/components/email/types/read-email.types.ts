// read-email.types.ts

/**
 * Types for the ReadEmail component.
 * Defines the shape of the data objects used in the email.
 */

/**
 * Type representing an email sender or recipient.
 */
export interface Contact {
  name: string
  email: string
  avatar?: string
}

/**
 * Type for the email content, including subject, body, checklists, etc.
 */
export interface EmailContent {
  greeting: string
  body: string[]
  checklists: string[]
}

/**
 * Type representing the full email data structure.
 */
export interface EmailData {
  sender: Contact
  recipient: Contact
  subject: string
  date: string
  content: EmailContent
  senderSignature: string
  senderName: string
}
