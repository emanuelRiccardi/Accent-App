import React from 'react'
import { Detail, ImgContainer, Img, Elements, Title, Category, Description, Button, PriceTag, Price } from './OneItem.styled';
import { useCartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount/ItemCount';

function OneItem(props) {

    const { addCart } = useCartContext()

    function onAdd(quantity){
        console.log(quantity)
        addCart( { ...props, quantity } )
    }

    return ( 
            <Detail key={props.id}>
                <ImgContainer>
                    <Img src={props.image}/>
                </ImgContainer>
                    <Elements>
                        <Title>{props.text}</Title>
                        <Category>{props.descrip}</Category>
                        <Description> Lorem ipsum dolor sit amet consectetur. Scelerisque a turpis lectus malesuada.</Description>
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        <PriceTag>
                            <Price>${props.pr} </Price> 
                        </PriceTag>
                    </Elements>
            </Detail> 
    )
}

export default OneItem