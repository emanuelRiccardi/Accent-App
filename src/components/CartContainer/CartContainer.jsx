import { useCartContext } from "../../context/CartContext"
import { CartItemContainer, CartImg, InfoContainer, InfoTop, InfoBottom, MainText, ProdQuantity, Button, Margins } from "./CartContainer.styled"

const CartContainer = () => {

    const { cartList, emptyCart, removeProduct, totalPrice } = useCartContext()

    return (
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
                                <ProdQuantity>{prodCart.quantity}</ProdQuantity>
                                <Button onClick={removeProduct}>REMOVE</Button>
                            </InfoBottom>
                        </InfoContainer>
                    </CartItemContainer>
                ))
            }
            <>
                <MainText> Total Price: ${totalPrice}</MainText>
                <Button onClick={emptyCart}> EMPTY CART</Button>
            </>
        </Margins>
    )
}

export default CartContainer
