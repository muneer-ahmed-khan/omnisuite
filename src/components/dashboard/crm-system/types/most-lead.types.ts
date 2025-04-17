/**
 * @file most-lead.types.ts
 * @description
 * Defines the TypeScript interface for items displayed in the MostLead component.
 */

/**
 * Represents a single lead source entry with label, icon, progress, and count.
 */
export interface MostLeadItem {
  /** Unique identifier */
  id: number
  /** Display name of the lead source (e.g., “Social Media”) */
  label: string
  /** CSS class to style the icon container (e.g., text-primary) */
  circleClass: string
  /** CSS class for the icon itself (e.g., flaticon-share) */
  iconClass: string
  /** Percentage value for the progress bar (0–100) */
  percent: number
  /** Total count of leads */
  count: string
  /** Optional CSS class on the progress-bar element (e.g., 'bg-info') */
  barClass?: string
}
