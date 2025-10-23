import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import testimonialData from '../../api/testimonial';

import leftArrow from '../../img/icon/left-arrow2.svg';
import quote from '../../img/icon/quote.svg';
import rightArrow from '../../img/icon/right-arrow2.svg';
import titleimg from '../../img/theme-img/title_icon.svg';

const TestimonialArea = (props) => {
   return (
      <section className={"" + props.hclass} id="testi-sec">
         <div className="container-fluid p-0">
            <div className="title-area text-center">
               <span className="sub-title">Testimonials</span>
               <h2 className="sec-title">Customer’s Feedback</h2>
               <span className="title-img"><img src={titleimg} alt="shape" /></span>
            </div>
            <div className="slider-area">
               <Swiper
                  modules={[Pagination, Navigation,]}
                  pagination={{
                     el: '.slider-pagination',
                     type: 'progressbar',
                     clickable: true,
                  }}
                  navigation={{
                     nextEl: '.slider-next',
                     prevEl: '.slider-prev',
                  }}
                  mousewheel={{ enabled: true, sensitivity: 4 }}
                  loop={true}
                  speed={1000}
                  autoplay={{
                     delay: 6000,
                     disableOnInteraction: false,
                  }}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 1 },
                     992: { slidesPerView: 2 },
                     1200: { slidesPerView: 2 },
                  }}
                  className="swiper th-slider testiSlider1 has-shadow"
               >
                  {testimonialData.slice(0, 4).map((testimonial, index) => (
                     <SwiperSlide key={index}>
                        <div className="testi-card">
                           <div className="box-img th-parallax">
                              <img src={testimonial.testi} alt="Hotel" />
                           </div>
                           <div className="box-wrapp">
                              <div className="box-left">
                                 <h3 className="box-title">{testimonial.title}</h3>
                              </div>
                              <div className="box-content">
                                 <div className="box-review">
                                    {[...Array(5)].map((_, i) => (
                                       <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                    ))}
                                 </div>
                                 <p className="box-text">
                                    {testimonial.document}
                                 </p>
                                 <div className="box-profile">
                                    <div className="box-avater">
                                       <img src={testimonial.img} alt="Avatar" />
                                    </div>
                                    <div className="media-body">
                                       <h3 className="box-title">{testimonial.athName}</h3>
                                       <p className="box-desig">{testimonial.postion}</p>
                                    </div>
                                 </div>
                                 <div className="box-quote">
                                    <img src={quote} alt="Quote" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}

                  <div className="slider-controller">
                     <button className="slider-arrow default slider-prev">
                        <img src={leftArrow} alt="Previous" />
                     </button>
                     <div className="slider-pagination"></div>
                     <button className="slider-arrow default slider-next">
                        <img src={rightArrow} alt="Next" />
                     </button>
                  </div>

               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default TestimonialArea;