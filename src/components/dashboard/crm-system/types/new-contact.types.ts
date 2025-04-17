/**
 * @file new-contact.types.ts
 * @description
 * Defines the series data type for the NewContact component's chart.
 */

/**
 * Represents a single series entry in the New Contact bar chart.
 */
export interface NewContactSeries {
  /** Series name (e.g., 'New Contact') */
  name: string
  /** Data points for each category (e.g., months) */
  data: number[]
}
