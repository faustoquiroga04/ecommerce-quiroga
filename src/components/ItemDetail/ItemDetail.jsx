import { Link } from "react-router-dom";
import './ItemDetail.css'

export default function ItemDetail({name, img, description, category, price, stock}) {

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
                <Link to="/cart">Finalizar Compra</Link>
            </div>
        </div>
    </div>
  )
}