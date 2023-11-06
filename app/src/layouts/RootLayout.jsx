import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search'
import Navfloat from '../components/Navfloat'
import Navbar from '../components/navbar'
const RootLayout = () => {
  return (
   <>
   <header className=''>
   <Search/>
   <Navbar/>
   </header>
   <main>
   <Outlet/>
   </main>
   <Navfloat/>
   </>
  )
}

export default RootLayout