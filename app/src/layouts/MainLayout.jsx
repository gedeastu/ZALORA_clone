import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import PromoWanita from '../components/PromoWanita'
import BannerWanita from '../components/BannerWanita'
const MainLayout = () => {
  const location = useLocation();
  return (
    <>
    <header className='w-screen flex flex-col items-center px-4'>
    <nav className='my-5 h-[9.5rem] relative px-4'>
    <Navbar/>
    {location.pathname === '/' ? <PromoWanita/> : null}
    </nav>
    {location.pathname === '/' ? <BannerWanita/> : null}
    </header>
    <main className=''>
    <Outlet/>
    </main>
    </>
  )
}

export default MainLayout