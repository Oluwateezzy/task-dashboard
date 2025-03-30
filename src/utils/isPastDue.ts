import { TaskStatus } from "../types/enums/task";

/**
 * Determines if the task is overdue
 * - Compares the due date with today's date
 * - A task is overdue if its due date has passed and it's not marked as "Completed"
 * @returns {boolean} - True if task is overdue, false otherwise
 */
export const isPastDue = (date: string, status: TaskStatus) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dueDate = new Date(date);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && status !== TaskStatus.COMPLETED;
};