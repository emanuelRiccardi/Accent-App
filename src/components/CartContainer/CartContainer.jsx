import { useCartContext } from "../../context/CartContext"
import { useEffect, useState } from 'react';
import { CartItemContainer, CartImg, InfoContainer, InfoTop, InfoBottom, MainText, ProdQuantity, Button, Margins } from "./CartContainer.styled"
import OrderForm from "../Form/OrderForm";
import { Link } from "react-router-dom";

const CartContainer = () => {

    const { cartList, emptyCart, removeProduct, totalPrice } = useCartContext()
    const [loading, setLoading ] = useState(false);

    useEffect(()=>{
        if ( cartList.length != 0 ) {
            setLoading(true)
        }
        else{
            setLoading(false)
        }
    }, [cartList])

    return (
        <>
        {
            loading ?

            <Margins>
            {   
                cartList.map(prodCart => (
                    <CartItemContainer key={prodCart.id}>
                        <CartImg src={prodCart.image}/>
                        <InfoContainer>
                            <InfoTop>
                                <MainText>{prodCart.text}</MainText>
                                <MainText>{prodCart.pr}</MainText>
                            </InfoTop>
                            <InfoBottom>
                                <ProdQuantity>x{prodCart.quantity}</ProdQuantity>
                                <Button onClick={()=> removeProduct(prodCart.id)}>REMOVE</Button>
                            </InfoBottom>
                        </InfoContainer>
                    </CartItemContainer>
                ))
            }
                    <MainText> Total Price: ${totalPrice()}</MainText>
                    <Button onClick={emptyCart}> EMPTY CART</Button>
                    <OrderForm/>
            </Margins>

            : 

            <div>
                <h2> Looks like your cart is empty</h2>
                <Link to='/'>
                    <Button>Back to home</Button>
                </Link>
            </div>
            
        }
        </>
    )
}

export default CartContainer
