import { format } from "date-fns";
import { TaskCardProps } from "../../types/props/taskCardProps";
import { Badge, TableCell, TableRow, TaskAction, TaskDueDate } from "./style";


// TaskCard component displays individual task details
export default function Task({ task, onClick }: TaskCardProps) {

    /**
     * Determines if the task is overdue
     * - Compares the due date with today's date
     * - A task is overdue if its due date has passed and it's not marked as "Completed"
     * @returns {boolean} - True if task is overdue, false otherwise
     */
    const isPastDue = () => {
        const today = new Date();
        const dueDate = new Date(task.dueDate);
        return dueDate < today && task.status !== "Completed";
    };

    /**
     * Formats a given date string into a readable format
     * - Uses "MMM dd, yyyy" format (e.g., "Jan 01, 2025")
     * - Handles errors gracefully if an invalid date is encountered
     * @param {string} dateString - The date string to format
     * @returns {string} - Formatted date string or original string if an error occurs
     */
    const formatDate = (dateString: string) => {
        try {
            return format(new Date(dateString), "MMM dd, yyyy");
        } catch (e) {
            console.error("Invalid date format", e);
            return dateString;
        }
    };

    return (
        <TableRow>
            <TableCell>{task.title}</TableCell>
            <TableCell>
                <Badge $status={task.status}>
                    {task.status}
                </Badge>
            </TableCell>
            <TableCell>
                <TaskDueDate isOverdue={isPastDue()}>
                    {formatDate(task.dueDate)}
                </TaskDueDate></TableCell>
            <TableCell>
                <TaskAction onClick={onClick}></TaskAction>
            </TableCell>
        </TableRow>
    )
}