/**
 * UnresolvedTicketsByPriorityTypes
 * -----------------------------------------------------------------------------
 * This file defines the types for the data used in the `UnresolvedTicketsByPriority`
 * component. It includes types for unresolved ticket data and chart configuration.
 */

/**
 * Represents the structure of unresolved tickets data, which includes ticket counts by priority.
 */
export interface UnresolvedTicketsData {
  name: string
  data: number[]
}
