/**

Static data for ProductDetails component.
*/
import type {
  Product,
  ProductInfo,
  DescriptionTab,
  ReviewsTab,
} from '../types/product-details.types.ts'

export const products: Product[] = [
  { id: 1, image: new URL('@/assets/images/products/product-details1.jpg', import.meta.url).href },
  { id: 2, image: new URL('@/assets/images/products/product-details2.jpg', import.meta.url).href },
  { id: 3, image: new URL('@/assets/images/products/product-details3.jpg', import.meta.url).href },
  { id: 4, image: new URL('@/assets/images/products/product-details4.jpg', import.meta.url).href },
]

export const productInfo: ProductInfo = {
  title: 'Complete Smart Watch With Multifuction  Black Dial',
  rating: 4,
  reviewsCount: 21,
  price: '$3050.00',
  description:
    'New 2023 Speedmaster Moonwatch Professional Co-Axial Master Chronometer 42mm Mens. Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
  infoList: [
    { label: 'MPN:', value: 'O31030425001002' },
    { label: 'Vendor:', value: 'Labila' },
    { label: 'Category:', value: 'Accessories' },
    { label: 'SKU:', value: 'Aw2314' },
  ],
  finance: {
    monthly: '$154.17',
    rate: '0%',
    link: '/product-details',
    linkText: 'View Options',
    suffix: 'Finance is subject to application & status.',
  },
  stock: {
    status: 'IN STOCK',
    orderWithin: '5 hours 31 minutes',
    delivery: 'free express delivery.',
  },
}

export const descriptionTab: DescriptionTab = {
  paragraphs: [
    'New 2023 Speedmaster Moonwatch Professional Co-Axial Master Chronometer 42mm Mens. Lorem ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ],
  listItems: [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo toterum pitael accustision.',
  ],
  contact: {
    heading: 'Enhance Your',
    strong: 'Campaign',
    icon: 'flaticon-right-arrow-1',
    link: '#',
    image: new URL('@/assets/images/contact.png', import.meta.url).href,
  },
}

export const reviewsTab: ReviewsTab = {
  overallRating: 4.8,
  rating: 4,
  reviewsCount: 21,
  ratingCounts: [
    { star: 5, count: 112, percent: 80 },
    { star: 4, count: 43, percent: 60 },
    { star: 3, count: 43, percent: 45 },
    { star: 2, count: 10, percent: 30 },
    { star: 1, count: 0, percent: 0 },
  ],
  reviewList: [
    {
      rating: 5,
      text: 'Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
      user: {
        image: new URL('@/assets/images/user/user1.jpg', import.meta.url).href,
        name: 'Alvarado Turner',
      },
    },
    {
      rating: 4,
      text: 'Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
      user: {
        image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
        name: 'Alina Smith',
      },
    },
    {
      rating: 3,
      text: 'Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
      user: {
        image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href,
        name: 'James Smith',
      },
    },
    {
      rating: 2,
      text: 'Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
      user: {
        image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href,
        name: 'Sarah Taylor',
      },
    },
    {
      rating: 5,
      text: 'Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
      user: {
        image: new URL('@/assets/images/user/user5.jpg', import.meta.url).href,
        name: 'Ivan Dan',
      },
    },
    {
      rating: 4,
      text: 'Lorem consectetur ipsum dolor sit amet, consectetur adipising, sed do eiusmod tempor amet.',
      user: {
        image: new URL('@/assets/images/user/user6.jpg', import.meta.url).href,
        name: 'Riley Dave',
      },
    },
  ],
}
