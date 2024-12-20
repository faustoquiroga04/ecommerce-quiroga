import { createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)){
            setCart((prev) => [...prev, itemToAdd])
        } else{
            console.log('El item ya está en el carrito')
        }
    } 
    const removeItem = () => {}
    const clearCart = () => {}
    const getTotal = () => {}
    // const getTotalQuantity = () => {}
    //const totalQuantity = getTotalQuantity()
    const totalQuantity = 0

    const obj = {
        // cart, 
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalQuantity,
    }
    return (
        <CartContext.Provider value ={obj}>
            {children}
        </CartContext.Provider>
    )
}