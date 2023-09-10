import styled from 'styled-components';

export const Ul = styled.ul`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
`;

export const Li = styled.li`
  padding: 13px;
`;

export const Button = styled.button`
  border: 1px solid #5d5a52;
  border-radius: 20px;
  width: 120px;
  padding: 5px;
  background-color: #686866;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #e1d9c7;
    transform: scale(1.01);
  }
`;
