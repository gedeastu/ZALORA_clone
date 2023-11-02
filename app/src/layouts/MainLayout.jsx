import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Promo from '../components/Promo'
import Banner from '../components/Banner'
const MainLayout = () => {
  return (
    <>
    <header className='w-screen flex flex-col items-center'>
    <nav className='my-5 h-[9.5rem] relative'>
    <Navbar/>
    </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default MainLayout