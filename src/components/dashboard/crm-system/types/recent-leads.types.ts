/**
 * @file recent-leads.types.ts
 * @description
 * TypeScript interface for individual lead items in the RecentLeads component.
 */

/**
 * Represents a recent lead entry.
 */
export interface RecentLead {
  /** Unique ID of the lead */
  id: number
  /** Path to the lead's avatar image */
  image: string
  /** Full name of the lead */
  name: string
  /** Email address of the lead */
  email: string
  /** CSS class representing the lead's status badge */
  class: string
  /** Status label */
  status: string
}
