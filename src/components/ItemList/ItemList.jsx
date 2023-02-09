import React from 'react'
import { List } from './ItemList.syled'
import Item from '../Item/Item';

function ItemList(props) {
    const { products } = props;
    return (
        <List>
            {   products.map( product => (
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
        </List>
    )
}

export default ItemList