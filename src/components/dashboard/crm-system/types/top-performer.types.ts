/**
 * @file top-performer
 * .types.ts
 * @description
 * Defines the TypeScript interface for items displayed in the TopPerformerHelpAgent component.
 */

/**
 * Represents a single top-performing help agent.
 */
export interface TopPerformerHelpAgentItem {
  /** Unique identifier */
  id: number
  /** URL to the agent's avatar image */
  image: string
  /** Agent's full name */
  name: string
  /** Agent identifier code */
  AgentId: string
  /** Agent's average performance score */
  Average: string
}
