import React from 'react'
import { Container } from './ItemDetail.styled';
import OneItem from '../OneItem/OneItem';

function ItemDetail(props) {
    const { products } = props;
    return (
        <Container>
            {   products.map( product => (
                        <OneItem
                            key={product.id}
                            id={product.id}
                            text={product.name}
                            descrip={product.category}
                            image={product.img}
                            pr={product.price}
                        /> 
                    ))
            }
        </Container>
    )
}

export default ItemDetail