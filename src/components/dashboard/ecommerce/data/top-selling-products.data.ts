/**
 * Static data for TopSellingProducts Component.
 *
 * Contains an array of product objects representing the top selling products.
 * Each product includes its id, styling class, relative image path, title, sold count, and stock quantity.
 */

import type { TopSellingProduct } from '../types/top-selling-products.types'

export const products: TopSellingProduct[] = [
  {
    id: 1,
    class: 'text-primary',
    image: new URL('@/assets/images/products/product-mini1.jpg', import.meta.url).href,
    title: 'Macbook Air - 8gb',
    itemSold: '14K',
    stock: '321',
  },
  {
    id: 2,
    class: 'text-primary',
    image: new URL('@/assets/images/products/product-mini2.jpg', import.meta.url).href,
    title: 'iPad Pro 14 - With Pencil',
    itemSold: '2.4K',
    stock: '250',
  },
  {
    id: 3,
    class: 'text-primary',
    image: new URL('@/assets/images/products/product-mini3.jpg', import.meta.url).href,
    title: 'Apple Smart Watch',
    itemSold: '22K',
    stock: '532',
  },
  {
    id: 4,
    class: 'text-primary',
    image: new URL('@/assets/images/products/product-mini4.jpg', import.meta.url).href,
    title: 'iPhone 14 Pro Max',
    itemSold: '10K',
    stock: '320',
  },
  {
    id: 5,
    class: 'text-primary',
    image: new URL('@/assets/images/products/product-mini5.jpg', import.meta.url).href,
    title: 'Clay Camera For Showcase',
    itemSold: '9K',
    stock: '121',
  },
]
