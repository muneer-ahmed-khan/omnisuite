/**
 * @file revenue-target-by-country.data.ts
 * @description
 * Static data and image reference for the RevenueTargetByCountry component.
 * Includes target metrics per country and the map illustration URL.
 */

import type { RevenueTargetByCountryItem } from '../types/revenue-target-by-country.types'

/**
 * Array of revenue targets for each country.
 */
export const revenues: RevenueTargetByCountryItem[] = [
  {
    id: 1,
    country: 'USA',
    progressColor: 'text-primary',
    progress: 52,
    bgColor: 'bg-primary',
    target: '12,302',
  },
  {
    id: 2,
    country: 'Australia',
    progressColor: 'text-success',
    progress: 40,
    bgColor: 'bg-success',
    target: '10,432',
  },
  {
    id: 3,
    country: 'Canada',
    progressColor: 'text-warning',
    progress: 22,
    bgColor: 'bg-warning',
    target: '5,456',
  },
  {
    id: 4,
    country: 'China',
    progressColor: 'text-danger',
    progress: 15,
    bgColor: 'bg-danger',
    target: '2,234',
  },
]

/**
 * URL for the world map illustration displayed alongside the list.
 */
export const mapImage = new URL('@/assets/images/map.png', import.meta.url).href
