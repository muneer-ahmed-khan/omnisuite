// Types for EmailsList component.
export interface Email {
  id: string
  subject: string
  from: string
  sender: string
  status: 'Bounce' | 'Draft' | 'Spam' | 'Sent' | 'Delivered'
  date: string
}
