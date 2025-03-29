import { AxiosError } from "axios";
import axiosInstance from "../lib/axiosInstance";
import { TaskStatus } from "../types/enums/task";

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

export async function updateTask(taskId: string, data: {status: TaskStatus}) {
  try {
    const response = await axiosInstance.patch(`/tasks/${taskId}`, data);
    await delay(500)
    return response.data;

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error updating task');
    }
    throw new Error('An unexpected error occurred while updating task');
  }
}