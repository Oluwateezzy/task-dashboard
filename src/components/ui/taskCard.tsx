import { format } from "date-fns";
import { getStatusStyles } from "../../lib/getStatusType";
import { TaskCardProps } from "../../types/taskCardProps";
import { Badge, TaskCardCalendarStyle, TaskCardDescriptionStyle, TaskCardDivStyle, TaskCardDueDate, TaskCardFooterDivStyle, TaskCardFooterStyle, TaskCardHeaderStyle, TaskCardStyle, TaskCardTitleStyle } from "./style";

export default function TaskCard({ task, onClick }: TaskCardProps) {
    const isPastDue = () => {
        const today = new Date();
        const dueDate = new Date(task.dueDate);
        return dueDate < today && task.status !== "Completed";
    };

    const formatDate = (dateString: string) => {
        try {
            return format(new Date(dateString), "MMM dd, yyyy");
        } catch (e) {
            console.error("Invalid date format", e);
            return dateString;
        }
    };
    return (
        <TaskCardStyle>
            <TaskCardHeaderStyle>
                <TaskCardDivStyle>
                    <TaskCardTitleStyle>
                        {task.title}
                    </TaskCardTitleStyle>
                    <Badge $status={task.status}>
                        {task.status}
                    </Badge>
                </TaskCardDivStyle>
            </TaskCardHeaderStyle>
            <TaskCardDescriptionStyle>
                {task.description}
            </TaskCardDescriptionStyle>
            <TaskCardFooterStyle>
                <TaskCardFooterDivStyle>
                    <TaskCardCalendarStyle />
                    <TaskCardDueDate isOverdue={isPastDue()}>
                        {formatDate(task.dueDate)}
                        {isPastDue() && " (Overdue)"}
                    </TaskCardDueDate>
                </TaskCardFooterDivStyle>
            </TaskCardFooterStyle>
        </TaskCardStyle >
    )
}