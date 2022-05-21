import styled from "styled-components";
import { color } from "../constants";
import IconButton from "./IconButton";

interface INavigationButtonProps {
  selected?: boolean;
  icon: any;
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
}: INavigationButtonProps) => {
  return (
    <NavigationButtonStyled selected={selected}>
      <IconButton icon={icon} />
    </NavigationButtonStyled>
  );
};

export default NavigationButton;
