/**
 * customers-list.types.ts
 *
 * Defines the structure for each customer item in the CustomersList component.
 */

export interface Customer {
  /** Full display name of the customer */
  name: string
  /** Customer's email address */
  email: string
  /** Customer's phone number */
  phone: string
  /** Amount received from the customer */
  received: string
  /** Amount still due by the customer */
  due: string
  /** Last login date of the customer */
  lastLogin: string
  /** Current account status (e.g., Active, Inactive) */
  status: 'Active' | 'Inactive'
  /** Path to the customer's avatar image */
  image: string
}
