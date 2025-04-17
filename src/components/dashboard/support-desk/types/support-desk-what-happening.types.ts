/**
 * Type Definitions for the WhatHappening Component
 * -----------------------------------------------------------------------------
 * This file defines the structure of the update data used in the WhatHappening component.
 *
 * @file types/support-desk-what-happening.types.ts
 */

/**
 * Interface representing a single update item.
 */
export interface Update {
  id: number
  bgClass: string
  title: string
  class: string
  number: string
}
