import React from 'react'
import { ListContainer } from './ItemListContainer.styled';

const ItemListContainer = (props) => {
    const {message} = props;
    
    return (
        <ListContainer>
            {message}
        </ListContainer>
    )
}

export default ItemListContainer