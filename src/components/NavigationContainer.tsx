import styled from "styled-components";
import { color, device } from "../constants";
import { HomeFill } from "@styled-icons/octicons/HomeFill";
import { LayoutGrid } from "@styled-icons/remix-fill/LayoutGrid";
import { PieChart } from "@styled-icons/icomoon/PieChart";
import { Settings } from "@styled-icons/material/Settings";
import { Exit } from "@styled-icons/ionicons-sharp/Exit";
import { AnimalDog } from "@styled-icons/fluentui-system-filled/AnimalDog";

import NavigationButton from "./NavigationButton";

const NavigationContainerStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  .logoContainer {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    > svg {
      color: ${color.primary};
      width: 36px;
      height: 36px;
    }
  }
  .commonButtonsContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .exitButtonContainer {
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
    .logoContainer {
      display: none;
    }
    .commonButtonsContainer {
      flex-direction: row;
    }
    .exitButtonContainer {
      width: 150px;
      height: auto;
    }
  }
`;

const NavigationContainer = () => {
  return (
    <NavigationContainerStyled>
      <div className="logoContainer">
        <AnimalDog />
      </div>
      <div className="commonButtonsContainer">
        <NavigationButton icon={<HomeFill />} tooltip="Home" />
        <NavigationButton icon={<LayoutGrid />} selected={true} tooltip="Contents" />
        <NavigationButton icon={<PieChart />} tooltip="Charts" />
        <NavigationButton icon={<Settings />} tooltip="Settings" />
      </div>
      <div className="exitButtonContainer">
        <NavigationButton icon={<Exit />} tooltip="Exit" />
      </div>
    </NavigationContainerStyled>
  );
};

export default NavigationContainer;
