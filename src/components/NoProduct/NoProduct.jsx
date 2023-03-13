import React from 'react'
import { Link } from 'react-router-dom'

import { MainText } from '../CartContainer/CartContainer.styled'
import { Button } from '../Item/Item.styled'
import { ImgContainer3, ItemsCentered, SecondaryText } from './NoProduct.styled'
import emptyCartImg from '../../assets/imgs/EmptyCart.png'

function NoProduct() {

    return (
        <ItemsCentered>
            <ImgContainer3><img src={emptyCartImg} /></ImgContainer3>
            <MainText>Your cart is empty</MainText>
            <SecondaryText>Looks like you have not added abything to your cart.
                <br />
                Go ahead and explore top categories
            </SecondaryText>
            <Link to='/'>
                <Button>Back to home</Button>
            </Link>
        </ItemsCentered>
    )
}

export default NoProduct