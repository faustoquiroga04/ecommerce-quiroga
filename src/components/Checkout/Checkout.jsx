import { useState } from "react"
import { useCart } from "../../hooks/useCart"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import {db} from "../../services/firebase"
function Checkout() {

  const [orderCreated, setOrderCreated] = useState(false)

  const {cart, clearCart, getTotal, totalQuantity} = useCart()

  const total = getTotal()

  const createOrder = async() => {
    try{
      const objectOrder = {
      buyer: {
        firstName: "Matias",
        lastName: "Perez",
        phone: "12345678",
        address: "Calle falsa 123",
        email: "dHs2o@example.com"
      },
      items: cart, 
      totalQuantity,
      total,
      date: new Date()
    }

    const ids = cart.map((item) => item.id)
    const productRef = collection(db, "products")

    const productsAddedFromFirestore = await getDocs(
      query(productRef, where(documentId(), "in", ids)))

    const { docs } = productsAddedFromFirestore

    const outOfStock = []

    const batch = writeBatch(db)

    docs.forEach((doc) => {
    const dataDoc = doc.data()
    const stockDb = dataDoc.stock
      
    const productAddedToCart = cart.find((prod) => prod.id === doc.id)
    const prodQuantity = productAddedToCart.quantity

    if(stockDb >= prodQuantity) {
      batch.update(doc.ref, {stock: stockDb - prodQuantity})
    }else {
      outOfStock.push({id: doc.id, ...dataDoc })
    }
    })
    if(outOfStock.length === 0) {
      await batch.commit()
      const orderRef = collection(db, "orders")
      const orderAdded = await addDoc(orderRef, objectOrder)
      console.log(`El id de su orden es: ${orderAdded.id}`)
      clearCart()
      setOrderCreated(true)
    }else {
      console.log('No hay stock suficiente')
    } 
    }catch(error){
      console.log(error)
    }
  }
  if(orderCreated) {
    return <h1>Orden creada con exito</h1>
  }
  return (
    <div>
      {/* <form onSubmit={createOrder}>
        <label>Nombre</label>
        <input type="text" />

        <label>Apellido</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Telefono</label>
        <input type="number" />
      </form>
      <button type="submit">Generar Orden de Compra</button> */}
    <button onClick={createOrder}>Generar Orden de Compra</button>
    </div>
  )
}
export default Checkout