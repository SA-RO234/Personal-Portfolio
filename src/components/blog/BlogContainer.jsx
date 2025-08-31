import React from 'react'
import BlogItems from './BlogItems'

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const BlogContainer = () => {
  return (
     <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="flex gap-10 pt-20 pb-[100px]"
            centeredSlides={window.innerWidth < 768} // Center on mobile, start on md+
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              375: { slidesPerView: 1, spaceBetween: 54 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
       
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItems/>
        </SwiperSlide>
        </Swiper>
   
  )
}

export default BlogContainer