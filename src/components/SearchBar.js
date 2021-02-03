import React from 'react'
import styled from 'styled-components'

const StyledSearchBar = styled.div`
    background-color: #feebef;
    height: 60px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
`
const StyledSearchField = styled.input`
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.05);
    font-size: 16px;
    width: 100%;
    max-width: 640px;
    padding-left: 25px;
    box-sizing: border-box;
`

const SearchBar = (props) => {
    const setFilter = (e) => {
        props.setFilter(e.target.value)
    }

    return <StyledSearchBar>
        <StyledSearchField type="text" placeholder="Search" value={props.filter} onChange={setFilter} />
    </StyledSearchBar>
}

export default SearchBar