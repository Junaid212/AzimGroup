import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import left from '../../img/icon/offer-arrow-left.svg';
import right from '../../img/icon/offer-arrow-right.svg';

import Img1 from '../../img/offer/offer_bg_1.jpg';
import Img2 from '../../img/offer/offer_bg_2.jpg';
import Img3 from '../../img/offer/offer_bg_3.jpg';
import Img4 from '../../img/offer/offer_bg_4.jpg';
import Img5 from '../../img/offer/offer_bg_3.jpg';

import Icon1 from '../../img/icon/offer_1_1.svg';
import Icon2 from '../../img/icon/offer_1_2.svg';
import Icon3 from '../../img/icon/offer_1_3.svg';
import Icon4 from '../../img/icon/offer_1_4.svg';
import Icon5 from '../../img/icon/offer_1_3.svg';

const OfferData = [
   { id: '01', title: 'Wellness & Spa', OffImg: Img1, OffIcon: Icon1 },
   { id: '02', title: 'Fitness Center', OffImg: Img2, OffIcon: Icon2 },
   { id: '03', title: 'Infinity Pool', OffImg: Img3, OffIcon: Icon3 },
   { id: '04', title: 'Gastronomy', OffImg: Img4, OffIcon: Icon4 },
   { id: '05', title: 'Infinity Pool', OffImg: Img5, OffIcon: Icon5 },
];

const OfferAreaS2 = (props) => {
   const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <section className={props.hclass || ''}>
         <div className="container">
            <div className="offer-area">
               <div className="row justify-content-between">
                  <div className="col-xl-4 text-center text-xl-start">
                     <div className="title-area">
                        <span className="sub-title2 style1">FEATURED AMENITIES</span>
                        <h2 className="sec-title text-white">Hotel Facilities</h2>
                     </div>
                  </div>
               </div>
               <div className="slider-area position-relative">
                  <Swiper
                     modules={[Navigation]}
                     navigation={{
                        nextEl: '.slider-next',
                        prevEl: '.slider-prev',
                     }}
                     loop={settings['loop'] === false ? false : true}
                        speed={settings['speed'] ? settings['speed'] : 1000}
                     breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                        1300: { slidesPerView: 4 },
                     }}
                     className="th-slider has-shadow"
                  >
                     {OfferData.map((offer, index) => (
                        <SwiperSlide key={index}>
                           <div className="offer-box">
                              <div className="box-img">
                                 <img src={offer.OffImg} alt="img" />
                                 <div className="box-icon">
                                    <img src={offer.OffIcon} alt="icon" />
                                 </div>
                              </div>
                              <div className="media-body">
                                 <h3 className="box-title">{offer.title}</h3>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>

                  <button className="slider-arrow slider-prev">
                     <span className="arrow"><img src={left} alt="prev" /></span>
                  </button>
                  <button className="slider-arrow slider-next">
                     <span className="arrow"><img src={right} alt="next" /></span>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OfferAreaS2;
