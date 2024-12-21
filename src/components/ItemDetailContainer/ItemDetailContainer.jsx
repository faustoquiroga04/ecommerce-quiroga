import { useEffect, useState } from "react"
//import { getProductByID } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  // useEffect(() => {
  //   getProductByID(productId)
  //     .then((res) => {
  //       setProduct(res)
  //     })
  // }, [productId])

  useEffect(() => {
    getDoc(doc(db, 'products', productId))
      .then((querySnapshot) => {
        const prod = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(prod)
      })
      .catch((error) => {
        console.log('Error searching product', error)
      })
  })

  return (
    <div className='producto'>
        <h2>Detalle del Producto</h2>
        <hr />
        <ItemDetail {...product}/>
    </div>
  )
}