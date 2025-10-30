import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// logo
import img1 from '../../img/brand/76.png';
import img2 from '../../img/brand/77.png';
import img3 from '../../img/brand/78.png';
import img4 from '../../img/brand/79.png';
import img5 from '../../img/brand/80.png';
import img6 from '../../img/brand/81.png';
import img7 from '../../img/brand/82.png';
import img8 from '../../img/brand/83.png';
import img9 from '../../img/brand/84.png';
import img10 from '../../img/brand/85.png';
import img11 from '../../img/brand/86.png';
import img12 from '../../img/brand/87.png';
import img13 from '../../img/brand/88.png';
import img14 from '../../img/brand/89.png';
import img15 from '../../img/brand/90.png';
import img16 from '../../img/brand/91.png';
import img17 from '../../img/brand/92.png';
import img18 from '../../img/brand/93.png';
import img19 from '../../img/brand/94.png';

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
      logo: img7,
   }, {
      id: '8',
      logo: img8,
   }, {
      id: '9',
      logo: img9,
   },
   { id: '10',
      logo: img10,
   },{
      id: '11',
      logo: img11,
   }, {
      id: '12',
      logo: img12,
   },{
      id: '13',
      logo: img13,
   },{
      id: '14',
      logo: img14,
   },{
      id: '15',
      logo: img15,
   },{
      id: '16',
      logo: img16,
   },{
      id: '17',
      logo: img17,
   },{
      id: '18',
      logo: img18,
   },{
      id: '19',
      logo: img19,
   },
   

];

const BrandArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div >
         <div className="container" style={{backgroundColor:'white', marginTop:'50px'}}>
            <div className="slider-area text-center" >
               <Swiper
                  spaceBetween={30}
                  loop={true}
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
                        <div className="brand-item" style={{padding:'60px'}}>
                           <a onClick={ClickHandler} href="#">
                              <img className="original" src={imgSrc.logo} alt="Brand Logo" style={{height:'120px'}}/>
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

export default BrandArea;
