//import { Link } from "react-router-dom";
import './ItemDetail.css'
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({id, name, img, description, category, price, stock}) {

    const {addItem} = useCart()
    
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
                {<ItemCount stock={stock} onAdd={handleAdd}/>}
                {/* <Link to="/cart">Finalizar Compra</Link> */}
            </div>
        </div>
    </div>
  )
}