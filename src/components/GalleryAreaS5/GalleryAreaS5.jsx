import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay,  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';

import tripadvisor from '../../img/icon/tripadvisor.svg'
import img1 from '../../img/gallery/gallery_4_1.jpg'
import img2 from '../../img/gallery/gallery_4_2.jpg'
import img3 from '../../img/gallery/gallery_4_3.jpg'
import img4 from '../../img/gallery/gallery_4_4.jpg'


const galleryData = [
  {
    id: 1,
    images: [img1, img2, img3, img4],
  },
  {
    id: 2,
    images: [img4, img3, img1, img1],
  },
  {
    id: 3,
    images: [img3, img2, img1, img4],
  },
  {
    id: 4,
    images: [img2, img3, img4, img1],
  },
  {
    id: 5,
    images: [img1, img2, img3, img4],
  },
  {
    id: 6,
    images: [img2, img1, img3, img4],
  },
];




const GalleryAreaS5 = (props) => {
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row gy-4 justify-content-between align-items-center">
               <div className="col-lg-6">
                  <div className="title-area mb-20 text-center text-lg-start">
                     <span className="sub-title2 style1">INSTAGRAM</span>
                     <h2 className="sec-title">Awesome Gallery</h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="social-media-wrapp">
                     <div className="social-media">
                        <i className="fab fa-instagram"></i>
                        <p className="text mb-0">Instagram</p>
                     </div>
                     <div className="divider"></div>
                     <div className="social-media">
                        <img src={tripadvisor} alt="" />
                        <p className="text mb-0">tripadvisor</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container-fluid">
            <Swiper
               spaceBetween={0}
               breakpoints={{
                  0: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 4 },
                  1300: { slidesPerView: 5 },
                  1500: { slidesPerView: 5 },
               }}
               className="th-slider"
            >
               {galleryData.map((gallery) => (
                  <SwiperSlide key={gallery.id}>
                     <Swiper
                        effect="cube"
                        grabCursor
                        speed={1000}
                        modules={[EffectCube, Autoplay, ]}
                        autoplay={{
                           delay: 6000,
                           disableOnInteraction: false,
                        }}
                        cubeEffect={{
                           shadow: false,
                           slideShadows: true,
                           shadowOffset: 20,
                           shadowScale: 0.94,
                        }}
                        
                        className="cubeSwiper"
                     >
                        {gallery.images.map((img, index) => (
                           <SwiperSlide key={index}>
                              <div className="gallery-insta style2">
                                 <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/p/C6yIzzALxZe/"
                                    className="play-btn border-play-btn"
                                 >
                                    <i className="fab fa-instagram"></i>
                                 </a>
                                 <img src={img} alt="Gallery" />
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>




      </div>
   );
};

export default GalleryAreaS5;