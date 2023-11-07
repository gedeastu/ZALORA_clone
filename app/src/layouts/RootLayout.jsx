import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { toFixed } from '../features/NavbarSticky'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search'
import Navfloat from '../components/Navfloat'
import Navbar from '../components/navbar'
const RootLayout = () => {
  const conditionSticky = useSelector((state) => state.condition.conditionSticky)
  const dispatch = useDispatch();
  const scrollCondition = ()  => {
    if(window.scrollY > 50){
      dispatch(toFixed(true))
    }else{
      dispatch(toFixed(false))
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',scrollCondition);
    return () => {
      window.removeEventListener('scroll',scrollCondition);
    };
  },[])
  return (
   <>
   <header className={`
   sticky z-50 top-0 transition-all duration-300 ${conditionSticky ? `shadow-md`:`shadow-none`}
   `}>
   <Search/>
   <nav className='bg-white z-10 h-full py-2'>
   <Navbar/>
   </nav>
   </header>
   {/* <nav className='sticky top-40 bg-white z-10 h-full py-2'>
   <Navbar/>
   </nav> */}
   <main>
   <Outlet/>
   </main>
   <Navfloat/>
   </>
  )
}

export default RootLayout