import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 18rem;
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