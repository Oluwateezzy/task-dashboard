import { styled } from "styled-components";
import { getStatusStyles } from "../../utils/getStatusType";
import { Eye } from "lucide-react";

const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem; /* Equivalent to text-sm */
`;

const TableHeader = styled.thead`
  & tr {
    border-bottom: 1px solid var(--border);
  }
`;

const TableBody = styled.tbody`
  & tr:last-child {
    border-bottom: 0;
  }
`;

const TableFooter = styled.tfoot`
  border-top: 1px solid var(--border);
  background-color: var(--muted, rgba(0, 0, 0, 0.05));
  font-weight: 500;

  & > tr:last-child {
    border-bottom: 0;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--border);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--muted, rgba(0, 0, 0, 0.05));
  }

  &[data-state="selected"] {
    background-color: var(--muted);
  }
`;

const TableHead = styled.th`
  height: 3rem; /* Equivalent to h-12 */
  padding: 0 1rem; /* Equivalent to px-4 */
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  color: var(--muted-foreground);

  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

const TableCell = styled.td`
  padding: 1rem; /* Equivalent to p-4 */
  vertical-align: middle;

  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

const TableCaption = styled.caption`
  margin-top: 1rem; /* Equivalent to mt-4 */
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: var(--muted-foreground);
`;

const NoTaskContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const NoTaskTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #6b7280;
`;

const NoTaskText = styled.p`
  margin-top: 0.5rem;
  color: #9ca3af;
`;

const Badge = styled.div<{ $status: string }>`
  font-size: 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  font-weight: 500;
  text-align: center;
  ${({ $status }) => getStatusStyles($status)}
`;

const TaskDueDate = styled.span<{ isOverdue: boolean }>`
  ${({ isOverdue }) => isOverdue && `
    color: #ef4444;
    font-weight: 500;
  `}
`;

const TaskAction = styled(Eye)`
  cursor: pointer; /* Makes it clickable */
`;

export {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, TableWrapper, NoTaskContainer, NoTaskText, NoTaskTitle, Badge, TaskDueDate, TaskAction}