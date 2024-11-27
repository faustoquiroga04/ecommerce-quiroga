import { Link } from "react-router-dom";

export default function Item({product}) {
  return (
    <div>
        <img src={product.img} alt={product.name} />
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/detail/${product.id}`}>Ver detalles</Link>
        </div>
    </div>
  )
}

