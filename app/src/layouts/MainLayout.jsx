import React from 'react'
import { Outlet } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { toSticky,toFixed,toValue } from '../features/NavbarSticky'
import Navbar from '../components/navbar'
import PromoWanita from '../components/PromoWanita'
import BannerWanita from '../components/BannerWanita'
const MainLayout = () => {
  const condition = useSelector((state) => state.condition.conditionSticky)
  const value = useSelector((state)=>state.condition.scrollPosition)
  const dispatch = useDispatch();
  const scrollCondition = ()  => {
    if(value >= 100){
      dispatch(()=>toSticky())
    }else{
      dispatch(()=>toFixed())
    }
  }
  window,addEventListener('scroll',scrollCondition);
  return (
    <>
    <header className={`w-screen flex  flex-col items-center px-4`}>
    <h1>{value}</h1>
    {/* <button onClick={()=>dispatch(toSticky())}>{condition ? 'true':'false'}</button> */}
    <nav id='navbar' className={`${condition ? `fixed` : `sticky`} my-5 h-[9.5rem] relative`}>
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