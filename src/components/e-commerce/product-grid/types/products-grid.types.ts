/**
 * Type definitions for ProductsGrid component
 */

export interface Product {
  id: number
  name: string
  link: string
  image: string
  favIcon: string
  starClasses: string[]
  ratingValue: number
  reviewCount: number
  price: { current: number; original?: number; discount?: number }
}

export interface Pagination {
  currentPage: number
  totalResults: number
  pages: number[]
}
