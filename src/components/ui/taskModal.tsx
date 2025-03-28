import { TaskStatus } from "../../types/enums/task";
import { TaskModalProps } from "../../types/taskModalProps";
import { CloseButton, CloseModalButton, Description, DueDate, ModalContent, ModalHeader, ModalLabel, ModalOverlay, ModalSelect, ModalStatusDueDiv, ModalTitle, StatusBadge } from "./style";


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
                <ModalSelect
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
                >
                    <option value={TaskStatus.PENDING}>Pending</option>
                    <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
                    <option value={TaskStatus.COMPLETED}>Completed</option>
                </ModalSelect>

                <CloseModalButton onClick={onClose}>Close</CloseModalButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default TaskModal;
