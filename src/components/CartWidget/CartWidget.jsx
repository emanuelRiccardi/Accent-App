import React from 'react'
import { IconDiv, NotificationIcon, ShoppingCart } from './CartWidget.styled';

const CartWidget = () => {
    return (
        <IconDiv>
            <ShoppingCart/>
            <NotificationIcon> 0</NotificationIcon>
        </IconDiv>
    )
}

export default CartWidget