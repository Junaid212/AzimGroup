import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderBg1 from '../../img/hero/hero_bg_2_1.jpg';
import SliderBg2 from '../../img/hero/hero_bg_2_2.jpg';
import SliderBg3 from '../../img/hero/hero_bg_2_3.jpg';
import left from '../../img/icon/hero-arrow-left.svg';
import right from '../../img/icon/hero-arrow-right.svg';
import group from '../../img/normal/group-img1.png';

const slides = [
   {
      id: '01',
      title: 'ROTAL RESORT SINCE 1999',
      subtitle: 'Discover The Perfect Blend of Luxury Resort ',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      reviews: '128k+ Reviews',
      SliderBg: SliderBg1
   },
   {
      id: '02',
      title: 'ROTAL RESORT SINCE 1999',
      subtitle: 'Discover The Perfect Blend of Luxury Resort',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      reviews: '128k+ Reviews',
      SliderBg: SliderBg2,
   },
   {
      id: '03',
      title: 'ROTAL RESORT SINCE 1999',
      subtitle: 'Discover The Perfect Blend of Luxury Resort',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      reviews: '128k+ Reviews',
      SliderBg: SliderBg3,
   },
];

const HeroSlider = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   const settings = {
      loop: true,
      speed: 1200,
   };

   const autoplayCondition = null;

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
      <div className="th-hero-wrapper hero-2" id="hero">
         <div className="slider-area">
            <Swiper
               effect="fade"
               modules={[EffectFade, Autoplay, Navigation]}
               loop={settings['loop'] === false ? false : true}
               speed={settings['speed'] ? settings['speed'] : 1000}
               autoplay={
                  autoplayCondition
                     ? autoplayCondition
                     : {
                        delay: 6000,
                        disableOnInteraction: false,
                     }
               }
               onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
               onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
               }}
               navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
               }}
               className="swiper th-slider hero-slider2"
            >
               {slides.map((bg, index) => (
                  <SwiperSlide
                     key={index}
                     style={{
                        backgroundImage: `url(${bg.SliderBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                     }}
                  >
                     <div className="hero-inner">
                        <div className="container">
                           <div className="hero-style2">
                              <span className="sub-title" data-ani="slideinup" data-ani-delay="0.4s">
                                 {bg.title}
                              </span>
                              <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">
                                 {bg.subtitle}
                              </h1>
                              <p className="hero-text" data-ani="slideinup" data-ani-delay="0.7s">
                                 {bg.dicpt}
                              </p>
                              <div className="client-box mb-sm-0 mb-3" data-ani="slideinup" data-ani-delay="0.8s">
                                 <div className="client-thumb-group">
                                    <img src={group} alt="client group" />
                                 </div>
                                 <div className="cilent-box">
                                    <div className="client-wrapp">
                                       <div className="client-review">
                                          {[...Array(4)].map((_, i) => (
                                             <i className="fa-sharp fa-solid fa-star" key={i}></i>
                                          ))}
                                          <i className="fa-solid fa-star-half-stroke"></i>
                                       </div>
                                       <span className="rating">{bg.reviews}</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            <button
               ref={prevRef}
               className="slider-arrow slider-prev slider-prev-bg"
               style={{
                  backgroundImage: `url(${slides[(activeIndex - 1 + slides.length) % slides.length].SliderBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            >
               <span className="arrow">
                  <img src={left} alt="Previous" />
               </span>
            </button>

            <button
               ref={nextRef}
               className="slider-arrow slider-next slider-next-bg"
               style={{
                  backgroundImage: `url(${slides[(activeIndex + 1) % slides.length].SliderBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            >
               <span className="arrow">
                  <img src={right} alt="Next" />
               </span>
            </button>
         </div>

         <div className="scroll-down">
            <a href="#about-sec" className="hero-scroll-wrap">
               <span>Scroll Down</span>
            </a>
         </div>
      </div>
   );
};

export default HeroSlider;
