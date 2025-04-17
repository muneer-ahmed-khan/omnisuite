/**
 * @file fundamental-courses.types.ts
 * @description
 * Type definitions for the FundamentalCourses component. Defines the shape
 * of each course item displayed in the fundamental courses list.
 */

/**
 * Represents a single fundamental course entry.
 */
export interface FundamentalCourse {
  /** Unique identifier */
  id: number
  /** CSS class applied to the card background */
  bgClass: string
  /** CSS class applied to the icon background */
  bgClassImage: string
  /** Path to the course icon image */
  image: string
  /** Title of the course */
  title: string
  /** Short description of the course */
  shortDesc: string
  /** Number of lessons in the course */
  lessons: string
  /** Number of students enrolled */
  students: string
  /** Estimated duration in minutes */
  mins: string
}
