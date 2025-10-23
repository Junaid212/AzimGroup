import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// logo
import img1 from '../../img/brand/brand_1_1.svg';
import img2 from '../../img/brand/brand_1_2.svg';
import img3 from '../../img/brand/brand_1_3.svg';
import img4 from '../../img/brand/brand_1_4.svg';
import img5 from '../../img/brand/brand_1_5.svg';
import img6 from '../../img/brand/brand_1_6.svg';
import dot1 from '../../img/shape/brand-dot1.png';
import dot2 from '../../img/shape/brand-dot2.png';

const brandImages = [
   {
      id: '1',
      logo: img1,
   }, {
      id: '2',
      logo: img2,
   }, {
      id: '3',
      logo: img3,
   }, {
      id: '4',
      logo: img4,
   }, {
      id: '5',
      logo: img5,
   }, {
      id: '6',
      logo: img6,
   },
   {
      id: '7',
      logo: img3,
   }, {
      id: '8',
      logo: img4,
   },

];

const BrandAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   const settings = {
      loop: true,
      speed: 1200,
   };
   const MaskedElement = ({ className, maskImage }) => {
      return (
         <div
            className={`${className} bg-mask`}
            style={{
               maskImage: `url(${maskImage})`,
               WebkitMaskImage: `url(${maskImage})`,
               maskSize: 'contain'
            }}
         />
      );
   };

   return (
      <div className={"" + props.hclass}>
         <MaskedElement className="dot-shape1" maskImage={dot1} />
         <MaskedElement className="dot-shape2" maskImage={dot2} />
         <div className="container">
            <div className="slider-area text-center">
               <Swiper
                  spaceBetween={30}
                  loop={settings['loop'] === false ? false : true}
                  speed={settings['speed'] ? settings['speed'] : 1000}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     476: { slidesPerView: 2 },
                     768: { slidesPerView: 3 },
                     992: { slidesPerView: 4 },
                     1200: { slidesPerView: 4 },
                     1400: { slidesPerView: 6 },
                  }}
               >
                  {brandImages.map((imgSrc, idx) => (
                     <SwiperSlide key={idx}>
                        <div className="brand-item">
                           <a onClick={ClickHandler} href="#">
                              <img className="original" src={imgSrc.logo} alt="Brand Logo" />
                              <img className="gray" src={imgSrc.logo} alt="Brand Logo" />
                           </a>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default BrandAreaS2;
