import { Link } from "react-router-dom";
import './Item.css'

export default function Item({product}) {
  return (
    <div className='item'>
        <img src={product.img} alt={product.name} />
        <div className="itemText">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link className="details" to={`/detail/${product.id}`}>Ver detalles</Link>
        </div>
    </div>
  )
}

