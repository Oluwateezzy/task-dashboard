import { AxiosError } from "axios";
import axiosInstance from "../utils/axiosInstance";
import { TaskStatus } from "../types/enums/task";
import { delay } from "../utils/delay";

/**
 * Fetches tasks from the API.
 * Introduces a delay of 800ms to simulate loading.
 * @returns {Promise<any>} - Returns the list of tasks.
 * @throws {Error} - Throws an error if fetching tasks fails.
 */
export async function getTasks() {
  try {
    const response = await axiosInstance.get('/tasks');
    await delay(800);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error getting tasks');
    }
    throw new Error('An unexpected error occurred');
  }
}

/**
 * Updates the status of a task.
 * @param {string} taskId - The ID of the task to update.
 * @param {Object} data - The update payload containing the new status.
 * @returns {Promise<any>} - Returns the updated task.
 * @throws {Error} - Throws an error if updating the task fails.
 */
export async function updateTask(taskId: string, data: {status: TaskStatus}) {
  try {
    const response = await axiosInstance.patch(`/tasks/${taskId}`, data);
    return response.data;

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error updating task');
    }
    throw new Error('An unexpected error occurred while updating task');
  }
}