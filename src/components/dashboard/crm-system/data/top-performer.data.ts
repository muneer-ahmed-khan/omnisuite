/**
 * @file top-performer.data.ts
 * @description
 * Static data for the TopPerformerHelpAgent component. Each entry represents
 * a top help agent with avatar, name, ID, and average score. Image URLs are
 * resolved at build time via `new URL(...)`.
 */

import type { TopPerformerHelpAgentItem } from '../types/top-performer.types'

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
