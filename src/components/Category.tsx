import styled from "styled-components";
import { color, device } from "../constants";

interface ICategoryProps {
    name: string,
    count: number,
    selected?: boolean,
    icon: any
};

const CategoryStyled = styled("div")<{selected: boolean}>`
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: ${ props => props.selected ? color.primary : 'white'};
    cursor: pointer;
    div > svg {
        width: 36px;
        height: 36px;
        color: ${color.primary};
    }
    .categoryTextContainer {
        color: ${ props => props.selected ? 'white' : 'black'};
    }
    .categoryName {
        font-size: 0.7em;
        font-weight: 600;
    }
    .categoryCount {
        font-size: 0.4em;
    }
    .iconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 10px;
        width: 48px;
        height: 48px;
        margin: 0 10px 0 10px;
    }
    &:hover {
        background-color: ${ props => props.selected ? color.primary : color.hover};
    }
    @media ${device.tablet} {
        width: 100%;
    }
`;

const Category = ({name, count, icon, selected = false} : ICategoryProps) => {
    return (
        <CategoryStyled selected={selected}>
            <div className="iconContainer">
                {icon}
            </div>
            <div className="categoryTextContainer">
                <div className="categoryName">
                    {name}
                </div>
                <div className="categoryCount">
                    {count} item
                </div>
            </div>
        </CategoryStyled>
    )
};

export default Category;