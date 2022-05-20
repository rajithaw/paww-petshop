import styled from "styled-components";
import { device } from "../constants";
import { Search } from "@styled-icons/boxicons-regular/Search"

interface ISearchInputProps {
    placeholder?: string;
}

const InputContainerStyled = styled.div`
    background-color: white;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    margin: 0 20px 0 20px;
    padding: 5px 5px 5px 5px;
    @media ${device.tablet} {
        margin: 0 20px 0 0;
    }
`;

const InputStyled = styled.input`
    flex: 1 0;
    min-width: 50px;
    min-height: 25px;
    font-size: inherit;
    background-color: transparent;
    padding-left: 5px;
    border: 0;
    font-size: 0.6em;
    &:focus {
        outline: none;
    };
    &:focus-visible {
        outline: none;
    }
`;

const SearchStyled = styled(Search)`
    width: 20px;
    height: 20px;
`;

const SearchInput = ({placeholder}: ISearchInputProps) => {
    return (
        <InputContainerStyled>
            <SearchStyled />
            <InputStyled placeholder={placeholder}/>
        </InputContainerStyled>
    )
}

export default SearchInput;