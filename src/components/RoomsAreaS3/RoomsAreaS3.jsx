import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RoomData from '../../api/room';
import leftArrow from '../../img/icon/left-arrow2.svg';
import rightArrow from '../../img/icon/right-arrow2.svg';

const RoomsAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-lg-4">
                  <div className="title-area text-center text-lg-start">
                     <span className="sub-title2 style1">LUXURY COMFORT</span>
                     <h2 className="sec-title">Rotal rooms & suits</h2>

                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="nav tab-menu indicator-active justify-content-center justify-content-lg-end mb-45" id="tab-menu1" role="tablist">
                     <button className="tab-btn th-btn active" id="nav-one-tab" data-bs-toggle="tab" data-bs-target="#nav-one" type="button" role="tab" aria-controls="nav-one" aria-selected="true">Luxury Room</button>
                     <button className="tab-btn th-btn" id="nav-two-tab" data-bs-toggle="tab" data-bs-target="#nav-two" type="button" role="tab" aria-controls="nav-two" aria-selected="false">Suits Room</button>
                     <button className="tab-btn th-btn" id="nav-three-tab" data-bs-toggle="tab" data-bs-target="#nav-three" type="button" role="tab" aria-controls="nav-three" aria-selected="false">Deluxe Room</button>
                     <button className="tab-btn th-btn" id="nav-four-tab" data-bs-toggle="tab" data-bs-target="#nav-four" type="button" role="tab" aria-controls="nav-four" aria-selected="false">Twine Rooms</button>
                  </div>
               </div>
            </div>

            <div className="tab-content">
               <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                  <div className="slider-wrap">
                     <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        loop={settings['loop'] === false ? false : true}
                        speed={settings['speed'] ? settings['speed'] : 1000}

                        navigation={{
                           nextEl: '.slider-next',
                           prevEl: '.slider-prev',
                        }}
                        pagination={{
                           el: '.slider-pagination',
                           type: 'progressbar',
                           clickable: true,
                        }}
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 2 },
                           1200: { slidesPerView: 3 },
                        }}
                        className="swiper th-slider room-slider" id="roomSlider1"
                     >
                        {RoomData.slice(0, 4).map((room, index) => (
                           <SwiperSlide key={index}>
                              <div className="room-card style1">
                                 <div className="box-img global-img">
                                    <img src={room.imgRoom2} alt="" />
                                    <span className="discount">{room.bed}</span>
                                 </div>
                                 <div className="box-content">
                                    <div className="box-number">{room.number}</div>
                                    <h3 className="box-title"><Link to="/room">{room.title}</Link></h3>
                                    <div className="box-review">
                                       {[...Array(5)].map((_, i) => (
                                          <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                       ))}
                                    </div>
                                    <p className="box-text">{room.subtitle2}</p>
                                    <div className="box-price">
                                       <h3 className="price">{room.discount}/night</h3>
                                    </div>
                                    <div className="room-card-meta">
                                       <span><img src={room.cat} alt="icon" />King Bed</span>
                                       <span><img src={room.cat2} alt="icon" />{room.sqft} sqft/Room</span>
                                    </div>
                                    <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn style2">VIEW DETAILS</Link></div>
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
               <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
                  <div className="slider-wrap">
                     <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        loop={settings['loop'] === false ? false : true}
                        speed={settings['speed'] ? settings['speed'] : 1000}

                        navigation={{
                           nextEl: '.slider-next',
                           prevEl: '.slider-prev',
                        }}
                        pagination={{
                           el: '.slider-pagination',
                           type: 'progressbar',
                           clickable: true,
                        }}
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 2 },
                           1200: { slidesPerView: 3 },
                        }}
                        className="swiper th-slider room-slider" id="roomSlider1"
                     >
                        {RoomData.slice(0, 4).map((room, index) => (
                           <SwiperSlide key={index}>
                              <div className="room-card style1">
                                 <div className="box-img global-img">
                                    <img src={room.imgRoom2} alt="" />
                                    <span className="discount">{room.bed}</span>
                                 </div>
                                 <div className="box-content">
                                    <div className="box-number">{room.number}</div>
                                    <h3 className="box-title"><Link to="/room">{room.title}</Link></h3>
                                    <div className="box-review">
                                       {[...Array(5)].map((_, i) => (
                                          <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                       ))}
                                    </div>
                                    <p className="box-text">{room.subtitle2}</p>
                                    <div className="box-price">
                                       <h3 className="price">{room.discount}/night</h3>
                                    </div>
                                    <div className="room-card-meta">
                                       <span><img src={room.cat} alt="icon" />King Bed</span>
                                       <span><img src={room.cat2} alt="icon" />{room.sqft} sqft/Room</span>
                                    </div>
                                    <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn style2">VIEW DETAILS</Link></div>
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
               <div className="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
                  <div className="slider-wrap">
                     <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        loop={settings['loop'] === false ? false : true}
                        speed={settings['speed'] ? settings['speed'] : 1000}

                        navigation={{
                           nextEl: '.slider-next',
                           prevEl: '.slider-prev',
                        }}
                        pagination={{
                           el: '.slider-pagination',
                           type: 'progressbar',
                           clickable: true,
                        }}
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 2 },
                           1200: { slidesPerView: 3 },
                        }}
                        className="swiper th-slider room-slider" id="roomSlider1"
                     >
                        {RoomData.slice(0, 4).map((room, index) => (
                           <SwiperSlide key={index}>
                              <div className="room-card style1">
                                 <div className="box-img global-img">
                                    <img src={room.imgRoom2} alt="" />
                                    <span className="discount">{room.bed}</span>
                                 </div>
                                 <div className="box-content">
                                    <div className="box-number">{room.number}</div>
                                    <h3 className="box-title"><Link to="/room">{room.title}</Link></h3>
                                    <div className="box-review">
                                       {[...Array(5)].map((_, i) => (
                                          <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                       ))}
                                    </div>
                                    <p className="box-text">{room.subtitle2}</p>
                                    <div className="box-price">
                                       <h3 className="price">{room.discount}/night</h3>
                                    </div>
                                    <div className="room-card-meta">
                                       <span><img src={room.cat} alt="icon" />King Bed</span>
                                       <span><img src={room.cat2} alt="icon" />{room.sqft} sqft/Room</span>
                                    </div>
                                    <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn style2">VIEW DETAILS</Link></div>
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
               <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                  <div className="slider-wrap">
                     <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        loop={settings['loop'] === false ? false : true}
                        speed={settings['speed'] ? settings['speed'] : 1000}

                        navigation={{
                           nextEl: '.slider-next',
                           prevEl: '.slider-prev',
                        }}
                        pagination={{
                           el: '.slider-pagination',
                           type: 'progressbar',
                           clickable: true,
                        }}
                        breakpoints={{
                           0: { slidesPerView: 1 },
                           576: { slidesPerView: 1 },
                           768: { slidesPerView: 2 },
                           992: { slidesPerView: 2 },
                           1200: { slidesPerView: 3 },
                        }}
                        className="swiper th-slider room-slider" id="roomSlider1"
                     >
                        {RoomData.slice(0, 4).map((room, index) => (
                           <SwiperSlide key={index}>
                              <div className="room-card style1">
                                 <div className="box-img global-img">
                                    <img src={room.imgRoom2} alt="" />
                                    <span className="discount">{room.bed}</span>
                                 </div>
                                 <div className="box-content">
                                    <div className="box-number">{room.number}</div>
                                    <h3 className="box-title"><Link to="/room">{room.title}</Link></h3>
                                    <div className="box-review">
                                       {[...Array(5)].map((_, i) => (
                                          <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                       ))}
                                    </div>
                                    <p className="box-text">{room.subtitle2}</p>
                                    <div className="box-price">
                                       <h3 className="price">{room.discount}/night</h3>
                                    </div>
                                    <div className="room-card-meta">
                                       <span><img src={room.cat} alt="icon" />King Bed</span>
                                       <span><img src={room.cat2} alt="icon" />{room.sqft} sqft/Room</span>
                                    </div>
                                    <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn style2">VIEW DETAILS</Link></div>
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
            </div>
         </div>
      </div>
   );
};

export default RoomsAreaS3;