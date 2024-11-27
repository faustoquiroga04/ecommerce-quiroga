import { Link } from "react-router-dom";

export default function ItemDetail({name, img, description, category, price, stock}) {

    return (
    <div>
        <h2>{name}</h2>
        <div>
            <img src={img} 
            style={{width: 300}}
            alt={name}
            />
            <div>
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