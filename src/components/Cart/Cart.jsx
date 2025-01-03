import { Link } from 'react-router-dom'
import './Cart.css'
import { useCart } from '../../hooks/useCart'
import CartItem from '../CartItem/CartItem';

export default function Cart() {
  const { cart, clearCart, getTotal, totalQuantity } = useCart();

  const total = getTotal()
  if(totalQuantity === 0) {
    return <h1>No hay items en el carrito</h1>
  }
  
  return (
    <div className='cart'>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <CartItem key={item.id} {...item}/>
      ))}
      <h3>Total: ${total}</h3>
      <div>
        <button onClick={clearCart}>Limpiar Carrito</button>
      </div>
      <Link to='/checkout'>Comprar</Link>
    </div>
  )
}