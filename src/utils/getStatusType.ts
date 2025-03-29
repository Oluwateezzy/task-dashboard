import { TaskStatus } from "../types/enums/task";

// Function to get CSS styles based on task status
export const getStatusStyles = (status: string) => {

  // Styling for Pending tasks
  if (status == TaskStatus.PENDING) {
    return `
      background-color: #FDE68A;
      color: #9a3412;
      &:hover {
        background-color: #fdba74;
      }
    `;
  }

  // Styling for In Progress tasks
  if (status == TaskStatus.IN_PROGRESS) {
    return `
      background-color: #BFDBFE;
      color: #1e40af;
      &:hover {
        background-color: #93c5fd;
      }
    `;
  }

  // Styling for Completed tasks
  if (status == TaskStatus.COMPLETED) {
    return `
      background-color: #D1FAE5;
      color: #166534;
      &:hover {
        background-color: #86efac; 
      }
    `;
  }

  // Default styling for unknown statuses
  return `
    background-color: rgb(23, 82, 199);
    color: #374151;
    &:hover {
      background-color: #d1d5db; 
    }
  `;
};
