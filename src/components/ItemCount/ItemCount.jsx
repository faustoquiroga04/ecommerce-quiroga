import { useState } from 'react'

export default function ItemCount({initialValue=1, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initialValue)
    
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
        <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        <button onClick={increment}>Incrementar</button>
    </>
  )
}