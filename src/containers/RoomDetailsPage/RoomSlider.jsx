import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// images

import Slide1 from '../../img/room/room_5_1.jpg'
import Slide2 from '../../img/room/room_5_2.jpg'
import Slide3 from '../../img/room/room_5_3.jpg'
import Slide4 from '../../img/room/room_5_4.jpg'
import Slide5 from '../../img/room/room_5_5.jpg'
import Slide6 from '../../img/room/room_5_6.jpg'

const images = [
   {
      discount: '540.00',
      image: Slide1
   },

   {
      discount: '540.00',
      image: Slide2
   },
   {
      discount: '540.00',
      image: Slide3
   },
   {
      discount: '540.00',
      image: Slide4
   },
   {
      discount: '540.00',
      image: Slide5
   },
   {
      discount: '540.00',
      image: Slide6
   },

];

const RoomSlider = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   return (
      <div className="main-container">

         <Swiper
            modules={[Navigation, Autoplay, Thumbs]}
            autoplay={{ delay: 3000 }}
            loop={true}
            speed={1000}
            allowTouchMove={false}
            simulateTouch={false}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
               nextEl: ".slider-next",
               prevEl: ".slider-prev",
            }}
            className="panoramaSlide1"
         >
            {images.map((src, index) => (
               <SwiperSlide key={index}>
                  <div className="room-panorama-slide" id={`panorama${index + 1}`}>
                     <img src={src.image} alt={`Panorama ${index + 1}`} />
                     {(index !== 1) && (
                        <span className="discount">${src.discount}/night</span>
                     )}
                  </div>
               </SwiperSlide>
            ))}
            <div className="slider-prev">Prev</div>
            <div className="slider-next">Next</div>
         </Swiper>


         <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            loop={true}
            breakpoints={{
               0: { slidesPerView: 2 },
               576: { slidesPerView: 2 },
               768: { slidesPerView: 3 },
               992: { slidesPerView: 3 },
               1200: { slidesPerView: 5 },
            }}
            spaceBetween={10}
            watchSlidesProgress
            className="room-thumb-slider"
         >
            {images.map((src, index) => (
               <SwiperSlide key={index}>
                  <div className="room-slider-img">
                     <img src={src.image} alt={`Thumbnail ${index + 1}`} />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}


export default RoomSlider;
