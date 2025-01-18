import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import Create from './Components/Create/Create'
import Footer from './Components/Footer/Footer'
import Product from './Components/Product/Product'
import Qutes from './Components/Qutes/Qutes'
import ProdC from './Components/Category/ProdC';
import { Routes,Route } from 'react-router-dom'
import ProductD from './Components/Product/ProductD'
function App() {


  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home />}></Route>
        <Route path='/Category' element={<Category />}></Route>
        <Route path='/Create' element={<Create />} ></Route>
        <Route path='/Products' element={<Product/>}></Route>
        <Route path='/Qutes' element={<Qutes/>}></Route>
        <Route path='/Category/:categoryId' element={<ProdC />} />
        <Route path="/product/:productId" element={<ProductD />} />
       
        


        
</Routes>
<Footer/>
    </>
  )
}

export default App
