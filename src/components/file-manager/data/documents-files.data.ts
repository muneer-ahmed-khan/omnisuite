/**
 * Static Data for Documents Files
 *
 * This file contains the static data for the document files displayed in the DocumentsFiles component.
 * Each file includes an icon URL, file name, a link to the file manager, and an alt text for the icon.
 */

import type { DocumentFile } from '../types/documents-files.type'

export const documentsFilesData: DocumentFile[] = [
  {
    name: 'sketch-design.jpg',
    iconUrl: new URL('@/assets/images/icon/jpg.png', import.meta.url).href,
    iconAlt: 'jpg',
    link: '/file-manager',
  },
  {
    name: 'compile.png',
    iconUrl: new URL('@/assets/images/icon/png.png', import.meta.url).href,
    iconAlt: 'png',
    link: '/file-manager',
  },
  {
    name: 'integrations.pdf',
    iconUrl: new URL('@/assets/images/icon/pdf.png', import.meta.url).href,
    iconAlt: 'pdf',
    link: '/file-manager',
  },
  {
    name: 'contact@32.txt',
    iconUrl: new URL('@/assets/images/icon/txt.png', import.meta.url).href,
    iconAlt: 'txt',
    link: '/file-manager',
  },
  {
    name: 'app-design.doc',
    iconUrl: new URL('@/assets/images/icon/doc.png', import.meta.url).href,
    iconAlt: 'doc',
    link: '/file-manager',
  },
  {
    name: 'wireframes.xl4',
    iconUrl: new URL('@/assets/images/icon/xl4.png', import.meta.url).href,
    iconAlt: 'xl4',
    link: '/file-manager',
  },
  {
    name: 'image02.png',
    iconUrl: new URL('@/assets/images/icon/png.png', import.meta.url).href,
    iconAlt: 'png',
    link: '/file-manager',
  },
  {
    name: 'bold-sketch.doc',
    iconUrl: new URL('@/assets/images/icon/doc.png', import.meta.url).href,
    iconAlt: 'doc',
    link: '/file-manager',
  },
  {
    name: 'sketch-design.jpg',
    iconUrl: new URL('@/assets/images/icon/jpg.png', import.meta.url).href,
    iconAlt: 'jpg',
    link: '/file-manager',
  },
  {
    name: 'compile.png',
    iconUrl: new URL('@/assets/images/icon/png.png', import.meta.url).href,
    iconAlt: 'png',
    link: '/file-manager',
  },
  {
    name: 'integrations.pdf',
    iconUrl: new URL('@/assets/images/icon/pdf.png', import.meta.url).href,
    iconAlt: 'pdf',
    link: '/file-manager',
  },
  {
    name: 'contact@32.txt',
    iconUrl: new URL('@/assets/images/icon/txt.png', import.meta.url).href,
    iconAlt: 'txt',
    link: '/file-manager',
  },
]
