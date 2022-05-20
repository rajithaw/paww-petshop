import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import { device, color } from "../constants";
import { Options } from "@styled-icons/fluentui-system-regular/Options";
import { Cart } from "@styled-icons/bootstrap/Cart";
import IconButton from "../components/IconButton";

import { useAppDispatch } from '../app/hooks';
import { openCart } from '../reducers/cartSlice';

const MainHeaderStyled = styled.header`
    box-sizing: border-box;
    background-color: ${color.secondary};
    width: calc(100% - 70px);
    height: 100px;
    right: 0;
    display: flex;
    position: fixed;
    flex-direction: row;
    padding: 10px 20px 0 20px;
    .headerItemText {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }
    .headerItemSearch {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
    }
    .headerPrimaryText {
        font-weight: bold;
        flex: 1;
        display: flex;
        align-items: center;
    }
    .headerSecondaryText {
        font-size: 0.5em;
        font-weight: 100;
        flex: 1;
        display: flex;
        align-items: center;
    }
    .optionsButtonContainer {
        font-size: 0;
        padding: 0 10px 0 0;
    }
    @media ${device.tablet} {
        width: 100%;
        height: 150px;
        flex-direction: column;
        .headerItemText {
            padding: 5px 0 5px 0;
        }
        .headerItemSearch {
            padding: 5px 0 5px 0;
        }
    }
`;

const MainHeader = () => {
    const dispatch = useAppDispatch();

    return (
        <MainHeaderStyled>
            <div className="headerItemText">
                <div className="headerPrimaryText">
                    Paww Petshop
                </div>
                <div className="headerSecondaryText">
                    PetshopID# 0871235
                </div>
            </div>
            <div className="headerItemSearch">
                <SearchInput placeholder="Search product..."/>
                <div className="optionsButtonContainer">
                    <IconButton icon={<Options />} />
                </div>
                <IconButton icon={<Cart />} onClick={() => dispatch(openCart())}/>
            </div>
        </MainHeaderStyled>
    )
};
export default MainHeader;