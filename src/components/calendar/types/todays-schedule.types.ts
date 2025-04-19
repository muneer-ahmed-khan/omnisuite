/**
 * @file todays-schedule.types.ts
 * @description Type definitions for the TodaysSchedule component
 */

/**
 * Represents a statistic category in the schedule summary
 * @interface ScheduleStat
 * @property {number} count - The number of items in this category
 * @property {string} label - The display name of the category (e.g., "Meetings")
 * @property {string} colorClass - CSS class name for the color indicator
 */
export interface ScheduleStat {
  count: number
  label: string
  colorClass: string
}

/**
 * Represents a scheduled item in the day's agenda
 * @interface ScheduleItem
 * @property {string} timeRange - The time range for the item (e.g., "10:00 - 11:00")
 * @property {string} timeOfDay - AM or PM indicator
 * @property {string} title - The title of the scheduled item
 * @property {string} leadBy - The name of the person leading the meeting/event
 * @property {string} bgColorClass - CSS class for the item's background color
 * @property {string} iconBgClass - CSS class for the icon's background
 * @property {string} iconTextClass - CSS class for the icon's text color
 * @property {string} leadTextClass - CSS class for the leader name's text color
 */
export interface ScheduleItem {
  timeRange: string
  timeOfDay: string
  title: string
  leadBy: string
  bgColorClass: string
  iconBgClass: string
  iconTextClass: string
  leadTextClass: string
}
