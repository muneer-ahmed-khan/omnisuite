/**
 * Type definitions for ProductsList component
 */

export interface ProductRow {
  id: number
  name: string
  link: string
  image: string
  category: string
  dateAdded: string // ISO date string
  price: number
  orders: number
  stock: number
  rating: number
  reviewCount: number
}

export interface Pagination {
  currentPage: number
  totalResults: number
  pages: number[]
}
