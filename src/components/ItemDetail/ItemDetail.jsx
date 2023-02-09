import React from 'react'
import { Detail } from './ItemDetail.styled';
import Item from '../Item/Item';

function ItemDetail(props) {
    const { product } = props;
    return (
        <Detail>
            {   product.find( product => (
                        <Item
                            key={product.id}
                            id={product.id}
                            text={product.name}
                            descrip={product.category}
                            image={product.img}
                            pr={product.price}
                        /> 
                    ))
                    }
        </Detail>
    )
}

export default ItemDetail