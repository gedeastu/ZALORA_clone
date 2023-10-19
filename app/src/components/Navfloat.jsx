import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLink } from '../services/NavLink';
const Navfloat = () => {
  const {isLoading, isError, data, error, isFetching, refetch} = navLink();
  console.log(data)
  return (
    <nav>
    {data?.map((item)=>{
      return(
        <NavLink key={item.id}>
          <h1>{item.desc}</h1>
        </NavLink>
      )
    })}
    </nav>
  )
}

export default Navfloat