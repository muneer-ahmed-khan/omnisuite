/**
 * StatsCardItem Interface
 *
 * Represents the data structure for a single statistics card item.
 */
export interface StatsCardItem {
  icon: string // Icon class for the card (e.g., "flaticon-sterile-box")
  iconColor: string // CSS class for the icon color (e.g., "text-primary")
  title: string // Title displayed on the card (e.g., "Active Projects")
  value: string | number // Main displayed value (e.g., "69" or "90%")
  badgeValue: string // Value displayed inside the badge (e.g., "5.5%")
  badgeColor: string // CSS class for the badge color (e.g., "text-success")
  badgeIcon: string // Icon class for the badge indicator (e.g., "flaticon-up-arrow")
  subtitle: string // Subtitle text for additional information (e.g., "Completed:")
  subtitleValue: string | number // Value corresponding to the subtitle (e.g., "25")
  bottomLabel: string // Additional descriptive text (e.g., "44 pending")
  bottomValue: string // Additional value text (e.g., "38%")
  progress: number // Percentage of the progress bar (0–100)
  progressBarClass?: string // Optional CSS class for customizing the progress bar color
  valueTextClass?: string // Optional CSS class for the main value text
}

/**
 * StatsUserImage Interface
 *
 * Represents a user avatar as an image in the members card.
 */
export interface StatsUserImage {
  type: 'image' // Indicates the user avatar is an image
  src: string // URL of the user's image
}

/**
 * StatsUserLabel Interface
 *
 * Represents a user avatar fallback displayed as a text label.
 */
export interface StatsUserLabel {
  type: 'label' // Indicates the user avatar is represented by a text label
  label: string // Text or initials for the avatar (e.g., "P", "S", "+24")
  bg: string // CSS class for the background color (e.g., "bg-primary-emphasis")
  textSize: string // CSS class for the text size (e.g., "fs-16")
}

/**
 * StatsUser Type
 *
 * A union type for representing a user avatar as either an image or a label.
 */
export type StatsUser = StatsUserImage | StatsUserLabel

/**
 * MembersCardData Interface
 *
 * Represents the data structure for the Total Members statistics card.
 */
export interface MembersCardData {
  icon: string // Icon class for the members card (e.g., "flaticon-user-3")
  iconColor: string // CSS class for the icon color (e.g., "text-danger")
  title: string // Title of the members card (e.g., "Total Members")
  value: string // Main value displayed on the card (e.g., "56")
  badgeValue: string // Badge text value (e.g., "2.5%")
  badgeColor: string // CSS class for the badge color (e.g., "text-success")
  badgeIcon: string // Icon class for the badge indicator (e.g., "flaticon-up-arrow")
  working: string // Number of working members (e.g., "54")
  avatars: StatsUser[] // List of user avatars to be displayed in the members card
}
