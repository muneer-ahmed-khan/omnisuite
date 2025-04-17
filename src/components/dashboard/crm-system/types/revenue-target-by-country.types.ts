/**
 * @file revenue-target-by-country.types.ts
 * @description
 * Defines the TypeScript interface for items displayed in the
 * RevenueTargetByCountry component.
 */

/**
 * Represents revenue target data for a specific country.
 */
export interface RevenueTargetByCountryItem {
  /** Unique identifier */
  id: number
  /** Country name */
  country: string
  /** CSS class for the progress‑percentage text color */
  progressColor: string
  /** Progress percentage toward the target (0–100) */
  progress: number
  /** CSS class for the progress‑bar background color */
  bgColor: string
  /** Formatted target value (e.g., "12,302") */
  target: string
}
