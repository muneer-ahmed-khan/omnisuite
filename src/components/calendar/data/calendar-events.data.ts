/**
 * Calendar Event Data
 *
 * Static data representing scheduled events on the calendar.
 * Each event includes a title, start date/time, and optionally an end date/time.
 */

import type { CalendarEvent } from '../types/calendar-events.types'

export const calendarEvents: CalendarEvent[] = [
  {
    title: 'All Day Event',
    start: '2023-08-27',
  },
  {
    title: 'Long Event',
    start: '2023-07-30',
    end: '2023-08-01',
  },
  {
    title: 'Repeating Event',
    start: '2023-08-14T16:00:00',
  },
  {
    title: 'Conference',
    start: '2023-08-09',
    end: '2023-08-11',
  },
  {
    title: 'Meeting',
    start: '2023-08-10T10:30:00',
    end: '2023-08-10T12:30:00',
  },
  {
    title: 'Lunch',
    start: '2023-08-10T12:00:00',
  },
  {
    title: 'Meeting',
    start: '2023-08-10T14:30:00',
  },
  {
    title: 'Happy Hour',
    start: '2023-08-10T17:30:00',
  },
  {
    title: 'Dinner',
    start: '2023-08-10T20:00:00',
  },
  {
    title: 'Long Event',
    start: '2023-08-25',
    end: '2023-08-27',
  },
]
