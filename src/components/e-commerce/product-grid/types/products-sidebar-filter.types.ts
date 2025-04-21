/**
 * Type definitions for ProductsSidebarFilter components
 */

export interface Category {
  name: string
  count: number
  link: string
}

export interface Brand {
  id: string
  name: string
  count: number
}

export interface Rating {
  id: string
  stars: number
  count: number
}
