/**
 * Static data for ProductsSidebarFilter components
 */

import type { Category, Brand, Rating } from '../types/products-sidebar-filter.types'

export const previousSearches: string[] = [
  'Red Hat',
  'Phone',
  'Bed Furniture',
  'Hair Accessories',
  'Color: Purple',
]

export const categories: Category[] = [
  { name: 'All', count: 314, link: '/products' },
  { name: 'Accessories', count: 25, link: '/products' },
  { name: 'Bags', count: 5, link: '/products' },
  { name: 'Entertainment', count: 60, link: '/products' },
  { name: 'Electronics', count: 125, link: '/products' },
  { name: 'Gaming', count: 56, link: '/products' },
  { name: 'Mobile', count: 74, link: '/products' },
]

export const brands: Brand[] = [
  { id: 'allBrands', name: 'All', count: 222 },
  { id: 'sanungBrand', name: 'Sanung', count: 209 },
  { id: 'pixelBrand', name: 'Pixel', count: 32 },
  { id: 'channeleBrand', name: 'Channele', count: 100 },
  { id: 'oxiBrand', name: 'Oxi', count: 98 },
  { id: 'pandoraBrand', name: 'Pandora', count: 43 },
  { id: 'sugarBrand', name: 'Sugar', count: 56 },
]

export const ratings: Rating[] = [
  { id: 'rating4', stars: 4, count: 56 },
  { id: 'rating3', stars: 3, count: 25 },
  { id: 'rating2', stars: 2, count: 14 },
  { id: 'rating1', stars: 1, count: 5 },
]

export const initialMinPrice = 10
export const initialMaxPrice = 6000
