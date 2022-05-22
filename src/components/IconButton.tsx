import styled from "styled-components";
import { color } from "../constants";
import { MouseEventHandler } from "react";

interface IIconButtonProps {
  children?: any;
  icon: any;
  tooltip?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButtonStyled = styled("button")<{ tooltip?: string }>`
  area-label: ${props => props.tooltip};
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: ${color.hover};
  }
`;

const IconButton = ({ children, icon, tooltip, onClick }: IIconButtonProps) => {
  return (
    <IconButtonStyled onClick={onClick} title={tooltip}>
      {icon}
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
