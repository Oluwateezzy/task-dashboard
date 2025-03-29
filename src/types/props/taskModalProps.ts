import { TaskStatus } from "../enums/task";
import { Task } from "../task";

export interface TaskModalProps {
    task: Task;
    isOpen: boolean;
    onClose: () => void;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
}