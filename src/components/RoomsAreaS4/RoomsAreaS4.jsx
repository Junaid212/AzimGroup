import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import RoomData from '../../api/room';
import cat_3 from '../../img/icon/cat_3.svg';
import cat_4 from '../../img/icon/cat_4.svg';

const RoomsAreaS4 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
    const settings = {
      loop: true,
      speed: 1200,
      autoplay: {
         delay: 3000, 
         disableOnInteraction: false
      }
   };
   return (
      <section className={"" + props.hclass} id="offer-sec">
         <div className="shadow-area mb-0">
            <div className="shadow-title">ROTAL ROOMS & SUITS</div>
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-12 text-center">
                  <div className="title-area">
                     <span className="sub-title2">LUXURY COMFORT</span>
                     <h2 className="sec-title text-white">Rotal rooms & suits</h2>
                  </div>
               </div>
            </div>

            <div className="slider-area">
               <div className="offer-list-area">
                  <Swiper className="swiper th-slider offer-slider5 slider-drag-wrap" id="offerSlider5"
                     centeredSlides={true}
                     freeMode={true}
                     grabCursor={true}
                     spaceBetween={0}
                     loop={settings.loop}
                     speed={settings.speed}
                     autoplay={settings.autoplay} 
                     modules={[FreeMode, Autoplay]} 
                     breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        992: { slidesPerView: "auto" },
                        1400: { slidesPerView: "auto" },
                     }}
                  >

                     {RoomData.slice(0, 12).map((Item, index) => (
                        <SwiperSlide key={index}>
                           <div className="room-box style2">
                              <div className="box-img">
                                 <img src={Item.img} alt="img" />
                              </div>
                              <div className="box-title-area">
                                 <div className="box-number">{Item.number}</div>
                                 <h3 className="box-title"><Link onClick={ClickHandler} to={`/room-details/${Item.slug}`}>{Item.title}</Link></h3>
                              </div>
                              <div className="box-content">
                                 <div className="box-wrapp">
                                    <div className="box-number">{Item.number}</div>
                                    <h3 className="box-title"><Link onClick={ClickHandler} to={`/room-details/${Item.slug}`}>{Item.title}</Link></h3>
                                    <div className="box-review">
                                       <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p className="box-text">{Item.subtitle}</p>
                                    <h6 className="box-price">{Item.discount}/night</h6>
                                    <div className="room-card-meta">
                                       <span><img src={Item.cat} alt="icon" />{Item.bed}</span>
                                       <span><img src={cat_3} alt="icon" />1500 sqft/Room</span>
                                       <span><img src={cat_4} alt="icon" />2 Person</span>
                                    </div>
                                    <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${Item.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div>
                                 </div>
                              </div>


                           </div>
                        </SwiperSlide>
                     ))}

                  </Swiper>
               </div>
            </div>

         </div>
      </section>
   );
};

export default RoomsAreaS4;

