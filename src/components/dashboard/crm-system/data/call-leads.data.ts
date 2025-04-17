/**
 * Static data for the CallLeads component.
 * Contains summary details about outgoing and support calls.
 */

import type { CallLeadsData } from '../types/call-leads.types'

// Exporting the call stats data
export const callLeadsData: CallLeadsData[] = [
  {
    icon: new URL('@/assets/images/icon/call.png', import.meta.url).href,
    label: 'OUTGOING CALL',
    leadCount: 10,
    leadText: 'Leads Today',
    changeText: '5.5%',
    changeType: 'up',
    comparedText: 'Than yesterday',
  },
  {
    icon: new URL('@/assets/images/icon/calendar.png', import.meta.url).href,
    label: 'SUPPORT CALL',
    leadCount: 23,
    leadText: 'Leads This Week',
    changeText: '3.3%',
    changeType: 'down',
    comparedText: 'Than last week',
  },
]
