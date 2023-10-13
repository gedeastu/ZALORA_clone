import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search'
const RootLayout = () => {
  return (
   <>
   <Search/>
   <Outlet/>
   </>
  )
}

export default RootLayout