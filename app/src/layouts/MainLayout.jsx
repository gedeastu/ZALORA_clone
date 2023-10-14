import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Search from '../components/Search'
const MainLayout = () => {
  return (
    <>
    <header className='w-screen flex flex-col items-center'>
    <Navbar/>
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