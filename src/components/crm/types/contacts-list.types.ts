/**
 * contacts-list.types.ts
 *
 * Defines the type structure for a contact record in the ContactsList component.
 */

export interface Contact {
  /** Full display name of the contact */
  name: string
  /** Contact's email address */
  email: string
  /** Contact's phone number */
  phone: string
  /** Company name the contact is affiliated with */
  company: string
  /** Date the contact joined (formatted) */
  joinDate: string
  /** Numerical lead score for the contact */
  leadScore: number
  /** Path to the contact’s avatar image */
  image: string
}
