
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderBg1 from '../../img/hero/hero_bg_3_1.jpg';
import SliderBg2 from '../../img/hero/hero_bg_3_2.jpg';
import SliderBg3 from '../../img/hero/hero_bg_3_3.jpg';
import author from '../../img/icon/author.png';
import bar from '../../img/icon/bar-code.svg';
import left from '../../img/icon/hero-arrow-left.svg';
import right from '../../img/icon/hero-arrow-right.svg';
import room from '../../img/room/room-view.jpg';
import map from '../../img/shape/map.png';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
import VideoModal from '../ModalVideo/ModalVideo';
import ScrollLink from '../ScrollLink/ScrollLink';

const slides = [
   {
      id: '01',
      title: 'Exclusive & Sophisticated Luxury Hotel',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      SliderBg: SliderBg1
   },
   {
      id: '02',
      title: 'Welcome to Rotal Full of Luxury Experience',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      SliderBg: SliderBg2,
   },
   {
      id: '03',
      title: 'Exclusive & Sophisticated Luxury Hotel',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
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



   useEffect(() => {
      const elements = document.querySelectorAll('.shape-mockup2[data-top], .shape-mockup2[data-right], .shape-mockup2[data-bottom], .shape-mockup2[data-left]');

      elements.forEach((el) => {
         const { top, right, bottom, left } = el.dataset;

         el.style.position = 'absolute';
         if (top) el.style.top = top;
         if (right) el.style.right = right;
         if (bottom) el.style.bottom = bottom;
         if (left) el.style.left = left;

         el.removeAttribute('data-top');
         el.removeAttribute('data-right');
         el.removeAttribute('data-bottom');
         el.removeAttribute('data-left');

         el.parentElement?.classList.add('shape-mockup2');
      });
   }, []);



   return (
      <div className="th-hero-wrapper hero-3 slider-area" id="hero">
         <div className="slider-area">
            <Swiper
               effect="fade"
               modules={[EffectFade, Navigation]}
               loop={settings['loop'] === false ? false : true}
               speed={settings['speed'] ? settings['speed'] : 1000}
               onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
               onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
               }}
               navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current
               }}
               className="swiper th-slider" id="heroSlide3"
            >
               {slides.map((bg, index) => (
                  <SwiperSlide
                     key={index}
                     style={{
                        backgroundImage: `url(${bg.SliderBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                     }}
                  >
                     <div className="hero-inner">
                        <div className="container">
                           <div className="hero-style3">
                              <div className="hero-wrapp" >
                                 <div className="discount-wrapp">
                                    <VideoModal vidclass={'play-btn popup-video'} />
                                    <CircleTextS2 text="Rotal hotel since 1999* Rotal hotel since 1999*" />
                                 </div>
                              </div>
                              <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">
                                 {bg.title}
                              </h1>
                              <p className="hero-text" data-ani="slideinup" data-ani-delay="0.7s">
                                 {bg.dicpt}
                              </p>

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
                  backgroundPosition: 'center'
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
                  backgroundPosition: 'center'
               }}
            >
               <span className="arrow">
                  <img src={right} alt="Next" />
               </span>
            </button>
         </div>

         <div
            className="map-view shape-mockup2" data-top="13%" data-right="8%">
            <span className="hero-map"><i className="fa-sharp fa-solid fa-location-dot"></i></span>
            <div className="card-view">
               <div className="map"> <a target="_blank" href="https://www.google.com/maps">
                  <img src={map} alt="" /></a></div>
               <h3 className="box-title">45 New Eskaton Road, copenhagen</h3>
               <a className="th-btn btn-fw" target="_blank" href="https://www.google.com/maps">Open on Map</a>
            </div>
         </div>

         <div className="scanbox shape-mockup2" data-top="22%" data-right="10%">
            <div className="sb-frame"><img src={bar} alt="" />
               <div className="sb-divider active"></div>
            </div>
            <div className="room-view">
               <div className="box-content">
                  <div className="box-img">
                     <img src={room} alt="room" />
                     <span className="discount">$690 / NIGHT</span>
                  </div>
                  <div className="author"><span className="img"><img src={author} alt="img" /></span><span className="text">Exclusive Deluxe</span></div>
               </div>
            </div>
         </div>

         <div className="scroll-down">
            <ScrollLink href="#offer-sec">
               <span>Scroll Down</span>
            </ScrollLink>
         </div>

      </div>
   );
}
export default HeroSlider;