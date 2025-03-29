import { useEffect, useState } from "react";
import { Container, GridContainer, Header, NoTaskContainer, NoTaskText, NoTaskTitle, Subtitle, Title } from "./style"
import { Grid } from "react-loader-spinner";
import { Task } from "../../types/task";
import { TaskStatus } from "../../types/enums/task";
import { SortType } from "../../types/enums/sort";
import { getTasks, updateTask } from "../../services/taskService";
import TaskCard from "../ui/taskCard";
import TaskFilter from "../ui/taskFilter";
import TaskModal from "../ui/taskModal";
import { toast } from "react-toastify";

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const [statusFilter, setStatusFilter] = useState<TaskStatus>(TaskStatus.ALL);
    const [sortDirection, setSortDirection] = useState<SortType>(SortType.ASC);
    const [searchQuery, setSearchQuery] = useState("");

    /**
     * Fetch tasks from the API when the component mounts.
     * Updates the `tasks` state and handles errors with a toast notification.
     */
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks()
                setTasks(data)
            } catch (error) {
                console.log(error)
                toast("Failed to load tasks");
            } finally {
                setLoading(false)
            }
        }

        fetchTasks()
    }, [])

    /**
     * Filters and sorts tasks whenever `tasks`, `statusFilter`, `sortDirection`, or `searchQuery` change.
     * - Filters tasks based on the selected status.
     * - Searches for tasks using the query.
     * - Sorts tasks based on their due date.
     */
    useEffect(() => {
        let result = [...tasks]

        if (statusFilter !== TaskStatus.ALL) {
            result = result.filter(task => task.status == statusFilter)
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLocaleLowerCase()
            result = result.filter(task => task.title.toLocaleLowerCase().includes(query) || task.description.toLocaleLowerCase().includes(query))
        }

        result.sort((a, b) => {
            const dateA = new Date(a.dueDate)
            const dateB = new Date(b.dueDate)

            return sortDirection === SortType.ASC
                ? dateA.getTime() - dateB.getTime()
                : dateB.getTime() - dateA.getTime();
        })

        setFilteredTasks(result);
    }, [tasks, statusFilter, sortDirection, searchQuery])

    /**
     * Handles status change for a task.
     * - Calls API to update the task status.
     * - Updates the task in the local state.
     * - Displays success or error notification.
     */
    const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
        try {
            await updateTask(taskId, { status: newStatus });
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === taskId ? { ...task, status: newStatus } : task
                )
            );

            if (selectedTask && selectedTask.id === taskId) {
                setSelectedTask({ ...selectedTask, status: newStatus });
            }
            toast("Task Status Updated")
        } catch (error) {
            console.error("Error updating task:", error);
            toast(`Error updating task: ${error}`)
            throw error
        }
    }

    /**
     * Opens the task modal and sets the selected task for detailed view.
     */
    const handleTaskClick = (task: Task) => {
        setSelectedTask(task);
        setModalOpen(true);
    };

    /**
     * Closes the task modal and resets the selected task.
     */
    const closeModal = () => {
        setModalOpen(false);
        setSelectedTask(null);
    };

    return (
        <Container>
            <Header>
                <div>
                    <Title>Task Dashboard</Title>
                    <Subtitle> Manage your customer tasks </Subtitle>
                </div>
            </Header>

            <TaskFilter
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {
                loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Grid
                            height="300"
                            width="100%"
                            color="#4fa94d"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                ) : filteredTasks.length > 0 ? (
                    <GridContainer>
                            {filteredTasks.map((task) => (
                                <TaskCard task={task} key={task.id} onClick={() => handleTaskClick(task)} />
                        ))}
                    </GridContainer>
                ) : (
                    <NoTaskContainer>
                        <NoTaskTitle>No tasks found</NoTaskTitle>
                        <NoTaskText>Try adjusting your filters or search criteria</NoTaskText>
                    </NoTaskContainer>
                )
            }

            {modalOpen && selectedTask && (
                <TaskModal
                    task={selectedTask}
                    isOpen={modalOpen}
                    onClose={closeModal}
                    onStatusChange={handleStatusChange}
                />
            )}
        </Container>
    )
}