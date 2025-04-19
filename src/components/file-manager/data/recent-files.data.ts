// recent-files.data.ts
// This file contains the static data for the recent files table

import type { RecentFile } from '../types/recent-files.type'

// Static data for the recent files
export const recentFilesData: RecentFile[] = [
  {
    name: 'Product UI/UX Design',
    owner: 'Danielle Thompson',
    fileSize: '0.7 GB',
    listedDate: 'Mar 08, 2023',
    fileItem: 2,
    iconUrl: new URL('@/assets/images/icon/folder.png', import.meta.url).href,
  },
  {
    name: 'App Design & Development',
    owner: 'Sarah Taylor',
    fileSize: '521 MB',
    listedDate: 'Feb 13, 2023',
    fileItem: 6,
    iconUrl: new URL('@/assets/images/icon/folder.png', import.meta.url).href,
  },
  {
    name: 'Ubold-sketch-design.zip',
    owner: 'Gary Coley',
    fileSize: '64.2 MB',
    listedDate: 'Dec 18, 2022',
    fileItem: 3,
    iconUrl: new URL('@/assets/images/icon/folder.png', import.meta.url).href,
  },
  {
    name: 'Annualreport.pdf',
    owner: 'Cooper Sharwood',
    fileSize: '12.5 GB',
    listedDate: 'Nov 29, 2022',
    fileItem: 5,
    iconUrl: new URL('@/assets/images/icon/folder.png', import.meta.url).href,
  },
  {
    name: 'Wireframes',
    owner: 'Jasper Rigg',
    fileSize: '8.3 MB',
    listedDate: 'Nov 25, 2022',
    fileItem: 1,
    iconUrl: new URL('@/assets/images/icon/folder.png', import.meta.url).href,
  },
]
