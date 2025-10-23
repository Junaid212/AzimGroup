import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";





import leftArrow from "../../img/icon/left-arrow2.svg";
import rightArrow from "../../img/icon/right-arrow2.svg";
import titleimg from '../../img/theme-img/title_icon.svg';
import titlewhite from '../../img/theme-img/title_icon_white.svg';
import VideoModal from '../ModalVideo/ModalVideo';


import Icon1 from '../../img/icon/hotel_card_1.svg';
import Icon2 from '../../img/icon/hotel_card_2.svg';
import Icon3 from '../../img/icon/hotel_card_3.svg';
import Icon4 from '../../img/icon/hotel_card_4.svg';
import Icon5 from '../../img/icon/hotel_card_5.svg';
import Icon6 from '../../img/icon/hotel_card_6.svg';


import Imagebg1 from '../../img/hotel/hotel_1_1.jpg';
import Imagebg2 from '../../img/hotel/hotel_1_2.jpg';
import Imagebg3 from '../../img/hotel/hotel_1_3.jpg';
import Imagebg4 from '../../img/hotel/hotel_1_4.jpg';
import Imagebg5 from '../../img/hotel/hotel_1_5.jpg';
import Imagebg6 from '../../img/hotel/hotel_1_6.jpg';


const hotelSlides = [
   {
      id: '01',
      icon: Icon1,
      bg: Imagebg1,
      title: 'Free Wifi Internet',
   },
   {
      id: '02',
      icon: Icon2,
      bg: Imagebg2,
      title: 'Free Parking',
   },
   {
      id: '03',
      icon: Icon3,
      bg: Imagebg3,
      title: 'Room Services',
   },
   {
      id: '04',
      icon: Icon4,
      bg: Imagebg4,
      title: 'Swimming Pool',
   },
   {
      id: '05',
      icon: Icon5,
      bg: Imagebg5,
      title: 'Fitness & Wellbeing',
   },
   {
      id: '06',
      icon: Icon6,
      bg: Imagebg6,
      title: 'Rooftop Bar',
   },
   {
      id: '07',
      icon: Icon4,
      bg: Imagebg4,
      title: 'Rooftop Bar',
   },
   {
      id: '08',
      icon: Icon2,
      bg: Imagebg2,
      title: 'Rooftop Bar',
   },
];


const HotelFacilities = (props) => {
   const [background, setBackground] = useState(hotelSlides[0].bg);
   const handleHover = (bg) => setBackground(bg);

   const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <div className={props.hclass || ""}>
         <div
            className="hotel-area bg-bottom-center parallax-bg"
            style={{ backgroundImage: `url(${background})` }}
         >
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-5">
                     <div className="title-area text-center">
                        <span className="title-img">
                           <img src={titlewhite} alt="shape" />
                        </span>
                        <h2 className="sec-title">Hotel Facilities</h2>
                        <span className="title-img">
                           <img src={titleimg} alt="shape" />
                        </span>
                     </div>
                  </div>
               </div>

               <div className="slider-area">
                  <Swiper
                     className="swiper th-slider hotelSlide has-shadow" id="hotelSlide"
                     modules={[Navigation, Pagination]}
                     pagination={{
                        el: '.slider-pagination',
                        type: 'progressbar',
                        clickable: true,
                     }}
                     spaceBetween={24}
                     loop={settings['loop'] === false ? false : true}
                     speed={settings['speed'] ? settings['speed'] : 1000}
                     navigation={{
                        nextEl: ".slider-next",
                        prevEl: ".slider-prev",
                     }}
                     breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                        1400: { slidesPerView: 5 },
                        1600: { slidesPerView: 6 },
                     }}
                  >
                     {hotelSlides.map((card, index) => (
                        <SwiperSlide key={index}>
                           <div
                              className="hotel-card background-image"
                              onMouseEnter={() => handleHover(card.bg)}
                           >
                              <div
                                 className="box-icon background-image"
                                 style={{ backgroundImage: `url(${card.bg})` }}
                              >
                                 <img src={card.icon} alt="Icon" />
                              </div>
                              <h3 className="box-title">{card.title}</h3>
                           </div>
                        </SwiperSlide>
                     ))}

                     <div className="slider-controller">
                        <button className="slider-arrow style2 default slider-prev">
                           <img src={leftArrow} alt="Previous" />
                        </button>
                        <div className="slider-pagination"></div>
                        <button className="slider-arrow style2 default slider-next">
                           <img src={rightArrow} alt="Next" />
                        </button>
                     </div>
                  </Swiper>


               </div>

               <div className="video-icon">
                  <VideoModal vidclass={"play-btn border-play-btn popup-video"} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default HotelFacilities




