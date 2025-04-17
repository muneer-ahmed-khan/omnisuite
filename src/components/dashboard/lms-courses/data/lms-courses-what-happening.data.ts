/**
 * Static Data for WhatHappening Component
 * -----------------------------------------------------------------------------
 * Contains the list of updates displayed in the welcome card of the LMS Courses
 * dashboard, including total courses, certificates, scores, and hours learned.
 */

import type { WhatHappeningUpdate } from '../types/lms-courses-what-happening.types'

export const updates: WhatHappeningUpdate[] = [
  {
    id: 1,
    bgClass: 'bg-f2f1f9',
    title: 'COURSES',
    class: 'text-primary',
    number: 23,
  },
  {
    id: 2,
    bgClass: 'bg-faf7f7',
    title: 'CERTIFICATES',
    class: 'text-danger',
    number: 9,
  },
  {
    id: 3,
    bgClass: 'bg-ecf3f2',
    title: 'SCORE',
    class: 'text-success',
    number: 4.8,
  },
  {
    id: 4,
    bgClass: 'bg-f3f7f9',
    title: 'HRS LEARNED',
    class: 'text-info',
    number: 822,
  },
]

export const welcomeImage = new URL('@/assets/images/welcome/welcome3.png', import.meta.url).href
