/**
 * leads-information.types.ts
 *
 * Type definitions for the profile and detailed information displayed
 * in the LeadsInformation component.
 */

export interface LeadProfile {
  name: string
  title: string
  company: string
  image: string
}

export interface LeadDetailItem {
  label: string
  icon: string
  iconColor: string
  value: string
  link?: string
  isPrimary?: boolean
}
