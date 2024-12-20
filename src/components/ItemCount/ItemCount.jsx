import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
export default function ItemCount({initialValue=1, stock}) {
    const [amount, setAmount] = useState(initialValue)
    const {addItem} = useCart()
    const decrement = () => {
        setAmount(amount > 1 ? amount - 1 : amount)
    }

    const increment = () => {
        setAmount(amount < stock ? amount + 1 : amount)
    }
    return (
    <>
        <h1>{amount}</h1>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={() => addItem(amount)}>Agregar al carrito</button>
        <button onClick={increment}>Incrementar</button>
    </>
  )
}