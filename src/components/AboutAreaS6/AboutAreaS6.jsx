import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoModal from '../ModalVideo/ModalVideo';



// images
import Ab6 from '../../img/normal/about_4_1.jpg';
import AbSlider1 from '../../img/normal/about_4_2.jpg';
import AbSlider2 from '../../img/normal/about_4_3.jpg';
import AbSlider3 from '../../img/normal/about_4_4.jpg';
import Ab7 from '../../img/normal/about_4_5.jpg';
import avater2 from '../../img/normal/about_avater2.png';
import signature2 from '../../img/normal/signature2.svg';

import Abicon3 from '../../img/icon/feature_card_1.svg';
import Abicon2 from '../../img/icon/feature_card_2.svg';
import Abicon1 from '../../img/icon/feature_card_3.svg';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';






const AboutAreaS6 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} id="about-sec">
         <div className="container">
            <div className="about-wrap4">
               <div className="row gx-0 gy-40">
                  <div className="col-xxl-3">
                     <div className="img-box7">
                        <div className="img1">
                           <img src={Ab6} alt="img" />
                        </div>
                     </div>
                     <div className="about-author-wrap">
                        <div className="thumb">
                           <img src={avater2} alt="img" />
                        </div>
                        <h4 className="about-author-title">Andrew Karlex</h4>
                        <span className="about-author-desig">Manager</span>
                        <div className="author-sign">
                           <img src={signature2} alt="img" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-9">
                     <div className="about-wrap4-right">
                        <div className="about-wrap4-content">
                           <div className="about-content-wrap">
                              <div className="title-area mb-45">
                                 <span className="sub-title2 style1">ABOUT US</span>
                                 <h2 className="sec-title">Welcome To Rotal, The Hotel Grows & Modernizes Every Year</h2>
                                 <p className="sec-text mt-35 mb-20">We care very much about making you feel comfortable with us, so feedback on our services is very important to us. Thanks to the satisfaction of our guests, the hotel grows and modernizes every year.</p>
                                 <p className="sec-text">If our services do not meet your expectations, please contact us, we will do everything to resolve your requirements. Therefore, do not hesitate to contact our staff, who are here for you. We are grateful for our team of employees who have been with us for 15 years and together share our sense of hospitality.</p>
                              </div>
                              <div className="btn-group mt-1">
                                 <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">LEARN MORE</Link>
                              </div>
                           </div>
                           <div className="slider-wrap">
                              <Swiper
                                 modules={[EffectFade, Pagination]}
                                 slidesPerView={1}
                                 effect="fade"
                                 autoHeight={true}
                                 pagination={{
                                    el: ".slider-pagination.style2",
                                    clickable: true,
                                 }}
                                 className="swiper th-slider about-room-slider" id="aboutroomSlider1"
                              >
                                 <SwiperSlide>
                                    <div className="about-room-card">
                                       <div className="box-img global-img">
                                          <img src={AbSlider1} alt="img" />
                                       </div>
                                       <div className="box-content">
                                          <div className="box-icon"><img src={Abicon1} alt="icon" /></div>
                                          <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Full Room Amenities</Link></h3>
                                          <p className="box-text">Our rooms are designed to give you maximum comfort and independence. You’ll find a microwave, fridge coffees in every room.</p>
                                       </div>
                                    </div>
                                 </SwiperSlide>

                                 <SwiperSlide>
                                    <div className="about-room-card">
                                       <div className="box-img global-img">
                                          <img src={AbSlider2} alt="img" />
                                       </div>
                                       <div className="box-content">
                                          <div className="box-icon"><img src={Abicon2} alt="icon" /></div>
                                          <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Cancellation within 24H</Link></h3>
                                          <p className="box-text">Our rooms are designed to give you maximum comfort and independence. You’ll find a microwave, fridge coffees in every room.</p>
                                       </div>
                                    </div>
                                 </SwiperSlide>

                                 <SwiperSlide>
                                    <div className="about-room-card">
                                       <div className="box-img global-img">
                                          <img src={AbSlider3} alt="img" />
                                       </div>
                                       <div className="box-content">
                                          <div className="box-icon"><img src={Abicon3} alt="icon" /></div>
                                          <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Keeping your safe</Link></h3>
                                          <p className="box-text">Our rooms are designed to give you maximum comfort and independence. You’ll find a microwave, fridge coffees in every room.</p>
                                       </div>
                                    </div>
                                 </SwiperSlide>
                              <div className="slider-pagination style2"></div>

                              </Swiper>


                           </div>
                        </div>
                        <div className="img-box7-2">
                           <div className="img1">
                              <div className="about-counter-wrap text-center">
                                 <h2 className="box-number"><span className="counter-number"><CountUp end={150}> </CountUp></span>+</h2>
                                 <p className="box-text">Experienced To Be Best</p>
                              </div>
                              <img src={Ab7} alt="img" />
                              <div className="discount-wrapp">
                                 <VideoModal vidclass={'play-btn popup-video'} />
                                 <CircleTextS2 text="Rotal hotel since 1999* Rotal hotel since 1999*" />

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutAreaS6;