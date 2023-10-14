import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { LinkData } from '../services/LinkData'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {FreeMode, Pagination,Navigation} from 'swiper/modules'
const Navbar = () => {
  const {isLoading, isError, data, error, isFetching, refetch} = LinkData();

  const [isFirstSlide, setIsFirstSlide] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };
  return (
    <>
    <nav className='my-5'>
    <Swiper 
    slidesPerView={6}
    spaceBetween={10}
    freeMode={true}
    navigation={{
        clickable: true,
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }}
    // pagination = {{
    //     clickable: true,
    // }}
    modules={
        [//Pagination,
        FreeMode,Navigation]
    }
    className='w-[31rem] h-[3rem] relative flex flex-row justify-center items-center md:w-[99vw]'
    >
    <div className="absolute z-50 top-0 w-7 h-full bg-gradient-to-r from-white to-transparent"></div>
    {data?.map((link)=>{
            return(
                <SwiperSlide key={link.id} className='flex flex-row h-full bg-gray-100 rounded-lg items-center justify-center'>
                <NavLink to={link.url} className='text-center h-full flex flex-row justify-center items-center'>
                {link.title}
                </NavLink>
                </SwiperSlide>
            )
    })}
    <div className="absolute z-50 top-0 w-7 h-full bg-gradient-to-l right-0 from-white to-transparent"></div>
    </Swiper>
    </nav>
    </>
  )
}

export default Navbar