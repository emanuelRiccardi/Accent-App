import { useCartContext } from "../../context/CartContext"
import { MainText, Button } from "../CartContainer/CartContainer.styled"
import { CartItemContainer, CartImg, InfoContainer, InfoTop, InfoBottom, ProdQuantity } from "./CartListStyled"

function CartList() {

    const { cartList, removeProduct } = useCartContext()

    return (
        cartList.map(prodCart => (
            <CartItemContainer key={prodCart.id}>
                <CartImg src={prodCart.image} />
                <InfoContainer>
                    <InfoTop>
                        <MainText>{prodCart.text}</MainText>
                        <MainText>{prodCart.pr}</MainText>
                    </InfoTop>
                    <InfoBottom>
                        <ProdQuantity>x{prodCart.quantity}</ProdQuantity>
                        <Button onClick={() => removeProduct(prodCart.id)}>REMOVE</Button>
                    </InfoBottom>
                </InfoContainer>
            </CartItemContainer>
        ))
    )
}

export default CartList