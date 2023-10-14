import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Promo from '../components/Promo'
const MainLayout = () => {
  return (
    <>
    <header className='w-screen flex flex-col items-center'>
    <nav className='my-5 h-[9.5rem] relative'>
    <Navbar/>
    <Promo/>
    </nav>
    </header>
    <main>
    <Outlet/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default MainLayout