import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  height: 44px;
  padding: 10px 18px;
  gap: 10px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    transition: 0.3s background ease-in;
    color: #000;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  &:hover {
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    transition: 0.3s background ease-in;
  }
`;
