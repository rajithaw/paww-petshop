import styled from "styled-components";
import NavigationContainer from "../components/NavigationContainer";
import { device } from "../constants";

const BottomNavigationStyled = styled.nav`
    display: none;
    width: 100%;
    height: 70px;
    bottom: 0;
    flex-direction: row;
    @media ${device.tablet} {
        display: flex;
        position: fixed;
    }
`;

const BottomNavigation = () => {
    return (
        <BottomNavigationStyled>
            <NavigationContainer />
        </BottomNavigationStyled>
    );
};

export default BottomNavigation;
