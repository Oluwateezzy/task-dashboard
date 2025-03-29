import "@testing-library/jest-dom";
import { describe, expect, vi } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { getTasks, updateTask } from "../services/taskService";
import { TaskStatus } from "../types/enums/task";
import { Task } from "../types/task";
import Dashboard from "../components/dashboard/dashboard";

// Mock API service functions
vi.mock("../services/taskService", () => ({
    getTasks: vi.fn(),
    updateTask: vi.fn(),
}));

const mockTasks: Task[] = [
    {
        id: "1",
        title: "Task 1",
        description: "This is the first task",
        status: TaskStatus.PENDING,
        dueDate: "2025-04-10",
    },
    {
        id: "2",
        title: "Task 2",
        description: "This is the second task",
        status: TaskStatus.IN_PROGRESS,
        dueDate: "2025-04-15",
    },
];

// Mock `getTasks` API call to return tasks
beforeEach(() => {
    (getTasks as jest.Mock).mockResolvedValue(mockTasks);
    (updateTask as jest.Mock).mockResolvedValue({ status: TaskStatus.COMPLETED });
});

describe("Dashboard Component", () => {
    test("renders dashboard with tasks", async () => {
        render(<Dashboard />);

        // Ensure loading state is shown
        expect(screen.getByText(/Task Dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/Manage your customer tasks/i)).toBeInTheDocument();

        // Wait for tasks to be loaded
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText("Task 2")).toBeInTheDocument());
    });

    test("filters tasks by status", async () => {
        render(<Dashboard />);

        // Wait for tasks to load
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());

        // Select "In Progress" filter
        fireEvent.change(screen.getByLabelText(/Filter by Status/i), {
            target: { value: TaskStatus.IN_PROGRESS },
        });

        // Ensure only "Task 2" is visible
        await waitFor(() => {
            expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
            expect(screen.getByText("Task 2")).toBeInTheDocument();
        });
    });

    test("updates task status", async () => {
        render(<Dashboard />);

        // Wait for tasks to load
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());

        // Open task modal
        fireEvent.click(screen.getByText("Task 1"));
        await waitFor(() => expect(screen.getByText(/Description/i)).toBeInTheDocument());

        console.log(screen.debug());
        // Change status to "Completed"
        fireEvent.change(screen.getByLabelText(/Update Status/i), {
            target: { value: TaskStatus.COMPLETED },
        });

        // Wait for update
        await waitFor(() => expect(updateTask).toHaveBeenCalledWith("1", { status: TaskStatus.COMPLETED }));
    });
});
