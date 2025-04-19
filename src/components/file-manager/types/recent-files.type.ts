// recent-files.type.ts
// This file contains the TypeScript types for the recent files data

// Type definition for each recent file entry
export interface RecentFile {
  name: string
  owner: string
  fileSize: string
  listedDate: string
  fileItem: number
  iconUrl: string
}
