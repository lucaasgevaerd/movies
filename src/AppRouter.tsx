import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  )
}

export default AppRouter