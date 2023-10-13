import React from 'react'
import { Link } from 'react-router-dom'
import { LinkData } from '../services/LinkData'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from 'swiper/modules'
const Navbar = () => {
  const {isLoading, isError, data, error, isFetching, refetch} = LinkData()
  return (
    <>
    <nav className='my-5'>
    <Swiper 
    slidesPerView={6}
    spaceBetween={30}
    freeMode={true}
    // pagination = {{
    //     clickable: true,
    // }}
    modules={
        [//Pagination,
        FreeMode]
    }
    className='w-[31.5rem] md:w-[99vw]'
    >
    <div className=''>
    {
        data?.map((link)=>{
            return(
                <SwiperSlide key={link.id} className='flex flex-row bg-gray-100 rounded-lg p-1 items-center justify-center'>
                <Link to={link.url} className='text-center flex flex-row justify-center'>
                {link.title}
                </Link>
                </SwiperSlide>
            )
        })
    }
    </div>
    </Swiper>
    </nav>
    </>
  )
}

export default Navbar