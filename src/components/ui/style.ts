import styled from "styled-components";
import { getStatusStyles } from "../../lib/getStatusType";
import { Calendar, Filter, FilterX } from "lucide-react";

export const TaskCardStyle = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--border-color, #e5e7eb);
  background-color: var(--card-bg, white);
  color: var(--card-foreground, #111827);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const TaskCardHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
  padding-bottom: 0.5rem;
`;

export const TaskCardDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TaskCardTitleStyle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.015em;
`;

export const Badge = styled.div<{ $status: string }>`
  font-size: 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  font-weight: 500;
  ${({ $status }) => getStatusStyles($status)}
`;

export const TaskCardDescriptionStyle = styled.div`
  padding: 1.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0.25rem;
  font-size: 1rem;
  color: var(--muted-foreground, #6b7280);
`;

export const TaskCardFooterStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
  font-size: 0.875rem;
  color: var(--muted-foreground, #6b7280);
`;

export const TaskCardFooterDivStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskCardCalendarStyle = styled(Calendar)`
  height: 1rem;
  width: 1rem;
  margin-right: 0.25rem;
`;

export const TaskCardDueDate = styled.span<{ isOverdue: boolean }>`
  ${({ isOverdue }) => isOverdue && `
    color: #ef4444;
    font-weight: 500;
  `}
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const IconX = styled(FilterX)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

export const Icon = styled(Filter)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SpaceY2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;

  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const Button = styled.button<{ active?: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 1px solid ${({ active }) => (active ? "#3b82f6" : "#e5e7eb")};
  background-color: ${({ active }) => (active ? "#3b82f6" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? "#2563eb" : "#f3f4f6")};
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Select = styled.select`
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1rem;
  color: #374151;
  background-color: white;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export const Option = styled.option`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #374151;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled.svg`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  color: #6b7280;
`;

export const Input = styled.input`
  padding-left: 2rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #374151;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 21, 21, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  width: 500px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const ModalTitle = styled.h2`
  color: #4b5563;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #4b5563;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  background: ${(props) =>
        props.status === "Completed"
            ? "#D1FAE5"
            : props.status === "Pending"
                ? "#FDE68A"
                : "#BFDBFE"};
  color: ${(props) =>
        props.status === "Completed"
            ? "#065F46"
            : props.status === "Pending"
                ? "#92400E"
                : "#1E40AF"};
  padding: 10px;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const ModalStatusDueDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DueDate = styled.p`
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

export const ModalLabel = styled.label`
  display: block;
  color: #4b5563;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const ModalSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const CloseModalButton = styled.button`
  margin-top: 15px;
  background: #1f2937;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  width: 100px;
  &:hover {
    background: #374151;
  }
`;