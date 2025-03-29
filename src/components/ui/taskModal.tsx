import { TaskStatus } from "../../types/enums/task";
import { TaskModalProps } from "../../types/taskModalProps";
import { CloseButton, CloseModalButton, Description, DueDate, ModalContent, ModalHeader, ModalLabel, ModalOverlay, ModalStatusDueDiv, ModalTitle, StatusBadge, Option, Select } from "./style";


const TaskModal = ({ task, isOpen, onClose, onStatusChange }: TaskModalProps) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>{task.title}</ModalTitle>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </ModalHeader>

                <ModalStatusDueDiv>
                    <StatusBadge status={task.status}>{task.status}</StatusBadge>
                    <DueDate>📅 Due {task.dueDate}</DueDate>
                </ModalStatusDueDiv>


                <ModalLabel>Description</ModalLabel>
                <Description>{task.description}</Description>

                <ModalLabel>Update Status</ModalLabel>
                <Select
                    id="status-filter"
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
                >
                    <Option value={TaskStatus.PENDING}>Pending</Option>
                    <Option value={TaskStatus.IN_PROGRESS}>In Progress</Option>
                    <Option value={TaskStatus.COMPLETED}>Completed</Option>
                </Select>

                <CloseModalButton onClick={onClose}>Close</CloseModalButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default TaskModal;
