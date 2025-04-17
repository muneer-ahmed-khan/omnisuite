/**
 * TopPerformerHelpAgentData
 * -----------------------------------------------------------------------------
 * This file provides static JSON data representing top performing help agents.
 * The data is used in the `TopPerformerHelpAgent` component to render agent info.
 */

import type { TopPerformerHelpAgentItem } from '../types/top-performer-help-agent.types'

export const topPerformerHelpAgentData: TopPerformerHelpAgentItem[] = [
  {
    id: 1,
    image: new URL('@/assets/images/user/user7.jpg', import.meta.url).href,
    name: 'Jacob Linowiski',
    AgentId: '125003',
    Average: '55',
  },
  {
    id: 2,
    image: new URL('@/assets/images/user/user2.jpg', import.meta.url).href,
    name: 'Jane Ronan',
    AgentId: '225304',
    Average: '50',
  },
  {
    id: 3,
    image: new URL('@/assets/images/user/user3.jpg', import.meta.url).href,
    name: 'Angela Carter',
    AgentId: '435505',
    Average: '45',
  },
  {
    id: 4,
    image: new URL('@/assets/images/user/user4.jpg', import.meta.url).href,
    name: 'Walter White',
    AgentId: '655662',
    Average: '40',
  },
]
