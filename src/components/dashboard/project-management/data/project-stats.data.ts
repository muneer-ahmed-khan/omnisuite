import type { ProjectStat } from '../types/project-stats.types'

/**
 * Raw project stats data.
 */
export const projectStats: ProjectStat[] = [
  {
    id: 1,
    image: new URL('@/assets/images/projects/project-mini1.jpg', import.meta.url).href,
    title: 'Adlash Dashboard Design',
    teamMembers: [
      { id: 1, image: new URL('@/assets/images/user/user1.jpg', import.meta.url).href },
      { id: 2, image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href },
      { id: 3, image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href },
    ],
    budget: '18,500',
    dueDate: '9th Aug, 2023',
    progress: 80,
    class: 'text-outline-primary',
    status: 'In Process',
    chartImage: new URL('@/assets/images/chart/chart1.png', import.meta.url).href,
  },
  {
    id: 2,
    image: new URL('@/assets/images/projects/project-mini2.jpg', import.meta.url).href,
    title: 'Banko CRM Dashboard Design',
    teamMembers: [
      { id: 1, image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href },
      { id: 2, image: new URL('@/assets/images/user/user5.jpg', import.meta.url).href },
    ],
    budget: '50,00',
    dueDate: '8th Aug, 2023',
    progress: 25,
    class: 'text-outline-danger',
    status: 'On Hold',
    chartImage: new URL('@/assets/images/chart/chart2.png', import.meta.url).href,
  },
  {
    id: 3,
    image: new URL('@/assets/images/projects/project-mini3.jpg', import.meta.url).href,
    title: 'Adlash Agency Design',
    teamMembers: [
      { id: 1, image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href },
      { id: 2, image: new URL('@/assets/images/user/user5.jpg', import.meta.url).href },
      { id: 3, image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href },
      { id: 4, image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href },
    ],
    budget: '108,500',
    dueDate: '7th Aug, 2023',
    progress: 100,
    class: 'text-outline-success',
    status: 'Completed',
    chartImage: new URL('@/assets/images/chart/chart3.png', import.meta.url).href,
  },
  {
    id: 4,
    image: new URL('@/assets/images/projects/project-mini4.jpg', import.meta.url).href,
    title: 'Adlash Dashboard Design',
    teamMembers: [
      { id: 1, image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href },
      { id: 2, image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href },
    ],
    budget: '8,500',
    dueDate: '6th Aug, 2023',
    progress: 40,
    class: 'text-outline-primary',
    status: 'In Process',
    chartImage: new URL('@/assets/images/chart/chart4.png', import.meta.url).href,
  },
  {
    id: 5,
    image: new URL('@/assets/images/projects/project-mini5.jpg', import.meta.url).href,
    title: 'Adlash App Design',
    teamMembers: [
      { id: 1, image: new URL('@/assets/images/user/user5.jpg', import.meta.url).href },
    ],
    budget: '1,500',
    dueDate: '5th Aug, 2023',
    progress: 55,
    class: 'text-outline-success',
    status: 'Completed',
    chartImage: new URL('@/assets/images/chart/chart5.png', import.meta.url).href,
  },
]
