/**
 * @file fundamental-courses.data.ts
 * @description
 * Static list of fundamental courses used by the FundamentalCourses component.
 * Image URLs are resolved at build time via `new URL(..., import.meta.url).href`.
 */

import type { FundamentalCourse } from '../types/fundamental-courses.types'

export const fundamentalCourses: FundamentalCourse[] = [
  {
    id: 1,
    bgClass: '',
    bgClassImage: 'bg-primary',
    image: new URL('@/assets/images/icon/vue.png', import.meta.url).href,
    title: 'Fundamental Vue 3 JS Framework Course',
    shortDesc: 'Solve your coding problems in this course with mentors',
    lessons: '45',
    students: '71',
    mins: '59',
  },
  {
    id: 2,
    bgClass: 'bg2',
    bgClassImage: 'bg-success',
    image: new URL('@/assets/images/icon/laravel.png', import.meta.url).href,
    title: 'Fundamental Laravel Developer',
    shortDesc: 'Solve your coding problems in this course with mentors',
    lessons: '45',
    students: '71',
    mins: '59',
  },
]
