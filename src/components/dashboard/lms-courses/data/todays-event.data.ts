/**
 * TodaysEvent Data
 * -----------------------------------------------------------------------------
 * Event items for the TodaysEvent component carousel
 */

import type { Event } from '../types/todays-event.types'

export const events: Event[] = [
  {
    id: 1,
    image: new URL('@/assets/images/courses/course-mini1.jpg', import.meta.url).href,
    title: 'Fundamental UI/UX Design Course',
    speakers: '2',
    topics: '5',
    start: '7',
    progress: '60',
  },
  {
    id: 2,
    image: new URL('@/assets/images/courses/course-mini2.jpg', import.meta.url).href,
    title: 'How To Create Banner Social Media',
    speakers: '6',
    topics: '4',
    start: '2',
    progress: '80',
  },
  {
    id: 3,
    image: new URL('@/assets/images/courses/course-mini1.jpg', import.meta.url).href,
    title: 'Fundamental UI/UX Design Course',
    speakers: '3',
    topics: '6',
    start: '5',
    progress: '90',
  },
]
