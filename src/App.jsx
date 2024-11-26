import './App.css'
import Nav from './components/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='./' element={<h1>Home</h1>}/>
        <Route path='./nosotros' element={<h1>Nosotros</h1>} />
        <Route path='./contacto' element={<h1>Contacto</h1>} />
      </Routes>
    </Router>
  )
}

export default App
