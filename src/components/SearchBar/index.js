import React from 'react'
import {SearchBarContainer,Input,Button} from './styles'
import {MdSearch} from "react-icons/md";

export const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Input type="text" name="" id="" placeholder="Busca tu técnico"/>
            <Button><MdSearch size={25}/></Button>
        </SearchBarContainer>
    )
}
