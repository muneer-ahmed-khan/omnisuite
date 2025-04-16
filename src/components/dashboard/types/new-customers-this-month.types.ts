/**
 * Types for NewCustomersThisMonth component
 */

// Define the type for each user item (either image or initial)
export type UserType = {
  type: 'image' | 'initial' // Indicates whether the user is represented by an image or initials
  src?: string // Image source URL, used only if type is 'image'
  label?: string // Label/initials, used only if type is 'initial'
  bg?: string // Background class for initials, used if type is 'initial'
  size?: number // Font size for the initials
}

// Define the structure of the customer statistics (growth and total)
export type CustomerStats = {
  total: string // Total number of customers (formatted as string)
  growth: number // Growth percentage of new customers
}

// Type for the join status message (e.g., "Joined Today")
export type JoinStatus = string
