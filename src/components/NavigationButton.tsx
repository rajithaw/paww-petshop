import { ReactElement } from "react";
import styled from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { color } from "../constants";
import IconButton from "./IconButton";

interface INavigationButtonProps {
  selected?: boolean;
  tooltip?: string;
  icon: ReactElement<StyledIcon>;
}
const NavigationButtonStyled = styled("span")<{ selected: boolean }>`
  font-size: 0;
  > button {
    background-color: ${(props) => (props.selected ? "#e9eefa" : "white")};
  }
  > button > svg {
    color: ${(props) => (props.selected ? color.primary : "lightgrey")};
  }
`;

const NavigationButton = ({
  icon,
  selected = false,
  tooltip
}: INavigationButtonProps) => {
  return (
    <NavigationButtonStyled selected={selected}>
      <IconButton icon={icon} tooltip={tooltip}/>
    </NavigationButtonStyled>
  );
};

export default NavigationButton;
