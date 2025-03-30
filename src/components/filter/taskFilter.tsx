import { TaskFilterProps } from "../../types/props/taskFilterProps";
import { TaskStatus } from "../../types/enums/task";
import { Button, ButtonGroup, Icon, IconX, SortContainer, TabContainerDiv, TabsList, TabsTrigger } from "./style";
import { SortType } from "../../types/enums/sort";

// TaskFilter component provides filtering and sorting options for tasks
export default function TaskFilter({ statusFilter, setStatusFilter, sortDirection, setSortDirection }: TaskFilterProps) {
    return (
        <TabContainerDiv>
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

            <SortContainer>
                <ButtonGroup>
                    <Button
                        id="sort-direction"
                        active={sortDirection === SortType.ASC}
                        onClick={() => setSortDirection(SortType.ASC)}
                    >
                        <IconX>🔼</IconX> Earliest First
                    </Button>

                    <Button
                        active={sortDirection === SortType.DESC}
                        onClick={() => setSortDirection(SortType.DESC)}
                    >
                        <Icon>🔽</Icon> Latest First
                    </Button>
                </ButtonGroup>
            </SortContainer>
        </TabContainerDiv>
    );
}
