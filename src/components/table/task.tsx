import { TaskCardProps } from "../../types/props/taskCardProps";
import { formatDate } from "../../utils/formatDate";
import { isPastDue } from "../../utils/isPastDue";
import { Badge, TableCell, TableRow, TaskAction, TaskDueDate } from "./style";


// Task component displays individual task details
export default function Task({ task, onClick, index }: TaskCardProps) {

    return (
        <TableRow>

            <TableCell>
                {task.title}
            </TableCell>

            <TableCell>
                <Badge $status={task.status}>
                    {task.status}
                </Badge>
            </TableCell>

            <TableCell>
                <TaskDueDate isOverdue={isPastDue(task.dueDate, task.status)}>
                    {formatDate(task.dueDate)}
                </TaskDueDate>
            </TableCell>

            <TableCell>
                <TaskAction id={`${task.id}_${index}`} data-testid={`task-action-${task.id}-${index}`} onClick={onClick} />
            </TableCell>

        </TableRow>
    )
}