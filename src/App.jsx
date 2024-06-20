import { useState } from 'react'
import Header from './components/layout/header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Admin from './pages/admin'
import SinglePage from './pages/singlepage'
import Footer from './components/layout/footer'
import CreateProduct from './pages/admin/createproduct'
import AdminProducts from './pages/admin/adminProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='createproduct' element={<CreateProduct />}/>
          <Route path='adminproducts' element={<AdminProducts />}/>
        </Route>
        <Route path='/singlepage' element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
