/**
 * Type Definitions for the AnsweredTickets Component
 * -----------------------------------------------------------------------------
 * This file defines the type interfaces used for the AnsweredTickets component.
 * It includes the structure for the series data displayed in the chart.
 */

/**
 * Interface representing a single series in the AnsweredTickets chart.
 */
export interface AnsweredTicketsSeries {
  name: string
  data: number[]
}
