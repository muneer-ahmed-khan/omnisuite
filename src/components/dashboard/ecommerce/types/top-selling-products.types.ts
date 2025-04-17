/**
 * TopSellingProduct Interface
 *
 * Represents a single top selling product with its associated metrics.
 */
export interface TopSellingProduct {
  id: number // Unique identifier for the product.
  class: string // CSS class for styling (e.g., "text-primary").
  image: string // Relative image path (to be resolved from assets).
  title: string // Product title.
  itemSold: string // Items sold count, formatted as a string (e.g., "14K").
  stock: string // Stock quantity available, formatted as a string.
}
