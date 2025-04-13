/**
 * NotificationItem Interface
 *
 * Represents a single notification item in the dropdown.
 */
export interface NotificationItem {
  /** Icon class for the notification */
  icon: string
  /** Text that prefixes the notification message */
  prefix: string
  /** Emphasized part of the notification message */
  emphasis: string
  /** Text that suffixes the notification message */
  suffix: string
  /** Time label for when the notification was generated */
  time: string
  /** Marks whether the notification is unread */
  unread?: boolean
}
