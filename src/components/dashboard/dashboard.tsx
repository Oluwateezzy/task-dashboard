import { useState } from "react";
import { Container, GridContainer, Header, NoTaskContainer, NoTaskText, NoTaskTitle, Subtitle, Title } from "./style"
import { Grid } from "react-loader-spinner";
import { Task } from "../../types/task";
import { TaskStatus } from "../../types/enums/task";
import { SortType } from "../../types/enums/sort";

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const [statusFilter, setStatusFilter] = useState<TaskStatus>(TaskStatus.ALL);
    const [sortDirection, setSortDirection] = useState<SortType>(SortType.ASC);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <Container>
            <Header>
                <div>
                    <Title>Task Dashboard</Title>
                    <Subtitle> Manage your customer tasks </Subtitle>
                </div>
            </Header>
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
                        {filteredTasks.map((task, index) => (
                            // <TaskCard key={task.id} task={task} onClick={() => handleTaskClick(task)} />
                            <div>{index}</div>
                        ))}
                    </GridContainer>
                ) : (
                    <NoTaskContainer>
                        <NoTaskTitle>No tasks found</NoTaskTitle>
                        <NoTaskText>Try adjusting your filters or search criteria</NoTaskText>
                    </NoTaskContainer>
                )
            }
        </Container>
    )
}