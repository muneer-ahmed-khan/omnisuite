/**
 * Represents the structure of unresolved tickets data.
 */
export interface UnsolvedTicket {
  client: string
  image: string
  subject: string
  status: string
  statusVariant: string
  priority: string
  priorityColor: string
  selectedAgent: string
  agents: string[]
}
