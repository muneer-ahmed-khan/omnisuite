/**
 * TodaysCourse Data
 * -----------------------------------------------------------------------------
 * Course items for the TodaysCourse component carousel
 */

import type { Course } from '../types/todays-course.types'

export const courses: Course[] = [
  {
    id: 1,
    image: new URL('@/assets/images/courses/course-mini1.jpg', import.meta.url).href,
    title: 'Fundamental UI/UX Design Course',
    mins: '30',
    topics: '3',
    goal: '7 min 10 sec',
    progress: '60',
  },
  {
    id: 2,
    image: new URL('@/assets/images/courses/course-mini2.jpg', import.meta.url).href,
    title: 'How To Create Banner Social Media',
    mins: '50',
    topics: '5',
    goal: '2 min 12 sec',
    progress: '80',
  },
  {
    id: 3,
    image: new URL('@/assets/images/courses/course-mini1.jpg', import.meta.url).href,
    title: 'Fundamental UI/UX Design Course',
    mins: '50',
    topics: '7',
    goal: '5 min 17 sec',
    progress: '90',
  },
]
