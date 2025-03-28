import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 2rem
    padding-left: 2rem
    
    @media (min-width: 768px) {
      max-width: 1400px;
    }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  margin-top: 0.25rem;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  height: 180px;
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Equivalent to space-y-3 */
`;

export const NoTaskContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const NoTaskTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #6b7280;
`;

export const NoTaskText = styled.p`
  margin-top: 0.5rem;
  color: #9ca3af;
`;