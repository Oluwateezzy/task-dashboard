import { ThreeDots } from "react-loader-spinner";
import { TaskTableProps } from "../../types/props/TaskTableProps";
import { NoTaskContainer, NoTaskText, NoTaskTitle, Table, TableBody, TableHead, TableHeader, TableRow } from "./style";
import Task from "./task";

// TaskTable component for displaying a list of tasks in a table format
export default function TaskTable({ tasks, loading, onTaskClick }: TaskTableProps) {
    return (
        <Table>

            {/* Table header defining column titles */}
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created at</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>

            {/* Show a loading spinner while fetching data */}
            {loading ? (
                <div>
                    <ThreeDots visible={true} height="80" width="80" color="#4fa94d" />
                </div>
            ) : tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <TableBody key={task.id}>
                        <Task task={task} onClick={() => onTaskClick(task)} index={index} />
                    </TableBody>
                ))
            ) : (
                // Display a message when no tasks are found
                <NoTaskContainer>
                    <NoTaskTitle>No tasks found</NoTaskTitle>
                    <NoTaskText>Try adjusting your filters or search criteria</NoTaskText>
                </NoTaskContainer>
            )}

        </Table>
    );
};
