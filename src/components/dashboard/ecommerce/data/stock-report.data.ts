/**
 * Static data for StockReport Component.
 *
 * Contains an array of product stock objects representing the stock report details.
 */

import type { ProductStock } from '../types/stock-report.types'

export const stocks: ProductStock[] = [
  {
    id: 1,
    item: 'Macbook Air - 8gb',
    productID: '#SPI-2123',
    price: '1650',
    date: '9 Aug, 2023',
    status: 'In Stock',
    class: 'text-outline-success',
    quantity: '50',
  },
  {
    id: 2,
    item: 'Samsung S23 Ultra',
    productID: '#TDZ-1123',
    price: '1850',
    date: '8 Aug, 2023',
    status: 'Out Of Stock',
    class: 'text-outline-danger',
    quantity: '0',
  },
  {
    id: 3,
    item: 'Logitech MX 250',
    productID: '#LPR-2233',
    price: '150',
    date: '7 Aug, 2023',
    status: 'In Stock',
    class: 'text-outline-success',
    quantity: '150',
  },
  {
    id: 4,
    item: 'iPhone 14 Pro',
    productID: '#NPK-1243',
    price: '1650',
    date: '6 Aug, 2023',
    status: 'In Stock',
    class: 'text-outline-success',
    quantity: '510',
  },
  {
    id: 5,
    item: 'Macbook Air - 16gb',
    productID: '#TIO-3036',
    price: '2150',
    date: '5 Aug, 2023',
    status: 'Low Stock',
    class: 'text-outline-danger-emphasis',
    quantity: '5',
  },
  {
    id: 6,
    item: 'iPhone 14 Pro Max',
    productID: '#ZVB-1632',
    price: '1950',
    date: '4 Aug, 2023',
    status: 'In Stock',
    class: 'text-outline-success',
    quantity: '24',
  },
  {
    id: 7,
    item: 'HP Hyper LTR',
    productID: '#DFR-1629',
    price: '1050',
    date: '3 Aug, 2023',
    status: 'Out Of Stock',
    class: 'text-outline-danger',
    quantity: '0',
  },
  {
    id: 8,
    item: 'Philips Monitor',
    productID: '#TAI-2123',
    price: '650',
    date: '2 Aug, 2023',
    status: 'In Stock',
    class: 'text-outline-success',
    quantity: '42',
  },
]
