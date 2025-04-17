/**
 * @file students-progress.types.ts
 * @description Type definitions for the StudentsProgress component.
 */

/**
 * Represents a single student's progress.
 */
export interface StudentProgress {
  id: number
  image: string
  courses: string
  name: string
  designation: string
  percent: number
}
