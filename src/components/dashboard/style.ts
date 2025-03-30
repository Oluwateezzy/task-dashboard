import styled from "styled-components";
import { getStatusStyles } from "../../utils/getStatusType";

const Tabs = styled.div``;

const TabsContent = styled.div`
  margin-top: 0.5rem;
  ring-offset: var(--background);

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring), 0 0 0 4px var(--ring-offset-background);
  }
`;

const Card = styled.div`
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  border: 1px solid var(--border);
  background-color: var(--card);
  color: var(--card-foreground);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* Equivalent to space-y-1.5 */
  padding: 0 2.5rem; /* Equivalent to p-6 */
`;

const CardTitle = styled.h3`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 600; /* Equivalent to font-semibold */
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const CardDescription = styled.p`
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: var(--muted-foreground);
`;

const CardContent = styled.div`
  padding: 1.5rem; /* Equivalent to p-6 */
  padding-top: 0; /* Equivalent to pt-0 */
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem; /* Equivalent to p-6 */
  padding-top: 0; /* Equivalent to pt-0 */
`;

const Badge = styled.div<{ $status: string }>`
  font-size: 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  font-weight: 500;
  text-align: center;
  ${({ $status }) => getStatusStyles($status)}
`;

const TaskDueDate = styled.span<{ isOverdue: boolean }>`
  ${({ isOverdue }) => isOverdue && `
    color: #ef4444;
    font-weight: 500;
  `}
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  outline: none;
  width: 250px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #3b82f6; /* Blue highlight on focus */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

export { Tabs, TabsContent, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, TaskDueDate, SearchInput, PageTitle, PageHeader };