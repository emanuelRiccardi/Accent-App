import React from 'react'
import { IconDiv } from './CartWidget.styled';
import { NotificationIcon } from './CartWidget.styled';
import { ShoppingCart } from './CartWidget.styled';

const CartWidget = () => {
    return (
        <IconDiv>
            <ShoppingCart/>
            <NotificationIcon> 0</NotificationIcon>
        </IconDiv>
    )
}

export default CartWidget