/**
 * @file change-log.data.ts
 * @description Static data for the ChangeLog component including changelog entries and version history.
 */

import type { ChangelogEntry, VersionHistoryItem } from '../types/change-log.types'

/** List of changelog entries grouped by type */
export const changelogEntries: ChangelogEntry[] = [
  {
    type: 'Updated',
    color: 'primary',
    description: 'Added New Demos',
  },
  {
    type: 'Fixed',
    color: 'danger',
    description: 'Added New Demos',
  },
  {
    type: 'Added',
    color: 'success',
    description: 'New Pages',
  },
]

/** Version history timeline */
export const versionHistory: VersionHistoryItem[] = [
  { version: '1.0', date: 'May 15, 2023' },
  { version: '0.9', date: 'May 10, 2023' },
  { version: '0.8', date: 'May 05, 2023' },
  { version: '0.7', date: 'May 01, 2023' },
]
