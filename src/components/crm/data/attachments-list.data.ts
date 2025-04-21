// attachments-list.data.ts

import type { Attachment } from '../types/attachments-list.types'

/**
 * Static array of Attachment items for demonstration in the AttachmentsList component.
 */
export const attachments: Attachment[] = [
  {
    id: 'file1',
    name: 'Adlash_1.png',
    iconClass: 'flaticon-image',
    size: '555kb',
    uploader: 'J. Ronan',
    date: '13 Apr, 2023',
    previewUrl: new URL('@/assets/images/admin.jpg', import.meta.url).href,
  },
  {
    id: 'file2',
    name: 'Adlash_2.png',
    iconClass: 'flaticon-image',
    size: '1MB',
    uploader: 'J. Pinkman',
    date: '12 Apr, 2023',
  },
  {
    id: 'file3',
    name: 'Adlash_3.png',
    iconClass: 'flaticon-image',
    size: '472kb',
    uploader: 'A. Carter',
    date: '11 Apr, 2023',
  },
  {
    id: 'file4',
    name: 'Adlash_4.txt',
    iconClass: 'flaticon-document',
    size: '433kb',
    uploader: 'V. Loper',
    date: '10 Apr, 2023',
  },
]
