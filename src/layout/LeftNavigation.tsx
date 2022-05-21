import styled from "styled-components";
import NavigationContainer from "../components/NavigationContainer";
import { device } from "../constants";

const LeftNavigationStyled = styled.nav`
  width: 70px;
  height: 100vh;
  left: 0;
  display: flex;
  position: fixed;
  flex-direction: column;
  @media ${device.tablet} {
    display: none;
  }
`;

const LeftNavigation = () => {
  return (
    <LeftNavigationStyled>
      <NavigationContainer />
    </LeftNavigationStyled>
  );
};

export default LeftNavigation;
