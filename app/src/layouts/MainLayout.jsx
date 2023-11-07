import React from 'react'
import { Outlet } from 'react-router-dom'
import PromoWanita from '../components/PromoWanita'
import BannerWanita from '../components/BannerWanita'
const MainLayout = () => {
  return (
    <>
    <div className='mb-96'>
    <div className={`w-screen flex  flex-col items-center`}>
    {/* <button onClick={()=>dispatch(toSticky())}>{condition ? 'true':'false'}</button> */}
    <nav id='navbar' className={`h-[9.5rem] relative w-full`}>
    {location.pathname === '/' ? <PromoWanita/> : null}
    </nav>
    {location.pathname === '/' ? <BannerWanita/> : null}
    </div>
    <Outlet/>
    </div>
    </>
  )
}

export default MainLayout