import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialData from '../../api/testimonial';

import leftArrow from '../../img/icon/left-arrow2.svg';
import Quote from '../../img/icon/quote2.svg';
import rightArrow from '../../img/icon/right-arrow2.svg';

const TestimonialAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
     const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <section className={"" +props.hclass} id="testi-sec">
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-xxl-4 col-xl-5 col-lg-6">
                  <div className="title-area mb-30 text-center text-md-start">
                     <span className="sub-title2 style1">Testimonial</span>
                     <h2 className="sec-title text-white">Explore more, worry less book a resort now</h2>
                  </div>
               </div>
               <div className="col-md-auto">
                  <div className="sec-btn mt-n3 mt-md-0">
                     <Link onClick={ClickHandler} to="/testimonial" className="th-btn th-icon style3">View All</Link>
                  </div>
               </div>
            </div>
            <div className="slider-area">
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
                     992: { slidesPerView: 2 },
                     1200: { slidesPerView: 3, centeredSlides: true },
                  }}
                  className="swiper th-slider testiSlider3 has-shadow" id="roomSlider1"
               >

                  {testimonialData.slice(8, 12).map((testimonal, titem) => (
                     <SwiperSlide key={titem}>
                        <div className="testi-box style2">
                           <div className="box-quote"><img src={Quote} alt="" /></div>
                           <p className="box-text">{testimonal.document}</p>
                           <div className="box-wrapper">
                              <div className="box-content">
                                 <h3 className="box-title">{testimonal.athName}</h3>
                                 <p className="box-desig">{testimonal.postion}</p>
                              </div>
                              <div className="box-avater">
                                 <img src={testimonal.img} alt="Avater" />
                                 <div className="ratting"><i className="fa-sharp fa-solid fa-star"></i><span className="title">4.8</span></div>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}

                  <div className="slider-controller">
                     <button className="slider-arrow style2 default slider-prev">
                        <img src={leftArrow} alt="" />
                     </button>
                     <div className="slider-pagination"></div>
                     <button className="slider-arrow style2 default slider-next">
                        <img src={rightArrow} alt="" />
                     </button>
                  </div>
               </Swiper>


            </div>



         </div>
      </section>
   );
};

export default TestimonialAreaS3;