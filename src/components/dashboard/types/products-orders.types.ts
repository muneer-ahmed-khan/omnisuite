/**
 * ProductOrder Interface
 *
 * Represents a single product order entry in the ProductsOrders component.
 * Defines all relevant properties for an order including identifiers, pricing,
 * customer info, and styling classes.
 */
export interface ProductOrder {
  id: number
  orderID: string
  createdTime: string
  image: string
  name: string
  totalPrice: string
  profitPrice: string
  class: string
  status: string
}
