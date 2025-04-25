import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './views/MainPage'
import DisplayProducts from './views/ProductsPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/products" element={<DisplayProducts/>}/>
      </Routes>
    </div>
  )
}

export default App
