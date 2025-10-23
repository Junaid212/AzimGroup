import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import BgShape from '../../img/bg/location_bg_1.jpg'
import arrow4 from '../../img/icon/right-arrow4.svg'
import location1 from '../../img/location/location_1_1.jpg'
import location2 from '../../img/location/location_1_2.jpg'
import location3 from '../../img/location/location_1_3.jpg'
import location4 from '../../img/location/location_1_4.jpg'

const LocationAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${BgShape})` }}>
         <div className="container">
            <div className="title-area text-center">
               <span className="sub-title2 style2">OUR LOCAITON</span>
               <h2 className="sec-title">36 hotels in unbelievable locations</h2>
            </div>
            <div className="nav tab-menu style2 indicator-active justify-content-center mb-45" id="tab-menu1" role="tablist">
               <button className="tab-btn th-btn2 active" id="nav-one-tab" data-bs-toggle="tab" data-bs-target="#nav-one" type="button" role="tab" aria-controls="nav-one" aria-selected="true">all view</button>
               <button className="tab-btn th-btn2" id="nav-two-tab" data-bs-toggle="tab" data-bs-target="#nav-two" type="button" role="tab" aria-controls="nav-two" aria-selected="false">Europe</button>
               <button className="tab-btn th-btn2" id="nav-three-tab" data-bs-toggle="tab" data-bs-target="#nav-three" type="button" role="tab" aria-controls="nav-three" aria-selected="false">USA</button>
               <button className="tab-btn th-btn2" id="nav-four-tab" data-bs-toggle="tab" data-bs-target="#nav-four" type="button" role="tab" aria-controls="nav-four" aria-selected="false">Asia</button>
            </div>

            <div className="tab-content">

               <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                  <div className="slider-wrap">
                     <Swiper
                        id="locationSlider4"
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 3 },
                           1400: { slidesPerView: 4 },
                        }}
                        className="th-slider location-slider"
                     >
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location1} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Boston</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location2} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">American city</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location3} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Kualalumpur</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location4} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Chicago</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        
                     </Swiper >
                  </div>
               </div>


               <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
                  <div className="slider-wrap">
                     <Swiper
                        id="locationSlider4"
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 3 },
                           1400: { slidesPerView: 4 },
                        }}
                        className="th-slider location-slider"
                     >
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location1} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Boston</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location2} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">American city</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location3} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Kualalumpur</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location4} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Chicago</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        
                     </Swiper >
                  </div>
               </div>

               <div className="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
                  <div className="slider-wrap">
                     <Swiper
                        id="locationSlider4"
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 3 },
                           1400: { slidesPerView: 4 },
                        }}
                        className="th-slider location-slider"
                     >
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location1} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Boston</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location2} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">American city</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location3} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Kualalumpur</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location4} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Chicago</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        
                     </Swiper >
                  </div>
               </div>
               <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                  <div className="slider-wrap">
                     <Swiper
                        id="locationSlider4"
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 3 },
                           1400: { slidesPerView: 4 },
                        }}
                        className="th-slider location-slider"
                     >
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location1} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Boston</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location2} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">American city</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location3} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Kualalumpur</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="location-card">
                              <div className="box-img global-img">
                                 <img src={location4} alt="" />
                              </div>
                              <div className="box-content bg-body-bg">
                                 <div className="box-wrapp">
                                    <h3 className="box-title">Chicago</h3>
                                    <p className="box-text">2 Hotel</p>
                                 </div>
                                 <Link onClick={ClickHandler} to="/contact" className="icon-btn"><img src={arrow4} alt="" /></Link>
                              </div>
                           </div>
                        </SwiperSlide>
                        
                     </Swiper >
                  </div>
               </div>
            </div>
         </div>
      </div>


   );
};

export default LocationAreaS2;
