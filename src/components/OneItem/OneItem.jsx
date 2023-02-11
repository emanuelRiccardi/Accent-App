import React from 'react'
import { Detail, ImgContainer, Img, Elements, Title, Category, Description, Button, PriceTag, Price } from './OneItem.styled';


function OneItem(props) {
    const { product } = props;
    return ( 
            <Detail key={props.id}>
                <ImgContainer>
                    <Img src={props.img}/>
                </ImgContainer>
                    <Elements>
                        <Title>{props.text}/</Title>
                        <Category descrip={product.descrip}/>
                        <Description> Lorem ipsum dolor sit amet consectetur. Scelerisque a turpis lectus malesuada. Consectetur ut velit in aliquam erat sit sagittis.</Description>
                        <ItemButton/>
                        <PriceTag>
                            <Price>${props.pr} </Price> 
                        </PriceTag>
                    </Elements>
            </Detail> 
    )
}

export default OneItem


function ItemButton (){
    return(
        <Button>ADD TO CART</Button>
    )
}