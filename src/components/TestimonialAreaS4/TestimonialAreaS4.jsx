import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialData from '../../api/testimonial';
import quote2 from '../../img/icon/quote2.svg';

import leftArrow from '../../img/icon/left-arrow2.svg';
import rightArrow from '../../img/icon/right-arrow2.svg';

const TestimonialAreaS4 = (props) => {
     const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <section className={"" + props.hclass} id="testi-sec">
         <div className="container">
            <div className="title-area text-center">
               <span className="sub-title2 style1 ">TESTIMONIALS</span>
               <h2 className="sec-title text-white ">what Guests think about us</h2>
            </div>
            <div className="slider-wrap">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  navigation={{
                     nextEl: '.slider-next',
                     prevEl: '.slider-prev',
                  }}
                  loop={settings['loop'] === false ? false : true}
                  speed={settings['speed'] ? settings['speed'] : 1000}
                  pagination={{
                     el: '.slider-pagination',
                     type: 'progressbar',
                     clickable: true,
                  }}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 1 },
                     992: { slidesPerView: 1 },
                     1300: { slidesPerView: 2, },
                  }}
                  className="swiper th-slider testiSlider4 has-shadow" id="testiSlider4"
               >
                  {testimonialData.slice(12, 16).map((testim, tkye) => (
                     <SwiperSlide key={tkye}>
                        <div className="testi-grid">
                           <div className="box-profile " style={{backgroundColor:`#0c2830`}}>
                              <div className="box-avater">
                                 <img src={testim.img} alt="Avater" />
                              </div>
                              <p className="box-text">{testim.document}</p>
                           </div>
                           <div className="box-quote"><img src={quote2} alt="" /></div>
                           <div className="box-review">
                              <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                           </div>
                           <div className="media-body">
                              <h3 className="box-title">{testim.title}</h3>
                              <p className="box-desig">{testim.postion}</p>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}

                  <div className="slider-controller">
                     <button className="slider-arrow default slider-prev">
                        <img src={leftArrow} alt="" />
                     </button>
                     <div className="slider-pagination"></div>
                     <button className="slider-arrow default slider-next">
                        <img src={rightArrow} alt="" />
                     </button>
                  </div>
               </Swiper>
            </div>

         </div>
      </section>
   );
};

export default TestimonialAreaS4;