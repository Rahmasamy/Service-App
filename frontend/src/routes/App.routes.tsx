import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommingSoonPage from '../layouts/CommingSoonPage'
export default function AppRoutes() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<CommingSoonPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}
