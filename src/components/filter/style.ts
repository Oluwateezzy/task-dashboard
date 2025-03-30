import { ArrowDown, ArrowUp } from "lucide-react";
import { styled } from "styled-components";

const TabContainerDiv = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 0.5rem; /* Add spacing between elements */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: flex-start; /* Stretch items to full width */
  }
`;

const TabsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const TabsTrigger = styled.button<{ active?: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 1px solid ${({ active }) => (active ? "#000000" : "#e5e7eb")};
  background-color: ${({ active }) => (active ? "#000000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? "#000000" : "#f3f4f6")};
  }
`;

const SortContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Equivalent to gap-2 */
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Button = styled.button<{ active?: boolean }>`
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

const IconX = styled(ArrowDown)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const Icon = styled(ArrowUp)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;
export {TabContainerDiv, TabsList, TabsTrigger, SortContainer, ButtonGroup, Button, Icon, IconX}