/**
 * Represents a team member in a project.
 */
export interface TeamMember {
  id: number
  image: string
}

/**
 * Represents a single project statistic.
 */
export interface ProjectStat {
  id: number
  image: string
  title: string
  teamMembers: TeamMember[]
  budget: string
  dueDate: string
  progress: number
  class: string
  status: string
  chartImage: string
}
