import React from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import Bg from '../../img/bg/package_bg_1.jpg'
import leftArrow from '../../img/icon/left-arrow2.svg'
import rightArrow from '../../img/icon/right-arrow2.svg'
import Pak1 from '../../img/package/package_1_1.jpg'
import Pak2 from '../../img/package/package_1_2.jpg'
import Pak3 from '../../img/package/package_1_3.jpg'
import Pak4 from '../../img/package/package_1_4.jpg'



const packages = [
   {
      img: Pak1,
      title: 'A Seamless Gasto Experienc',
   },
   {
      img: Pak2,
      title: 'Relax & Spa Monday- Thursday',
   },
   {
      img: Pak3,
      title: 'Event & Activities',
   },
   {
      img: Pak4,
      title: 'Body Fitness for Great Health',
   },
   {
      img: Pak1,
      title: 'A Seamless Gasto Experienc',
   },
   {
      img: Pak2,
      title: 'Relax & Spa Monday- Thursday',
   },
   {
      img: Pak3,
      title: 'Event & Activities',
   },
   {
      img: Pak4,
      title: 'Body Fitness for Great Health',
   },
];

const PackageArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

    const settings = {
      loop: true,
      speed: 1200,
   };
   return (
      <section className={"" + props.hclass} style={{ backgroundImage: `url(${Bg})` }}>
         <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
               <div className="col-xl-6">
                  <div className="title-area text-center text-lg-start">
                     <span className="sub-title2 style1">DISCOVER HOTEL</span>
                     <h2 className="sec-title text-white">Stay Packages At <span> Rotal Copenhagen</span></h2>
                  </div>
               </div>
               <div className="col-md-auto">
                  <div className="sec-btn mt-n3 mt-md-0">
                     <Link onClick={ClickHandler} to="/package" className="th-btn style3 th-icon">EXPLORE ALL</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="slider-area">
            <div className="package-list-area">
               <Swiper
                  modules={[Navigation, Pagination,]}
                  pagination={{
                     el: '.slider-pagination',
                     type: 'progressbar',
                     clickable: true,
                  }}
                  navigation={{
                     nextEl: '.slider-next',
                     prevEl: '.slider-prev',
                  }}
                  spaceBetween={24}
                  loop={settings['loop'] === false ? false : true}
                  speed={settings['speed'] ? settings['speed'] : 1000}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 1 },
                     992: { slidesPerView: 3 },
                     1400: { slidesPerView: 'auto', centeredSlides: true },
                  }}
                  className="swiper th-slider packageSlider1 has-shadow"
               >
                  {packages.map((pkg, idx) => (
                     <SwiperSlide key={idx}>
                        <div
                           className="package-list"
                           style={{ backgroundImage: `url(${pkg.img})` }}
                        >
                           <div className="package-content">
                              <span className="sub-title2 style1">SPECIAL OFFERS</span>
                              <h4 className="box-title">
                                 <Link onClick={ClickHandler} to="/package">
                                    {pkg.title}
                                 </Link>
                              </h4>
                              <div className="meta">
                                 <span>From $129</span>
                                 <span>2 Person</span>
                                 <span>For Today</span>
                              </div>
                           </div>
                           <Link onClick={ClickHandler} to="/contact" className="icon-btn">
                              <i className="fa-sharp fa-thin fa-arrow-right"></i>
                           </Link>
                        </div>
                     </SwiperSlide>
                  ))}


                  <div className="slider-controller">
                     <button className="slider-arrow style2 default slider-prev">
                        <img src={leftArrow} alt="" />
                     </button>
                     <div className="slider-pagination"></div>
                     <button className="slider-arrow style2 default slider-next">
                        <img src={rightArrow} alt="" />
                     </button>
                  </div>



               </Swiper>
            </div>
         </div>


      </section>

   );
};

export default PackageArea;