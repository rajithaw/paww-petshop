import styled from "styled-components";
import { color } from "../constants";
import { MouseEventHandler } from "react";
import IconButton from "./IconButton";

interface IIconButtonProps {
  icon: any;
  tooltip?: string;
  badgeText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BadgeButtonStyled = styled.div`
  font-size: 0;
  .badge {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: block;
    position: relative;
    color: white;
    background: ${color.primary};
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -40px;
    right: -15px;
    transition: all 0.3s;
  }
`;

const BadgeButton = ({
  icon,
  tooltip,
  badgeText,
  onClick,
}: IIconButtonProps) => {
  return (
    <BadgeButtonStyled>
      <IconButton icon={icon} tooltip={tooltip} onClick={onClick}>
        {
          badgeText && <span className="badge">{badgeText}</span>
        }
      </IconButton>
    </BadgeButtonStyled>
  );
};

export default BadgeButton;
