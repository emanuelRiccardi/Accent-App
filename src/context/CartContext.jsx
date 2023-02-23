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

    const totalPrice = () => cartList.reduce( (count, product) => count += (product.quantity*product.price))

    const removeProduct = (id) => setCartList(cartList.filter( prod => prod.id !== id ))

    const emptyCart = () =>{
        setCartList([])
    }

    
    return (
            <CartContext.Provider value={{
                cartList, 
                addCart,
                emptyCart,
                totalPrice,
                removeProduct
            }}>
                {children}
            </CartContext.Provider>
    )

}




