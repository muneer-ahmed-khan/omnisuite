/**
 * Types for the LMSCoursesWhatHappening component data
 * -----------------------------------------------------------------------------
 * Defines the structure of individual update cards displayed in the dashboard.
 */

export interface WhatHappeningUpdate {
  id: number
  bgClass: string
  title: string
  class: string
  number: string | number
}
