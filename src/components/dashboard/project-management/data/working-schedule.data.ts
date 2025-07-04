import type { WorkingScheduleItem } from '../types/working-schedule.types'

/**
 * Static schedule data for the WorkingSchedule component.
 * Data imported from the provided JSON.
 */
export const schedules: WorkingScheduleItem[] = [
  {
    id: 1,
    bgClass: 'bg-f2f1f9',
    time: '10:00 - 11:00 AM',
    iconClass: 'bg-primary text-white',
    title: 'Adlash Project Estimation Meeting',
    class: 'text-primary',
    leadBy: 'John Harry',
  },
  {
    id: 2,
    bgClass: 'bg-f3f7f9',
    time: '11:00 - 11:30 AM',
    iconClass: 'bg-white text-info-light',
    title: 'Dashboard HTML Design Review',
    class: 'text-info-light',
    leadBy: 'Jonathon Andy',
  },
  {
    id: 3,
    bgClass: 'bg-ecf3f2',
    time: '12:00 - 1:30 PM',
    iconClass: 'bg-white text-success',
    title: 'Dashboard UI/UX Design Review',
    class: 'text-success',
    leadBy: 'John Harry',
  },
  {
    id: 4,
    bgClass: 'bg-f2f1f9',
    time: '10:00 - 11:00 AM',
    iconClass: 'bg-white text-primary',
    title: 'Adlash Project Estimation Meeting',
    class: 'text-primary',
    leadBy: 'Jonathon Andy',
  },
  {
    id: 5,
    bgClass: 'bg-ecf3f2',
    time: '12:00 - 1:30 PM',
    iconClass: 'bg-white text-success',
    title: 'Dashboard UI/UX Design Review',
    class: 'text-success',
    leadBy: 'John Harry',
  },
]
