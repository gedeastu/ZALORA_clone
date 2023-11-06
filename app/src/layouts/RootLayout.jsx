import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search'
import Navfloat from '../components/Navfloat'
import Navbar from '../components/navbar'
const RootLayout = () => {
  return (
   <>
   <Search/>
   <Navbar/>
   <Outlet/>
   <Navfloat/>
   </>
  )
}

export default RootLayout