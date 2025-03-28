import { AxiosError } from "axios";
import axiosInstance from "../lib/axiosInstance";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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