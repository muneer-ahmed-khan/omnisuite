/**
 * ProductStock Interface
 *
 * Represents a single product stock entry in the StockReport component.
 * Defines the structure for stock report details including item name, product ID,
 * price, date added, stock status, and quantity.
 */
export interface ProductStock {
  id: number
  item: string
  productID: string
  price: string
  date: string
  status: string
  class: string
  quantity: string
}
