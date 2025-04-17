/**
 * @file students-progress.data.ts
 * @description Static data for the StudentsProgress component. This file provides a
 * list of student progress entries, each representing a student’s current course
 * completion status, name, designation, and profile image.
 *
 * The data conforms to the `StudentProgress` interface defined in:
 *   ../types/students-progress.types.ts
 */

import type { StudentProgress } from '../types/students-progress.types'

export const studentsProgress: StudentProgress[] = [
  {
    id: 1,
    image: new URL('@/assets/images/user/user1.jpg', import.meta.url).href,
    courses: '3/10',
    name: 'Jonathon Ronan',
    designation: 'UI/UX Design Course',
    percent: 33,
  },
  {
    id: 2,
    image: new URL('@/assets/images/user/user13.jpg', import.meta.url).href,
    courses: '8/10',
    name: 'Angela Carter Jenny',
    designation: 'Web Design & Development',
    percent: 80,
  },
  {
    id: 3,
    image: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
    courses: '5/10',
    name: 'Walter White',
    designation: 'Python Development',
    percent: 50,
  },
  {
    id: 4,
    image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href,
    courses: '29/30',
    name: 'Victoria Zanderwhist',
    designation: 'Data Engineering',
    percent: 95,
  },
  {
    id: 5,
    image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
    courses: '7/10',
    name: 'Sarah Taylor',
    designation: 'HTML Course',
    percent: 70,
  },
]
