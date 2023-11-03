import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const WanitaPage = () => {
  return (
   <>
   <div className='transition-all h-full mt-10 px-4 flex flex-col gap-2'>
   <div id="desc" className='flex flex-col gap-1'>
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
    className="w-[29rem] h-[10rem] overflow-hidden rounded-lg"
   >
    <SwiperSlide>
      <img src="bannerPromo1.jpg" alt="" className='w-full h-full object-cover'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="bannerPromo2.gif" alt="" className='w-full h-full object-cover'/>
    </SwiperSlide>
   </Swiper>
   </div>
   </>
  )
}

export default WanitaPage