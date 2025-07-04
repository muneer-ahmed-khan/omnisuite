/**
 * @file to-do-list.data.ts
 * @description
 * Static task list data for the ToDoList component.
 */

import type { ToDoListItem } from '../types/crm-to-do-list.types'

/**
 * Array of tasks displayed in the to-do list.
 */
export const toDoList: ToDoListItem[] = [
  {
    id: 1,
    class: 'form-check-primary',
    label: 'Design a Facebook Ad',
    shortText: 'Create the full ad and share in Facebook',
  },
  {
    id: 2,
    class: 'form-check-info',
    label: 'Analyze Dashboard Data',
    shortText: 'Collect all data and analyze in the dashboard',
  },
  {
    id: 3,
    class: 'form-check-success',
    label: 'Taking Interview',
    shortText: 'Take interview of 13 candidates',
  },
  {
    id: 4,
    class: 'form-check-danger',
    label: 'Stockholder Meeting',
    shortText: 'Meeting with stakeholder at 11 am',
  },
  {
    id: 5,
    class: 'form-check-primary',
    label: 'Design a Instagram Ad',
    shortText: 'Provide review in Adlash dashboard',
  },
]
