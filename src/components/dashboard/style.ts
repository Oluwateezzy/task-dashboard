import styled from 'styled-components';

export const Container = styled.div`
  width: 100%
  margin: 0 auto;
  padding: 2rem 1rem;
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