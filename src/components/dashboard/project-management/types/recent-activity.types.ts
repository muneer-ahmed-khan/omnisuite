/**
 * Represents a dropdown menu item.
 */
export interface DropdownItem {
  icon: string
  text: string
}

/**
 * Represents a segment of the activity text, with optional bold styling.
 */
export interface ActivitySegment {
  text: string
  bold?: boolean
}

/**
 * Represents a single recent activity item.
 */
export interface RecentActivityItem {
  icon: string
  segments: ActivitySegment[]
  time: string
  link: string
}
