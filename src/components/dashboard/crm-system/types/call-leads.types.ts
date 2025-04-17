/**
 * Type definition for call stats used in the CallLeads component.
 */

export interface CallLeadsData {
  /** Icon representing the type of call (e.g., call, calendar) */
  icon: string

  /** Title label of the call stat card */
  label: string

  /** Number of leads associated with the call type */
  leadCount: number

  /** Description shown next to the lead count */
  leadText: string

  /** Percentage change indicator (positive or negative) */
  changeText: string

  /** Change type used to apply proper styling (e.g., "up" or "down") */
  changeType: 'up' | 'down'

  /** Text comparing to previous time period */
  comparedText: string
}
