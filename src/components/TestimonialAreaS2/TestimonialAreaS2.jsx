import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from '../../api/testimonial';

import TestBg from '../../img/bg/testi_bg_1.jpg';
import left from '../../img/icon/left-arrow2.svg';
import quote2 from '../../img/icon/quote2.svg';
import right from '../../img/icon/right-arrow2.svg';

const TestimonialAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <section className={"" + props.hclass} id="testi-sec" style={{ backgroundImage: `url(${TestBg})` }}>
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-lg-5">
                  <div className="title-area text-center text-md-start pe-xl-5 me-xl-5">
                     <span className="sub-title2 style1 ">Testimonial</span>
                     <h2 className="sec-title text-white ">Explore more, worry less book a resort now</h2>
                  </div>
               </div>
               <div className="col-md-auto">
                  <div className="sec-btn mt-n3 mt-md-0">
                     <Link onClick={ClickHandler} to="/testimonial" className="th-btn style3 extra-btn">View All</Link>
                  </div>
               </div>
            </div>
            <div className="slider-area">
               <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{
                     el: '.slider-pagination',
                     type: 'progressbar',
                     clickable: true,
                  }}
                  loop={settings['loop'] === false ? false : true}
                  speed={settings['speed'] ? settings['speed'] : 1000}
                  navigation={{
                     nextEl: ".slider-next",
                     prevEl: ".slider-prev",
                  }}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 1 },
                     992: { slidesPerView: 2 },
                     1200: { slidesPerView: 2 },
                  }}
                  className="swiper th-slider testiSlider2 has-shadow" id="testiSlider2"
               >
                  {testimonialData.slice(4, 8).map((item, index) => (
                     <SwiperSlide key={index}>
                        <div className="testi-box">
                           <div className="box-avater">
                              <img src={item.img} alt="Avater" />
                              <div className="ratting">
                                 <i className="fa-sharp fa-solid fa-star"></i>
                                 <span className="title">4.8</span>
                              </div>
                           </div>
                           <div className="box-quote">
                              <img src={quote2} alt="quote" />
                           </div>
                           <p className="box-text">“{item.document}”</p>
                           <h3 className="box-title">{item.athName}</h3>
                           <p className="box-desig">Guest</p>
                        </div>
                     </SwiperSlide>
                  ))}
                  <div className="slider-controller">
                     <button className="slider-arrow default slider-prev">
                        <img src={left} alt="prev" />
                     </button>
                     <div className="slider-pagination"></div>
                     <button className="slider-arrow default slider-next">
                        <img src={right} alt="next" />
                     </button>
                  </div>
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default TestimonialAreaS2;