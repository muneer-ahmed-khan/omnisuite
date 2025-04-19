/**
 * AssetsFiles Data
 * -----------------------------------------------------------------------------
 * Static list of asset categories shown in the `AssetsFiles` component.
 * Each entry defines the folder name, file count, total size, and route link.
 */

import type { AssetFile } from '../types/assets-files.types'

export const assetsFilesData: AssetFile[] = [
  { id: 1, name: 'Projects', files: '387 Files', size: '4.5 GB', link: '/file-manager' },
  { id: 2, name: 'Documents', files: '1572 Files', size: '7.3 GB', link: '/file-manager' },
  { id: 3, name: 'Media', files: '12341 Files', size: '2.8 GB', link: '/file-manager' },
  { id: 4, name: 'Applications', files: '2487 Files', size: '5.0 GB', link: '/file-manager' },
  { id: 5, name: 'ET Template', files: '321 Files', size: '2.2 GB', link: '/file-manager' },
  { id: 6, name: 'React Template', files: '543 Files', size: '3.3 GB', link: '/file-manager' },
  { id: 7, name: 'Material UI', files: '123 Files', size: '1.1 GB', link: '/file-manager' },
  { id: 8, name: 'WP Themes', files: '54 Files', size: '500 MB', link: '/file-manager' },
  { id: 9, name: 'Personal Photos', files: '311 Files', size: '2.5 GB', link: '/file-manager' },
  { id: 10, name: 'Mobile Apps', files: '387 Files', size: '4.5 GB', link: '/file-manager' },
  { id: 11, name: 'Important Files', files: '333 Files', size: '3.1 GB', link: '/file-manager' },
  { id: 12, name: 'Angular Template', files: '453 Files', size: '2.2 GB', link: '/file-manager' },
]

export const folderIconUrl = new URL('@/assets/images/icon/folder.png', import.meta.url).href
