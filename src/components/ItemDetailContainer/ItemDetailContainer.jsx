import { useEffect, useState } from "react"
import { getProductByID } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(() => {
    getProductByID(productId)
      .then((res) => {
        setProduct(res)
      })
  }, [productId])
  return (
    <div>
        <h2>Detalle del Producto</h2>
        <ItemDetail {...product}/>
    </div>
  )
}