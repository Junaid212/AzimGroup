import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import SliderBg2 from '../../img/hero/hero_bg_3_2.jpg';
import SliderBg3 from '../../img/hero/hero_bg_3_3.jpg';
import SliderBg1 from '../../img/hero/hero_bg_5_1.jpg';
import room from '../../img/hero/hero_pdf_5_1.jpg';
import left from '../../img/icon/hero-arrow-left.svg';
import right from '../../img/icon/hero-arrow-right.svg';
import map from '../../img/shape/map.png';
import ScrollLink from '../ScrollLink/ScrollLink';

const slides = [
   {
      id: '01',
      title: 'Welcome To Rotal City Hotel',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      SliderBg: SliderBg1
   },
   {
      id: '02',
      title: 'Exclusive & Sophisticated Hotel',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      SliderBg: SliderBg2,
   },
   {
      id: '03',
      title: 'Perfect Blend of City Hotel',
      dicpt: 'Rotal hotel is a peaceful place to rest, to recover your energies and to have great laughs with your family.',
      SliderBg: SliderBg3,
   },

];
const HeroAreaS5 = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   useEffect(() => {
      const animatedElements = document.querySelectorAll('[data-ani]');
      animatedElements.forEach((el) => {
         const animation = el.getAttribute('data-ani');
         const delay = el.getAttribute('data-ani-delay') || '0s';
         el.classList.add(animation);
         el.style.animationDelay = delay;
      });
   }, []);

   const settings = {
      loop: true,
      speed: 1200,
   };
   const autoplayCondition = null;
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

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   return (
      <div className="th-hero-wrapper hero-5 slider-area" id="hero">
         <div className="slider-area">
            <Swiper
               effect="fade"
               modules={[EffectFade, Autoplay, Navigation, Pagination]}
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
                  swiper.params.pagination.el = ".slider-pagination";
               }}
               navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current
               }}
               pagination={{
                  el: ".slider-pagination",
                  clickable: true,
               }}
               className="swiper th-slider" id="heroSlide5"
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
                           <div className="hero-style4">
                              <div className="hero-wrapp">
                                 <div className="hero-star-rating" data-ani="slideinup" data-ani-delay="0.4s">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </div>
                              </div>
                              <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.6s">
                                 {bg.title}
                              </h1>
                              <p className="hero-text" data-ani="slideinup" data-ani-delay="0.7s">
                                 {bg.dicpt}
                              </p>
                              <div className="btn-wrap justify-content-center mt-40" data-ani="slideinup" data-ani-delay="0.8s">
                                 <Link onClick={ClickHandler} to="/about" className="th-btn2 style3 th-icon">Reservation Now</Link>
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
            >
               <span className="arrow">
                  <img src={left} alt="Previous" />
               </span>
            </button>

            <button
               ref={nextRef}
               className="slider-arrow slider-next slider-next-bg"
            >
               <span className="arrow">
                  <img src={right} alt="Next" />
               </span>
            </button>
            <div className="slider-pagination style3"></div>
         </div>

         <div className="map-view shape-mockup2" data-bottom="162px" data-left="131px">
            <span className="hero-map"><i className="fa-sharp fa-solid fa-location-dot"></i></span>
            <div className="card-view">
               <div className="map"> <a target="_blank" href="https://www.google.com/maps">
                  <img src={map} alt="" /></a></div>
               <h3 className="box-title">45 New Eskaton Road, copenhagen</h3>
               <a className="th-btn btn-fw" target="_blank" href="https://www.google.com/maps">Open on Map</a>
            </div>
         </div>

         <div className="hero-pdf-wrap">
            <a className="th-btn" href="#">GET PDF</a>
            <span className="box-text">Download our brochure on services in the Rotal</span>
            <div className="box-thumb">
               <img src={room} alt="img" />
            </div>
         </div>

         <div className="scroll-down">
            <ScrollLink href="#about-sec">
               <span>Scroll Down</span>
            </ScrollLink>
         </div>

      </div>
   );
}
export default HeroAreaS5;
