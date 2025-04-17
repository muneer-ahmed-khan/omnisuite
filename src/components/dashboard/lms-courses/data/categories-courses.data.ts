/**
 * CategoriesCourses Data
 * -----------------------------------------------------------------------------
 * Course category items for the CategoriesCourses component
 */
import type { CategoriesCourse } from '../types/categories-courses.types'

export const categories: CategoriesCourse[] = [
  {
    id: 1,
    image: new URL('@/assets/images/courses/course-mini3.jpg', import.meta.url).href,
    title: 'Web Development',
    quantity: '40',
  },
  {
    id: 2,
    image: new URL('@/assets/images/courses/course-mini4.jpg', import.meta.url).href,
    title: 'Product Design',
    quantity: '34',
  },
  {
    id: 3,
    image: new URL('@/assets/images/courses/course-mini5.jpg', import.meta.url).href,
    title: '3d Modelling',
    quantity: '15',
  },
  {
    id: 4,
    image: new URL('@/assets/images/courses/course-mini6.jpg', import.meta.url).href,
    title: '3d Illustration & Art Design',
    quantity: '76',
  },
  {
    id: 5,
    image: new URL('@/assets/images/courses/course-mini7.jpg', import.meta.url).href,
    title: 'Animation Design',
    quantity: '23',
  },
  {
    id: 6,
    image: new URL('@/assets/images/courses/course-mini8.jpg', import.meta.url).href,
    title: 'Backend Development',
    quantity: '33',
  },
]
