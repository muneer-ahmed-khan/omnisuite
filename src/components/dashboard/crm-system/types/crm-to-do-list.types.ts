/**
 * @file crm-to-do-list.types.ts
 * @description
 * Defines the TypeScript interface for individual tasks in the ToDoList component.
 */

/**
 * Represents a task item in the to-do list.
 */
export interface ToDoListItem {
  /** Unique identifier for the task */
  id: number
  /** CSS class for the checkbox styling */
  class: string
  /** Main task label */
  label: string
  /** Short description below the label */
  shortText: string
}
