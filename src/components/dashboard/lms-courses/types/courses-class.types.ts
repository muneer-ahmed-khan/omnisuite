/**
 * Type definition for each course item used in the CoursesClass component.
 */
export interface Course {
  /** Unique identifier for the course */
  id: number

  /** Course title */
  title: string

  /** Number of classes in the course */
  classes: string

  /** Trainer/instructor for the course */
  trainer: string

  /** Date the course was published */
  date: string

  /** Number of students enrolled */
  enrolled: string

  /** Price of the course */
  price: string
}
