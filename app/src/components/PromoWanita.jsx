import React, { useEffect,useRef,useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { PromoData } from '../services/PromoData';
const Promo = () => {
  const paragraphStyles = {
    WebkitLineClamp : 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  }
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false)
  const ref = useRef(null)
  useEffect(()=>{
    if(ref.current){
        console.log(ref.current.scrollHeight, ref.current.clientHeight)
        setShowReadMoreButton(ref.current.scrollHeight !== ref.current.clientHeight)
    }
  },[])
  const handleClick = () => {
    setIsOpen(prevstate => !prevstate);
  }
  const location = useLocation();
  const {isLoading, isError, data, error, isFetching, refetch} = PromoData();
  return (
    <>
    <Swiper 
    slidesPerView={6}
    spaceBetween={10}
    // pagination={{
    //   clickable: true,
    // }}
    // modules={[Pagination]}
    className='w-[29rem] mt-3 transition-all'
    >
        {data?.map((promo)=>{
            return(
                <SwiperSlide key={promo.id} className='flex flex-row'>
                    <div className='scale-90'>
                    <img src={promo.image} alt="" />
                    <h1 className='text-center' 
                    ref={ref} 
                    style={isOpen ? null : paragraphStyles}>{promo.title}</h1>
                    {showReadMoreButton ? (
                        <button onClick={handleClick} className='transition-all font-semibold text-[0.80rem] duration-200 w-max'>{
                            isOpen ? 'read less...' : 'read more...'
                        }</button>
                    ) : null}
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </>
  )
}

export default Promo