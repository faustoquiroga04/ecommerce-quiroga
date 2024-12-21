import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

export default function ItemDetail({id, name, img, description, category, price, stock}) {
    const {addItem, isInCart} = useCart()

    const handleAdd = (count) => {
        const productToAdd = {
            id, name, price, quantity: count
        }
        addItem(productToAdd)
    }
    
    return (
    <div>
        <div className="itemDetail">
            <img src={img} 
            style={{width: 300}}
            alt={name}
            />
            <div className="itemDetailText">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Categoria: {category}</p>
                <p>Precio: ${price}</p>
                <p>Disponible: {stock}</p>
            </div>
            {
                isInCart(id) ? (
                    <Link to="/cart">Finalizar Compra</Link>
                ) 
                : (
                    <ItemCount stock={stock} onAdd={handleAdd}/>
                )
            }

        </div>
    </div>
  )
}