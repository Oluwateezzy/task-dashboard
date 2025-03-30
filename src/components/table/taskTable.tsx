import { ThreeDots } from "react-loader-spinner";
import { TaskTableProps } from "../../types/props/TaskTableProps";
import { NoTaskContainer, NoTaskText, NoTaskTitle, Table, TableBody, TableHead, TableHeader, TableRow } from "./style";
import Task from "./task";

export default function TaskTable({ tasks, loading, onTaskClick }: TaskTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created at</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>

            {loading ? (
                <div>
                    <ThreeDots visible={true} height="80" width="80" color="#4fa94d" />
                </div>
            ) : tasks.length > 0 ? (
                tasks.map((task) => (
                    <TableBody key={task.id}>
                        <Task task={task} onClick={() => onTaskClick(task)} />
                    </TableBody>
                ))
            ) : (
                <NoTaskContainer>
                    <NoTaskTitle>No tasks found</NoTaskTitle>
                    <NoTaskText>Try adjusting your filters or search criteria</NoTaskText>
                </NoTaskContainer>
            )}
        </Table>
    );
};
