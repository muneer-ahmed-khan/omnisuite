/**
 * @file new-users.types.ts
 * @description
 * Defines the TypeScript interface for the series data used in the NewUsers component.
 */

/**
 * Represents a single series for the New Users area chart.
 */
export interface NewUserSeries {
  /** Display name for the series (e.g., "New Users") */
  name: string
  /** Data points for each time interval */
  data: number[]
}
