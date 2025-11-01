import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { Autoplay, EffectFade, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Sliderimg1 from '../../img//new/133.png';
import Sliderimg2 from '../../img//new/132.png';
import Sliderimg3 from '../../img//new/131.png';
import Bedimg from '../../img/icon/bed.svg';
import Logoimg from '../../img/logo.png';

const slides = [
   {
      id: 1,
      bg: Sliderimg1,
      title: 'Delivering Excellence Across Diverse Horizons',
      subtitle: 'Committed to People, Committed to Future.',
      reviews: '128k+ Reviews',
   },
   {
      id: 2,
      bg: Sliderimg2,
      title: 'Quest For Excellence Begins Here',
      subtitle: 'Committed to People, Committed to Future.',
      reviews: '128k+ Reviews',
   },
   {
      id: 3,
      bg: Sliderimg3,
      title: 'Discover Our Exciting Upcoming Events',
      subtitle: 'Committed to People, Committed to Future.',
      reviews: '128k+ Reviews',
   },
];

const ClickHandler = () => {
   window.scrollTo(10, 0);
};

const HeroSlider = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   useEffect(() => {
      const animatedElements = document.querySelectorAll('[data-ani]');
      animatedElements.forEach((el) => {
         const animation = el.getAttribute('data-ani');
         const delay = el.getAttribute('data-ani-delay') || '0s';
         el.classList.add(animation);
         el.style.animationDelay = delay;
      });
   }, []);

   return (
      <div className="th-hero-wrapper hero-1">
         <div className="heroSlide1-area">
            <Swiper
               modules={[EffectFade, Thumbs, Autoplay]}
               effect="fade"
               speed={2000}
               autoplay={{ delay: 6000, disableOnInteraction: false }}
               thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
               className="swiper th-slider heroSlide1"
            >
               {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                     <div className="hero-inner">
                        <div
                           className="th-hero-bg"
                           style={{ backgroundImage: `url(${slide.bg})` }}
                        />
                        <div className="container">
                           <div className="hero-style1">
                              <div className="hero-logo" data-ani="slideinup" data-ani-delay="0.2s">
                                 <img src={Logoimg} alt="Logo" />
                              </div>
                              <span className="hero-subtitle" data-ani="slideinup" data-ani-delay="0.3s">
                                 {slide.subtitle}
                              </span>
                              <div className="hero-review-wrapp" data-ani="slideinup" data-ani-delay="0.4s">
                                 <div className="box-review">
                                    {[...Array(5)].map((_, i) => (
                                       <i key={i} className="fa-sharp fa-solid fa-star" />
                                    ))}
                                 </div>
                                 {/* <span className="title">{slide.reviews}</span> */}
                              </div>
                              <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">
                                 {slide.title}
                              </h1>
                              <div
                                 className="btn-group justify-content-lg-start justify-content-center"
                                 data-ani="slideinup"
                                 data-ani-delay="0.8s"
                              >
                                 <Link to="/about" onClick={ClickHandler} className="th-btn2 style3">
                                    EXPLORE NOW 
                                    {/* <img src={Bedimg} alt="bed icon" /> */}
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            <div className="slider-area hero-slider-thumb-wrap">
               <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[Thumbs]}
                  slidesPerView={3}
                  spaceBetween={10}
                  watchSlidesProgress
                  className="swiper th-slider hero-grid-thumb"
               >
                  {slides.map((slide, index) => (
                     <SwiperSlide key={`thumb-${index}`}>
                        <div className="box-img">
                           <img src={slide.bg} alt={`Thumbnail ${index + 1}`} />
                           <span className="slider-number">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default HeroSlider;
