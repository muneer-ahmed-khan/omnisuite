/**
 * Types used in the LeadDetails component.
 * Defines structure for tasks, deals, emails, and attachments.
 */

export interface Task {
  id: string
  title: string
  date: string
}

export interface Deal {
  id: string
  name: string
  amount: string
  status: 'Won Deal' | 'New Deal' | 'Cancelled'
  probability: string
  closingDate: string
}

export interface Email {
  id: string
  subject: string
  sender: string
  senderEmail: string
  status: 'Bounce' | 'Draft' | 'Spam' | 'Sent' | 'Delivered'
  date: string
}

export interface Attachment {
  id: string
  name: string
  size: string
  uploader: string
  date: string
  type: 'image' | 'text' | 'other'
  previewImage?: string
}
