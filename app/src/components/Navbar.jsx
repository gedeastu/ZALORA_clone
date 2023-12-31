import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { LinkData } from '../services/LinkData'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {FreeMode,Navigation} from 'swiper/modules'
const Navbar = () => {
  const {isLoading, isError, data, error, isFetching, refetch} = LinkData();

  // const [isFirstSlide, setIsFirstSlide] = useState(true);
  // const [isLastSlide, setIsLastSlide] = useState(false);

  // const handleSlideChange = (swiper) => {
  //   setIsFirstSlide(swiper.isBeginning);
  //   setIsLastSlide(swiper.isEnd);
  // };
  return (
    <>
    <div className='w-[31rem] h-[3rem] px-3.5 relative'>
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
        className='w-full h-full rounded-lg transition-all relative z-[60] flex flex-row justify-center items-center md:w-[99vw]'
        >
        {
            data?.map((link)=>{
                return(
                    <SwiperSlide key={link.id} className='flex relative z-[60] flex-row h-full bg-gray-100 w-full overflow-hidden rounded-lg items-center justify-center'>
                    <NavLink to={link.url} className='text-center h-full flex flex-row justify-center items-center'>
                    <div className='navBar w-full h-full flex flex-row justify-center items-center'>
                    {link.title}
                    </div>
                    </NavLink>
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
        {/* <div className='w-full transition-all absolute flex flex-row top-3 justify-between items-center h-[3rem] z-10'> */}
        <button className={`swiper-button-prev bg-gradient-to-r from-black/50 to-transparent w-10 h-full py-1 absolute top-0 z-10 left-2 flex flex-row justify-center items-center rounded-lg`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`fill-black`} height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        <button className={`swiper-button-next bg-gradient-to-l from-black/50 to-transparent w-10 h-full py-1 absolute top-0 z-10 right-2 flex flex-row justify-center items-center rounded-lg`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`fill-black`} height="1.5em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
    </div>
    </>
  )
}

export default Navbar