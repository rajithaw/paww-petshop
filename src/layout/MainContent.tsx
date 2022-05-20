import styled from "styled-components";
import Category from "../components/Category";
import { device, color } from "../constants";
import { Paw } from "@styled-icons/fa-solid/Paw";
import { AnimalDog } from "@styled-icons/fluentui-system-regular/AnimalDog";
import { AnimalCat } from "@styled-icons/fluentui-system-regular/AnimalCat";
import { ListStars } from "@styled-icons/bootstrap/ListStars";

const MainContentStyled = styled.main`
    background-color: ${color.secondary};
    width: calc(100% - 70px);
    height: calc(100vh - 100px);
    top: 100px;
    right: 0;
    display: flex;
    position: fixed;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
    .categoryContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .categoryItem {
        min-width: 200px;
        padding: 10px 20px 10px 0;
    }
    @media ${device.tablet} {
        width: 100%;
        height: calc(100vh - 220px);
        top: 150px;
        left: 0;
        .categoryContainer {
            flex-direction: column;
        }
    }
`;

const MainContent = () => {
    return (
        <MainContentStyled>
            <div className="categoryContainer">
                <div className="categoryItem">
                    <Category name="All Items" count={246} icon={<Paw />} selected={true}/>
                </div>
                <div className="categoryItem">
                    <Category name="Dog Food" count={46} icon={<AnimalDog />}/>
                </div>
                <div className="categoryItem">
                    <Category name="Cat Food" count={52} icon={<AnimalCat />}/>
                </div>
                <div className="categoryItem">
                    <Category name="Accesories" count={148} icon={<ListStars />}/>
                </div>
            </div>
        </MainContentStyled>
    )
};

export default MainContent;
