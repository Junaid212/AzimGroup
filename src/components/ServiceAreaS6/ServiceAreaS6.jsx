import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


const ServiceAreaS6 = () => {

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="overflow-hidden space" id="service-sec">
         <div className="container pb-45">
            <div className="row justify-content-between">
               <div className="col-xl-4 text-center text-xl-start">
                  <div className="title-area">
                     <span className="sub-title2 style1">MORE SERVICES</span>
                     <h2 className="sec-title text-white">popular services</h2>
                  </div>
               </div>
            </div>

            <div className="slider-area">
               <Swiper className="swiper th-slider " id="serviceSlider2"
                  loop={true}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     1200: { slidesPerView: 1 },
                     1300: { slidesPerView: 2 },
                  }}


               >
                  {ServiceData.slice(0, 6).map((item, Skye) => (
                     <SwiperSlide key={Skye}>
                        <div className="service-grid style-flex">
                           <div className="box-img global-img">
                              <img src={item.grid} alt="img" />
                           </div>
                           <div className="box-content">
                              <span className="sub-title2 style1">{item.num}</span>
                              <h3 className="box-title"><Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>{item.title}</Link></h3>
                              <p className="box-text">{item.subtitle}</p>
                              <div><Link onClick={ClickHandler} to={item.link} className="th-btn2 style2">VIEW DETAILS</Link></div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}

               </Swiper>
            </div>

         </div>
         
      </section>

   );
};

export default ServiceAreaS6;