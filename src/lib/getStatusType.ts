import { TaskStatus } from "../types/enums/task";

export const getStatusStyles = (status: string) => {

  if (status == TaskStatus.PENDING) {
    return `
      background-color: #FDE68A;
      color: #9a3412;
      &:hover {
        background-color: #fdba74;
      }
    `;
  }

  if (status == TaskStatus.IN_PROGRESS) {
    return `
      background-color: #BFDBFE;
      color: #1e40af;
      &:hover {
        background-color: #93c5fd;
      }
    `;
  }

  if (status == TaskStatus.COMPLETED) {
    return `
      background-color: #D1FAE5;
      color: #166534;
      &:hover {
        background-color: #86efac; 
      }
    `;
  }

  // Default case
  return `
    background-color: rgb(23, 82, 199);
    color: #374151;
    &:hover {
      background-color: #d1d5db; 
    }
  `;
};
