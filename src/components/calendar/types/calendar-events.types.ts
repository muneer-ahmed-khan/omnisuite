/**
 * Calendar Event Type
 *
 * Defines the structure of each calendar event object.
 */
export interface CalendarEvent {
  /** Event title or label */
  title: string
  /** Start date or timestamp of the event (ISO format) */
  start: string
  /** Optional end date or timestamp of the event (ISO format) */
  end?: string
}
