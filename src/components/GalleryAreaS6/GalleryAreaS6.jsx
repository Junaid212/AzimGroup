import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Gimag1 from '../../img/gallery/gallery_6_1.jpg'
import Gimag2 from '../../img/gallery/gallery_6_2.jpg'
import Gimag3 from '../../img/gallery/gallery_6_3.jpg'
import Gimag4 from '../../img/gallery/gallery_6_4.jpg'
import Gimag5 from '../../img/gallery/gallery_6_5.jpg'

const GalleryAreaS6 = () => {
   return (
      <div className="gallery-area4 space-extra-top overflow-hidden">
         <div className="container">
            <div className="title-area">
               <span className="sub-title2 style1 ">SERVICE IN PICTURES</span>
               <h2 className="sec-title">Awesome Gallery</h2>
            </div>
         </div>

         <div className="container">
            <div className="slider-wrap">
               <Swiper className="swiper th-slider gallery-slider4" id="gallerySlider4"
                  loop={true}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 2 },
                     992: { slidesPerView: 2 },
                     1200: { slidesPerView: 5 },
                  }}
               >
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag1} alt="gallery image" />
                           <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag2} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag3} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag4} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag5} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag2} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag3} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="gallery-card2">
                        <div className="box-img">
                           <img src={Gimag4} alt="gallery image" />
                            <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>


   );
};

export default GalleryAreaS6;