import styled from "styled-components";
import { color } from "../constants";
import { MouseEventHandler } from "react";

interface IIconButtonProps {
    icon: any,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const IconButtonStyled = styled.button`
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

const IconButton = ({icon, onClick}: IIconButtonProps) => {
    return (
        <IconButtonStyled onClick={onClick}>
            {icon}
        </IconButtonStyled>
    );
};

export default IconButton;