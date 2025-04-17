import type { Task } from '../types/active-tasks.types'
/**
 * Static data for the ActiveTasks component.
 * This data is used to display the active tasks in the project management dashboard.
 * Each task includes an id, category, background class, list of users assigned to the task,
 * title, text class, and completion percentage.
 */

export const tasks: Task[] = [
  {
    id: 1,
    category: 'Research',
    bgClass: 'bg-info-light',
    usersList: [
      {
        id: 1,
        image: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
      },
      {
        id: 2,
        image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
      },
    ],
    title: 'MVP',
    class: 'text-info-light',
    percent: '20',
  },
  {
    id: 2,
    category: 'Design',
    bgClass: 'bg-primary',
    usersList: [
      {
        id: 1,
        image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href,
      },
      {
        id: 2,
        image: new URL('@/assets/images/user/user6.jpg', import.meta.url).href,
      },
    ],
    title: 'UI Design',
    class: 'text-primary',
    percent: '60',
  },
  {
    id: 3,
    category: 'Frontend Dev',
    bgClass: 'bg-success',
    usersList: [
      {
        id: 1,
        image: new URL('@/assets/images/user/user10.jpg', import.meta.url).href,
      },
    ],
    title: 'Web Design',
    class: 'text-success',
    percent: '70',
  },
  {
    id: 4,
    category: 'Backend Dev',
    bgClass: 'bg-danger',
    usersList: [
      {
        id: 1,
        image: new URL('@/assets/images/user/user11.jpg', import.meta.url).href,
      },
      {
        id: 2,
        image: new URL('@/assets/images/user/user5.jpg', import.meta.url).href,
      },
      {
        id: 3,
        image: new URL('@/assets/images/user/user8.jpg', import.meta.url).href,
      },
    ],
    title: 'Node js',
    class: 'text-danger',
    percent: '55',
  },
  {
    id: 5,
    category: 'Testing',
    bgClass: 'bg-warning',
    usersList: [
      {
        id: 1,
        image: new URL('@/assets/images/user/user12.jpg', import.meta.url).href,
      },
      {
        id: 2,
        image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href,
      },
    ],
    title: 'UI Design',
    class: 'text-warning',
    percent: '45',
  },
]
