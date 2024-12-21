import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

export default function ItemCount({initialValue=1, stock}) {
    const [cantidad, setCantidad] = useState(initialValue)
    const {addItem} = useCart()
    
    const decrement = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)
    }

    const increment = () => {
        setCantidad(cantidad < stock ? cantidad + 1 : cantidad)
    }
    return (
    <>
        <h1>{cantidad}</h1>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={() => addItem(cantidad)}>Agregar al carrito</button>
        <button onClick={increment}>Incrementar</button>
    </>
  )
}