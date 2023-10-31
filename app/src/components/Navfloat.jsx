import React from 'react'
import './Navfloat.css'
import { NavLink } from 'react-router-dom'
import { navLink } from '../services/NavLink';
const Navfloat = () => {
  const {isLoading, isError, data, error, isFetching, refetch} = navLink();
  return (
    <nav className='flex flex-row justify-center items-center gap-x-12 fixed w-screen bottom-0 h-20 bg-white '>
    {data?.map((item)=>{
      return(
        <NavLink className='navLink' to={item.url} key={item.id}>
          <div className='navLink flex flex-col justify-center items-center gap-1.5'>
          <img src={item.icon} alt=""  className='h-5'/>
          <h1 className='text-[0.880rem] pb-1'>{item.desc}</h1>
          </div>
        </NavLink>
      )
    })}
    </nav>
  )
}

export default Navfloat