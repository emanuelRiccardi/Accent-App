import { useEffect, useState } from 'react';

import { useCartContext } from "../../context/CartContext"
import { MainText, Button, Margins, BottomDetail } from "./CartContainer.styled"
import NoProduct from "../NoProduct/NoProduct";
import OrderForm from "../Form/OrderForm";
import CartList from "../CartList/CartList";
import { ItemsCentered, SecondaryText } from "../NoProduct/NoProduct.styled";

const CartContainer = () => {

    const { cartList, emptyCart, totalPrice } = useCartContext()
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('')

    useEffect(() => {
        if (cartList.length != 0) {
            setLoading(true)
        }
        else {
            setLoading(false)
        }
    }, [cartList])

    return (
        <>
            {id.length === 0 ? <h1></h1>
                :
                <ItemsCentered>
                    <MainText>Your order number is:
                        <SecondaryText>{id}</SecondaryText>
                    </MainText>
                </ItemsCentered>
            }
            {
                loading ?

                    <Margins>
                        {
                            <CartList />
                        }
                        <BottomDetail>
                            <MainText> Total Price: ${totalPrice()}</MainText>
                            <Button onClick={emptyCart}> EMPTY CART</Button>
                        </BottomDetail>
                        <OrderForm setId={setId} />
                    </Margins>

                    :

                    <>
                        <NoProduct />
                    </>

            }
        </>
    )
}

export default CartContainer
