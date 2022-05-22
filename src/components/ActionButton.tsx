import { MouseEventHandler } from "react";
import styled from "styled-components";
import { color } from "../constants";

export interface IActionButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const ActionButtonStyled = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  background-color: ${color.primary};
`;

const ActionButton = ({ text, onClick }: IActionButtonProps) => {
  return (
    <ActionButtonStyled onClick={onClick}>
      {text}
    </ActionButtonStyled>
  );
};

export default ActionButton;
