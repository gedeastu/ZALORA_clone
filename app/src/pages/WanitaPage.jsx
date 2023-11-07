import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const WanitaPage = () => {
  return (
   <>
   <div className='w-full transition-all h-full flex flex-col gap-2 mt-10'>
   <div id="desc" className='flex flex-col gap-1 px-3'>
   <h1 className='text-lg font-semibold w-[90%]'>Emang Bisa Gratis Onkir dan Double Diskon dari Partner di ZALORA</h1>
   <p className='text-black/50 py-1'>Bisa dong! cek selengkapnya disini ya!</p>
   </div>
   <Swiper
    loop = {'true'}
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    // pagination={{
    //   clickable: true,
    // }}
    // navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="w-[96%] h-[13rem] overflow-hidden rounded-lg"
   >
    <SwiperSlide>
      <img src="bannerPromo1.jpg" alt="" className='w-full h-full object-cover'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="bannerPromo2.gif" alt="" className='w-full h-full object-cover'/>
    </SwiperSlide>
   </Swiper>
   </div>

   <div className='w-full transition-all h-full flex flex-col gap-2 mt-10'>
   <div id="desc" className='flex flex-col gap-1 px-3'>
   <h1 className='text-xl font-semibold w-[90%]'>Promo sebelum 11.11✨</h1>
   </div>
   <img src="promo1111.jpeg" alt="" className='w-[96%] mx-auto rounded-lg'/>
   </div>
   </>
  )
}

export default WanitaPage