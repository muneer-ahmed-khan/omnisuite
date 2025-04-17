/**
 * Static Data for WhatHappening Component
 * -----------------------------------------------------------------------------
 * This file contains the static update data used in the WhatHappening component.
 * Each update displays summary information such as a status label and number.
 *
 * @file data/what-happening.data.ts
 */

import type { Update } from '../types/support-desk-what-happening.types'

export const updates: Update[] = [
  {
    id: 1,
    bgClass: 'bg-f2f1f9',
    title: 'UNRESOLVED',
    class: 'text-primary',
    number: '523',
  },
  {
    id: 2,
    bgClass: 'bg-faf7f7',
    title: 'OVER DUE',
    class: 'text-danger',
    number: '209',
  },
  {
    id: 3,
    bgClass: 'bg-ecf3f2',
    title: 'RESOLVED',
    class: 'text-success',
    number: '1836',
  },
]
