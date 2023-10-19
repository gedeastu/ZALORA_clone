import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search'
import Navfloat from '../components/Navfloat'
const RootLayout = () => {
  return (
   <>
   <Search/>
   <Outlet/>
   <Navfloat/>
   </>
  )
}

export default RootLayout