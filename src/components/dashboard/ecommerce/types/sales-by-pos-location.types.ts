/**
 * Types for SalesByPOSLocation Component
 *
 * Defines the structure for the sales series data and the chart options
 * used in the SalesByPOSLocation component.
 */

// SalesSeries represents each data series shown on the radar chart.
export interface SalesSeries {
  name: string // Series name (e.g., "Allocated Budget")
  data: number[] // Array of values corresponding to the chart categories
}
