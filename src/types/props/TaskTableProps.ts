import { Task } from "../task"

export interface TaskTableProps {
  tasks: Task[]
  onTaskClick: (task: Task) => void
  loading: boolean
}