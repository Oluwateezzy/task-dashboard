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

        // Wait for tasks to be loaded
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText("Task 2")).toBeInTheDocument());
    });

    test("filters tasks by status", async () => {
        render(<Dashboard />);
        await waitFor(() => expect(screen.getByText("In Progress")).toBeInTheDocument());

        // Click on "In Progress" filter tab
        fireEvent.click(screen.getByText(/In Progress/i));

        // Task 1 should not be visible as it is pending
        await waitFor(() => expect(screen.queryByText("Task 1")).not.toBeInTheDocument());

        // Task 2 should be visible
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    test("search tasks", async () => {
        render(<Dashboard />);
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());

        // Type "Task 2" in the search bar
        fireEvent.change(screen.getByPlaceholderText("Search by title or description"), {
            target: { value: "Task 2" },
        });

        // Task 1 should not be visible
        await waitFor(() => expect(screen.queryByText("Task 1")).not.toBeInTheDocument());

        // Task 2 should be visible
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    test("open Task details Modal", async () => {
        render(<Dashboard />);
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());

        // Click on Task 1 to open modal
        fireEvent.click(screen.getByTestId("task-action-1-0"));

        // Wait for modal to appear
        await waitFor(() => expect(screen.getByText(/Update Status/i)).toBeInTheDocument());
    })

    test("updates task status", async () => {
        render(<Dashboard />);
        await waitFor(() => expect(screen.getByText("Task 1")).toBeInTheDocument());

        // Click on Task 1 to open modal
        fireEvent.click(screen.getByTestId("task-action-1-0"));;

        // Wait for modal to appear
        await waitFor(() => expect(screen.getByText(/Update Status/i)).toBeInTheDocument());

        // Change task status to "Completed"
        fireEvent.change(screen.getByLabelText(/Update Status/i), {
            target: { value: TaskStatus.COMPLETED },
        });

        // Check if `updateTask` API was called
        await waitFor(() => expect(updateTask).toHaveBeenCalledWith("1", TaskStatus.COMPLETED));

        // Close the modal
        fireEvent.click(screen.getByText("Close"));

        // Task 1 should now have "Completed" status
        await waitFor(() => expect(screen.getByText("Completed")).toBeInTheDocument());
    });
});
