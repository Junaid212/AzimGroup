import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { Autoplay, EffectFade, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Sliderimg1 from '../../img/hero/hero_bg_1_1.jpg';
import Sliderimg2 from '../../img/hero/hero_bg_1_2.jpg';
import Sliderimg3 from '../../img/hero/hero_bg_1_3.jpg';
import Bedimg from '../../img/icon/bed.svg';
import Logoimg from '../../img/logo.png';

const slides = [
   {
      id: 1,
      bg: "data:image/jpeg;base64,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",
      title: 'Delivering Excellence Across Diverse Horizons',
      subtitle: 'Committed to People, Committed to Future.',
      reviews: '128k+ Reviews',
   },
   {
      id: 2,
      bg: "https://i.ytimg.com/vi/b0WM2nthopk/maxresdefault.jpg",
      title: 'Quest For Excellence Begins Here',
      subtitle: 'Committed to People, Committed to Future.',
      reviews: '128k+ Reviews',
   },
   {
      id: 3,
      bg: "https://www.sothra.it/wp-content/uploads/2025/06/Doha-960x720.jpg",
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
                                 <Link to="/room" onClick={ClickHandler} className="th-btn2 style3">
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
