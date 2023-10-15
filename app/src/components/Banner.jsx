import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {FreeMode,Navigation,Autoplay} from 'swiper/modules'
import { BannerData } from '../services/BannerData';
const Banner = () => {
  const {isLoading, isError, data, error, isFetching, refetch} = BannerData();
  return (
    <>
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    freeMode={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    loop={true}
    modules={
        [FreeMode,Navigation,Autoplay]
    }
    className='w-[32rem] my-5 h-full transition-all relative flex flex-row justify-center items-center'
    >
    {
        data?.map((banner)=>{
            return(
                <SwiperSlide key={banner.id} className='flex flex-row bg-gray-100 overflow-hidden rounded-lg items-center justify-center'>
                <img src={banner.img} alt=""  className='w-max h-72 object-fill'/>
                </SwiperSlide>
            )
        })
    }
    {/* <div className='w-full transition-all absolute flex flex-row bottom-0 justify-between items-center h-full z-50'>
    <button className={`swiper-button-prev bg-gradient-to-r from-black to-transparent w-10 h-full py-1 absolute left-0 flex flex-row justify-center items-center rounded-br-lg rounded-tr-lg`}>
    <svg xmlns="http://www.w3.org/2000/svg" className={`fill-white`} height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </button>
    <button className={`swiper-button-next bg-gradient-to-l from-black to-transparent w-10 h-full py-1 absolute right-0 flex flex-row justify-center items-center rounded-bl-lg rounded-tl-lg`}>
    <svg xmlns="http://www.w3.org/2000/svg" className={`fill-white`} height="1.5em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    </button>
    </div> */}
    </Swiper>
    </>
  )
}

export default Banner