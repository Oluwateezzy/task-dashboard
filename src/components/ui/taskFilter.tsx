import { TaskFilterProps } from "../../types/props/taskFilterProps";
import { Button, ButtonGroup, Container, FlexRow, GridContainer, Icon, Label, SearchIcon, SearchWrapper, Select, SelectContainer, SpaceY2, Option, Input, IconX } from "./style";
import { TaskStatus } from "../../types/enums/task";
import { SortType } from "../../types/enums/sort";

// TaskFilter component provides filtering and sorting options for tasks
export default function TaskFilter({
    statusFilter,
    setStatusFilter,
    sortDirection,
    setSortDirection,
    searchQuery,
    setSearchQuery
}: TaskFilterProps) {
    return (
        <Container>
            <GridContainer>

                {/* Status Filter Dropdown */}
                <SpaceY2>
                    <SelectContainer>
                        <Label htmlFor="status-filter">Filter by Status</Label>
                        <Select
                            id="status-filter"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as TaskStatus)}
                        >
                            <Option value={TaskStatus.ALL}>All Tasks</Option>
                            <Option value="Pending">Pending</Option>
                            <Option value="In Progress">In Progress</Option>
                            <Option value="Completed">Completed</Option>
                        </Select>
                    </SelectContainer>
                </SpaceY2>

                {/* Sorting Buttons  */}
                <SpaceY2>
                    <Label htmlFor="sort-direction">Sort by Due Date</Label>
                    <FlexRow>
                        <ButtonGroup>
                            <Button
                                id="sort-direction"
                                active={sortDirection === SortType.ASC}
                                onClick={() => setSortDirection(SortType.ASC)}
                            >
                                <IconX>🔼</IconX>
                                Earliest First
                            </Button>
                            <Button
                                active={sortDirection === SortType.DESC}
                                onClick={() => setSortDirection(SortType.DESC)}
                            >
                                <Icon>🔽</Icon>
                                Latest First
                            </Button>
                        </ButtonGroup>
                    </FlexRow>
                </SpaceY2>

                {/* Search Input Field */}
                <SpaceY2>
                    <Label htmlFor="search">Search Tasks</Label>
                    <SearchWrapper>
                        <SearchIcon />
                        <Input
                            id="search"
                            placeholder="Search by title or description"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8"
                        />
                    </SearchWrapper>
                </SpaceY2>
            </GridContainer>
        </Container>
    );
}
