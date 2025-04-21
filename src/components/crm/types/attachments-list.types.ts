// attachments-list.types.ts

/**
 * Represents a single attachment in the AttachmentsList component.
 */
export interface Attachment {
  id: string
  name: string
  iconClass: string
  size: string
  uploader: string
  date: string
  previewUrl?: string
}
