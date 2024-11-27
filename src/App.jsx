import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <BrowserRouter basename="/ecommerce-quiroga">
      <NavBar title='Tienda React'/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/chechout' element={<Checkout />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App