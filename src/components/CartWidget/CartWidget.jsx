import React from 'react'
import { useEffect, useState } from 'react';
import { useCartContext } from "../../context/CartContext"
import { IconDiv, NotificationIcon, ShoppingCart, NotificationIconEmpty } from './CartWidget.styled';

const CartWidget = () => {
    
    const { cartList, totalQuantity } = useCartContext()
    const [ifEmpty, setIfEmpty ] = useState();

    useEffect(()=>{
        if (totalQuantity() >= 1){
            setIfEmpty(true)
        }
        if (totalQuantity() === 0){
            setIfEmpty(false)
        }
    }, [cartList])

    return (
        <IconDiv>
            <ShoppingCart/>

            {ifEmpty && <NotificationIcon> { totalQuantity() } </NotificationIcon>}
            {!ifEmpty && <NotificationIconEmpty/>}

        </IconDiv>
    )
}

export default CartWidget