/**
 * @file change-log.type.ts
 * @description Type definitions for the ChangeLog component.
 */

/** A changelog item entry */
export interface ChangelogEntry {
  type: 'Updated' | 'Fixed' | 'Added'
  description: string
  color: 'primary' | 'danger' | 'warning' | 'success' | 'info'
}

/** A version history record */
export interface VersionHistoryItem {
  version: string
  date: string
}
