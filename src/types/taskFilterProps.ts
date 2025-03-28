import { SortType } from "./enums/sort";
import { TaskStatus } from "./enums/task";

export interface TaskFilterProps {
  statusFilter: TaskStatus
  setStatusFilter: (status: TaskStatus) => void;
  sortDirection: SortType;
  setSortDirection: (direction: SortType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}