import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import PromoWanita from '../components/PromoWanita'
import BannerWanita from '../components/BannerWanita'
const MainLayout = () => {
  const[sticky,setSticky] = useState(false)
  return (
    <>
    <header className={`w-screen flex  flex-col items-center px-4`}>
    {/* <button onClick={()=>dispatch(toSticky())}>{condition ? 'true':'false'}</button> */}
    <nav id='navbar' className={`${condition ? `fixed` : `sticky`} my-5 h-[9.5rem] relative`}>
    <Navbar/>
    {location.pathname === '/' ? <PromoWanita/> : null}
    </nav>
    {location.pathname === '/' ? <BannerWanita/> : null}
    </header>
    <main className='mb-96'>
    <Outlet/>
    </main>
    </>
  )
}

export default MainLayout