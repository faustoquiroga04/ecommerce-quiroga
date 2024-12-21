import { useEffect, useState } from 'react'
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    // useEffect(() => {
    //     const asyncFunction = categoryId ? getProductsByCategory : getProducts
    //     asyncFunction(categoryId)
    //         .then((data) => setProducts(data))
    // }, [categoryId])

    useEffect(() => {
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

            getDocs(collectionRef)
                .then((querySnapshot) => {
                    const productos = querySnapshot.docs.map(doc => {
                        return {id: doc.id, ...doc.data()}
                    })
                    setProducts(productos)
                })
                .catch((error) => console.log('Error searching products', error))
    }, [categoryId])

    return (
        <div>
            <h2 className='greeting'>Bienvenido a Tienda React</h2>
            <ItemList products={products} />
        </div>
  )
}