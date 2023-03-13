import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addCart = ( product ) => {

        const idx = cartList.findIndex(idxProduct => idxProduct.id === product.id)
        if(idx !== -1){
            cartList[idx].quantity += product.quantity
            setCartList([...cartList])
            return
        }

        setCartList([
            ...cartList,
            product
        ])
    }

    const totalPrice = () => cartList.reduce((count, product) => {
        if (product && product.pr && typeof product.pr === 'number' && product.quantity && typeof product.quantity === 'number') {
            return count + (product.quantity * product.pr);
        }
        return count;
    }, 0);

    const removeProduct = (id) => setCartList(cartList.filter( prod => prod.id !== id ))

    const totalQuantity = () => cartList.reduce( (count, product) => count += product.quantity, 0)

    const emptyCart = () =>{
        setCartList([])
    }
    return (
            <CartContext.Provider value={{
                cartList, 
                addCart,
                emptyCart,
                totalPrice,
                removeProduct,
                totalQuantity
            }}>
                {children}
            </CartContext.Provider>
    )

}




