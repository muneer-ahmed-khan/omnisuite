export interface User {
  id: number
  image: string
}

export interface Task {
  id: number
  category: string
  bgClass: string
  usersList: User[]
  title: string
  class: string
  percent: string
}
