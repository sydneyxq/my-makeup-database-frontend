import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './views/MainPage'
import ProductsPage from './views/ProductsPage'
import ProductDetailsPage from './views/ProductDetailsPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:name" element={<ProductDetailsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
