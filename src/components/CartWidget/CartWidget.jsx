import React from 'react'
import { useEffect, useState } from 'react';
import { useCartContext } from "../../context/CartContext"
import { IconDiv, NotificationIcon, ShoppingCart, NotificationIconEmpty } from './CartWidget.styled';

const CartWidget = () => {
    
    const { totalQuantity } = useCartContext()
    const [ifEmpty, setIfEmpty ] = useState();

    useEffect(()=>{
        if (totalQuantity() >= 1){
            setIfEmpty(true)
            console.log('mayor a cero verdadero')
        }
        if (totalQuantity() === 0){
            setIfEmpty(false)
            console.log('mayor a cero falso')
        }
    }, [ifEmpty])

    return (
        <IconDiv>
            <ShoppingCart/>

            {ifEmpty && <NotificationIcon> { totalQuantity() } </NotificationIcon>}
            {!ifEmpty && <NotificationIconEmpty/>}

        </IconDiv>
    )
}

export default CartWidget