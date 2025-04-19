/**
 * @file todays-schedule.data.ts
 * @description Data file containing all static information for the TodaysSchedule component
 */

import type { ScheduleStat, ScheduleItem } from '../types/todays-schedule.types'

/**
 * Interface defining the structure of the complete schedule data
 * @interface ScheduleData
 * @property {string} title - The title of the schedule component
 * @property {ScheduleStat[]} stats - Array of statistics about different schedule categories
 * @property {ScheduleItem[]} items - Array of schedule items for the day
 */
interface ScheduleData {
  title: string
  stats: ScheduleStat[]
  items: ScheduleItem[]
}

/**
 * The complete data set for the TodaysSchedule component
 * Contains title, statistics, and schedule items
 *
 * @constant
 * @type {ScheduleData}
 */
export const scheduleData: ScheduleData = {
  title: 'Todays Schedule',
  stats: [
    {
      count: 2,
      label: 'Meetings',
      colorClass: 'bg-primary',
    },
    {
      count: 2,
      label: 'Discussion',
      colorClass: 'bg-success',
    },
    {
      count: 1,
      label: 'Reviews',
      colorClass: 'bg-info',
    },
  ],
  items: [
    {
      timeRange: '10:00 - 11:00',
      timeOfDay: 'AM',
      title: 'Adlash Project Estimation Meeting',
      leadBy: 'John Harry',
      bgColorClass: 'bg-f2f1f9',
      iconBgClass: 'bg-primary text-white',
      iconTextClass: '',
      leadTextClass: 'text-primary',
    },
    {
      timeRange: '11:00 - 11:30',
      timeOfDay: 'AM',
      title: 'Dashboard HTML Design Review',
      leadBy: 'Jonathon Andy',
      bgColorClass: 'bg-f3f7f9',
      iconBgClass: 'bg-white text-info-light',
      iconTextClass: '',
      leadTextClass: 'text-info-light',
    },
    {
      timeRange: '12:00 - 1:30',
      timeOfDay: 'PM',
      title: 'Dashboard UI/UX Design Review',
      leadBy: 'Jonathon Andy',
      bgColorClass: 'bg-ecf3f2',
      iconBgClass: 'bg-white text-success',
      iconTextClass: '',
      leadTextClass: 'text-success',
    },
    {
      timeRange: '10:00 - 11:00',
      timeOfDay: 'AM',
      title: 'Adlash Project Estimation Meeting',
      leadBy: 'John Harry',
      bgColorClass: 'bg-f2f1f9',
      iconBgClass: 'bg-white text-primary',
      iconTextClass: '',
      leadTextClass: 'text-primary',
    },
    {
      timeRange: '12:00 - 1:30',
      timeOfDay: 'PM',
      title: 'Dashboard UI/UX Design Review',
      leadBy: 'Jonathon Andy',
      bgColorClass: 'bg-ecf3f2',
      iconBgClass: 'bg-white text-success',
      iconTextClass: '',
      leadTextClass: 'text-success',
    },
  ],
}
