import { useEffect, useState } from "react";
import { Task } from "../../types/task";
import { TaskStatus } from "../../types/enums/task";
import { SortType } from "../../types/enums/sort";
import { getTasks, updateTask } from "../../services/taskService";
import TaskModal from "../taskModal/taskModa";
import { toast } from "react-toastify";
import { Card, CardContent, PageHeader, PageTitle, Tabs, TabsContent } from "./style";
import SearchBar from "../search/SearchBar";
import Pagination from "../pagination/pagination";
import TaskFilter from "../filter/taskFilter";
import TaskTable from "../table/taskTable";

const TASKS_PER_PAGE = 5;

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState<Task[]>([]);

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
        setCurrentPage(1);
    }, [tasks, statusFilter, sortDirection, searchQuery])

    useEffect(() => {
        // Calculate start and end index for pagination
        const startIdx = (currentPage - 1) * TASKS_PER_PAGE;
        const endIdx = startIdx + TASKS_PER_PAGE;

        setPaginatedTasks(filteredTasks.slice(startIdx, endIdx));
    }, [filteredTasks, currentPage]);

    const totalPages = Math.ceil(filteredTasks.length / TASKS_PER_PAGE);



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
        <Tabs>
            <PageHeader>
                <PageTitle>Task Dashboard</PageTitle>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </PageHeader>

            <TaskFilter
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
            />

            <TabsContent>
                <Card>
                    <CardContent>
                        <TaskTable
                            tasks={paginatedTasks}
                            onTaskClick={handleTaskClick}
                            loading={loading}
                        />
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
            {
                modalOpen && selectedTask && (
                    <TaskModal
                        task={selectedTask}
                        isOpen={modalOpen}
                        onClose={closeModal}
                        onStatusChange={handleStatusChange}
                    />
                )
            }
        </Tabs>
    )
}