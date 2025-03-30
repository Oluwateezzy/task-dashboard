import { TaskFilterProps } from "../../types/props/taskFilterProps";
import { TaskStatus } from "../../types/enums/task";
import { Button, Icon, SortContainer, TabContainerDiv, TabsList, TabsTrigger } from "./style";
import { SortType } from "../../types/enums/sort";

// TaskFilter component for filtering tasks by status and sorting by direction
export default function TaskFilter({ statusFilter, setStatusFilter, sortDirection, setSortDirection }: TaskFilterProps) {
    return (
        <TabContainerDiv>
            {/* TabsList displaying the task status options */}
            <TabsList>
                {Object.values(TaskStatus).map((status) => (
                    <TabsTrigger
                        key={status}
                        active={statusFilter === status}
                        onClick={() => setStatusFilter(status)}
                        value={status}
                    >
                        {status.replace("_", " ")}
                    </TabsTrigger>
                ))}
            </TabsList>

            {/* Sorting container for task sorting options */}
            <SortContainer>
                <Button
                    id="sort-direction"
                    active={sortDirection === SortType.ASC}
                    onClick={() => setSortDirection(sortDirection === SortType.ASC ? SortType.DESC : SortType.ASC)}
                >
                    <Icon>{sortDirection === SortType.ASC ? '🔼' : '🔽'}</Icon>
                    {sortDirection === SortType.ASC ? 'Earliest First' : 'Latest First'}
                </Button>
            </SortContainer>
        </TabContainerDiv>
    );
}
