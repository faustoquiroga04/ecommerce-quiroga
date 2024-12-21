import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(() => {
    getDoc(doc(db, 'products', productId))
      .then((querySnapshot) => {
        const prod = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(prod)
      })
      .catch((error) => {
        console.log('Error searching product', error)
      })
  }, [productId])

  return (
    <div className='producto'>
        <h2>Detalle del Producto</h2>
        <hr />
        <ItemDetail {...product}/>
    </div>
  )
}