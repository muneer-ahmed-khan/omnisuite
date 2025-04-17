// Static data for the WhatHappening component

import type { WelcomeStat } from '../types/ecommerce-what-happening.types'
import welcome1 from '@/assets/images/welcome/welcome1.png'

/**
 * Username to be shown in greeting
 */
export const userName = 'Victor'

/**
 * Daily performance statistics
 */
export const welcomeStats: WelcomeStat[] = [
  {
    label: 'TODAY’S VISIT',
    value: '15,209',
  },
  {
    label: 'TODAY’S TOTAL SALES',
    value: '$29,115.50',
  },
]

/**
 * Image to be displayed in the welcome card
 */
export const welcomeImage = welcome1
