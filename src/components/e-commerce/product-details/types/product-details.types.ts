// File: product-details.types.ts
/**

Types for ProductDetails component data.
*/

export interface Product {
  id: number
  image: string
}
export interface InfoItem {
  label: string
  value: string
}
export interface FinanceData {
  monthly: string
  rate: string
  link: string
  linkText: string
  suffix: string
}
export interface StockData {
  status: string
  orderWithin: string
  delivery: string
}
export interface ProductInfo {
  title: string
  rating: number
  reviewsCount: number
  price: string
  description: string
  infoList: InfoItem[]
  finance: FinanceData
  stock: StockData
}
export interface ContactBox {
  heading: string
  strong: string
  icon: string
  link: string
  image: string
}
export interface DescriptionTab {
  paragraphs: string[]
  listItems: string[]
  contact: ContactBox
}
export interface RatingCount {
  star: number
  count: number
  percent: number
}
export interface ReviewUser {
  image: string
  name: string
}
export interface ReviewItemData {
  rating: number
  text: string
  user: ReviewUser
}
export interface ReviewsTab {
  overallRating: number
  rating: number
  reviewsCount: number
  ratingCounts: RatingCount[]
  reviewList: ReviewItemData[]
}
