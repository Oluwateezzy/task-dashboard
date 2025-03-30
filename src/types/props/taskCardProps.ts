import { Task } from "../task";

export interface TaskCardProps {
  task: Task;
  index: number;
  onClick: () => void;
}