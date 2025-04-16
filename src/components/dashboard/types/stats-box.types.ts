/**
 * Types for StatsBoxes component
 *
 * Defines the structure of the data used for each statistics box.
 * Each stat contains information such as title, current value, previous value, percentage change, and associated icons.
 */

// Define the structure of a single stat box
export interface StatBox {
  id: number // Unique identifier for the stat box
  class: string // CSS class for styling the icon
  icon: string // Icon class to display in the stat box
  title: string // Title of the stat box (e.g., "Orders", "Shipping")
  sign: string // The sign symbol (e.g., "$" or "%" for formatting)
  currentValue: string // The current value to be displayed (formatted as string)
  previousValue: string // The previous value for comparison (formatted as string)
  classTwo: string // Custom class for styling the percentage change value
  percent: string // The percentage change between currentValue and previousValue
  iconUpDown: string // Icon class for up/down arrows indicating growth or decline
}
