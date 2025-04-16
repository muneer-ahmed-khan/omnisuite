/**
 * Types for WeeklySales component
 *
 * Defines the structure of the data used for the WeeklySales component.
 * This includes sales data for different weeks and chart configuration options.
 */

// Type for sales data of the week
export interface WeeklySalesData {
  name: string // Name of the sales series (e.g., "This Week")
  data: number[] // Array of daily sales values
}
