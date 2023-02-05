import styled, { css } from 'styled-components'
import { ItemContainer, ItemInfo, ItemImg, ItemDescriptiveText, Title, Description, Button, ItemPrice, Ellipse, Price } from './Item.styled'
import React from 'react'


function Item(props) {
    return (
        <ItemContainer key={props.id}>
            <ItemInfo>
                <ItemImg src={props.image}/>
                    <ItemDescriptiveText>
                        <Title>{props.text}</Title>
                        <Description>{props.descrip}</Description>
                    </ItemDescriptiveText>
                <ItemButton/>
            </ItemInfo>
            <ItemPrice>
                <Ellipse/>
                <Price>{props.pr}</Price>
            </ItemPrice>
        </ItemContainer>
    )
}

export default Item


function ItemButton (){
    return(
        <Button>ADD TO CART</Button>
    )
}