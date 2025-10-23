import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Offer1 from '../../img/offer/offer_1_1.jpg';
import Offer2 from '../../img/offer/offer_1_2.jpg';
import Offer3 from '../../img/offer/offer_1_3.jpg';
import Offer4 from '../../img/offer/offer_1_4.jpg';


const OfferAreaS4 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass} id="offer-sec">
         <div className="shadow-area mb-0">
            <div className="shadow-title">Rotal rooms & suits</div>
         </div>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-xl-4 text-center text-xl-start">
                  <div className="title-area">
                     <span className="sub-title2 style1">LUXURY COMFORT</span>
                     <h2 className="sec-title text-white">Rotal rooms & suits</h2>
                  </div>
               </div>
            </div>

            <div className="slider-area">
               <Swiper
                  className="swiper th-slider offerSlider4 has-shadow"
                  loop={false}
                  slidesPerGroup={2}
                 
                  modules={[Mousewheel]}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 2 },
                     992: {
                        slidesPerView: 2,
                        mousewheel: {
                           enabled: true,
                           sensitivity: 4,
                        },
                     },
                     1200: { slidesPerView: 3 },
                     1300: { slidesPerView: 4 },
                  }}
               >
                 
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer1} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Exclusive Suite</Link></h3>
                           <p className="price">Price Start at $290</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer2} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Deluxe Room</Link></h3>
                           <p className="price">Price Start at $280</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer3} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Twine Room</Link></h3>
                           <p className="price">Price Start at $270</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer4} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Single Room</Link></h3>
                           <p className="price">Price Start at $240</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer1} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Exclusive Suite</Link></h3>
                           <p className="price">Price Start at $290</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer2} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Deluxe Room</Link></h3>
                           <p className="price">Price Start at $280</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer3} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Twine Room</Link></h3>
                           <p className="price">Price Start at $270</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="offer-box2">
                        <div className="box-img global-img">
                           <img src={Offer4} alt="img" />
                        </div>
                        <div className="media-body">
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">Single Room</Link></h3>
                           <p className="price">Price Start at $240</p>
                        </div>
                     </div>
                  </SwiperSlide>

               </Swiper>








            </div>
         </div>
      </section >
   );
};

export default OfferAreaS4;