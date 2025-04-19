/**
 * Type definitions for Documents Files
 *
 * This file defines the types used in the DocumentsFiles component and the associated data.
 */

export interface DocumentFile {
  /** The name of the document file. */
  name: string
  /** The URL to the document file's icon. */
  iconUrl: string
  /** The alt text for the document icon. */
  iconAlt: string
  /** The link to the file manager page. */
  link: string
}
