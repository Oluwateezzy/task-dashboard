import { styled } from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Adds spacing between buttons */
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.25rem; /* Reduce spacing on small screens */
  }
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${({ active }) => (active ? "#3b82f6" : "#e5e7eb")};
  background-color: ${({ active }) => (active ? "#3b82f6" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? "#2563eb" : "#f3f4f6")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem; /* Adjust padding for smaller screens */
    font-size: 0.875rem;
  }
`;

export {PaginationButton, PaginationContainer}