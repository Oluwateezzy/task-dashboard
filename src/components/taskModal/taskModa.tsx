import { TaskStatus } from "../../types/enums/task";
import { TaskModalProps } from "../../types/props/taskModalProps";
import { isPastDue } from "../../utils/isPastDue";
import { CloseButton, CloseModalButton, Description, DueDate, ModalContent, ModalHeader, ModalLabel, ModalOverlay, ModalStatusDueDiv, ModalTitle, StatusBadge, Option, Select } from "./style";

// TaskModal component for displaying task details and updating status
export default function TaskModal({ task, isOpen, onClose, onStatusChange }: TaskModalProps) {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>

                {/* Header section with task title and close button */}
                <ModalHeader>
                    <ModalTitle>{task.title}</ModalTitle>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </ModalHeader>

                {/* Status badge and due date section */}
                <ModalStatusDueDiv>
                    <StatusBadge status={task.status}>{task.status}</StatusBadge>
                    <DueDate isOverdue={isPastDue(task.dueDate, task.status)}>📅 Due Date: {task.dueDate}</DueDate>
                </ModalStatusDueDiv>

                {/* Task description */}
                <ModalLabel>Description</ModalLabel>
                <Description>{task.description}</Description>

                {/* Dropdown to update task status */}
                <ModalLabel htmlFor="status-filter">Update Status</ModalLabel>
                <Select
                    id="status-filter"
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
                >
                    <Option value={TaskStatus.PENDING}>Pending</Option>
                    <Option value={TaskStatus.IN_PROGRESS}>In Progress</Option>
                    <Option value={TaskStatus.COMPLETED}>Completed</Option>
                </Select>

                {/* Close button for the modal */}
                <CloseModalButton onClick={onClose}>Close</CloseModalButton>
            </ModalContent>
        </ModalOverlay>
    );
};
