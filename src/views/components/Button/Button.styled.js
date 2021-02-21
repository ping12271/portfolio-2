import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    margin: 0 4px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: transparent;
  border-radius: 4px;
  min-width: 100px;
  height: 36px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background: pink;
  color: #333;
  cursor: pointer;
  text-transform: uppercase;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: #d98a98;
  }
`;