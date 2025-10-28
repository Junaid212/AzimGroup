import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/ModalVideo';

// images
import bgShap from '../../img/bg/about_bg_8.png'
import about1 from '../../img/new/67.png'
import about2 from '../../img/normal/about_8_2.jpg'
import about3 from '../../img/normal/about_8_3.jpg'
import about4 from '../../img/normal/about_8_4.jpg'
import about5 from '../../img/normal/about_8_5.jpg'
import feature1 from '../../img/icon/about_feature_1.svg'
import feature2 from '../../img/icon/about_feature_2.svg'
import feature3 from '../../img/icon/about_feature_3.svg'
import feature4 from '../../img/icon/about_feature_4.svg'
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
const AboutAreaS7 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={" " + props.hclass} id="about-sec" >
         <div className="container" >
            <div className="row gy-40 flex-row-reverse justify-content-between">
               <div className="col-xxl-6">
                  <div className="img-box8">
                     <div className="img1">
                        <img src={about1} alt="img" />
                     </div>
                     <div className="discount-wrapp">
                        {/* <VideoModal vidclass={'play-btn popup-video'} /> */}
                        <CircleTextS2 text=" AZIM Facilities Management and services *" />
                     </div>
                  </div>

               </div>
               <div className="col-xxl-5">
                  <div className="about-wrap8">
                     <div className="title-area mb-45">
                        <span className="sub-title2 style1">ABOUT</span>
                        <h2 className="sec-title">Golden Auto Electrical</h2>
                        <p className="sec-text mt-35 mb-20">Golden Vision Auto Electrical is a trusted and reliable automotive garage committed to delivering top-quality auto electrical services. With a strong focus on precision and professionalism, we ensure every vehicle receives expert attention and care. Our skilled technicians use advanced diagnostic tools and modern techniques to handle everything from minor electrical repairs to complex system troubleshooting.</p>
                        <p className="sec-text">With years of hands-on experience in the industry, Golden Vision Auto Electrical has earned a reputation as the go-to destination for comprehensive automotive electrical solutions. We take pride in our customer-centric approach, transparent service, and timely delivery. Whether it’s maintenance, repairs, or electrical upgrades, our mission is to keep your vehicle performing at its best with reliability you can count on.</p>
                     </div>
                     <div className="btn-group mt-1">
                        {/* <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">LEARN MORE</Link> */}
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className="space-top">
               <div className="row gy-60 gx-60">
                  <div className="col-xxl-9">
                     <div className="row gy-4">
                        <div className="col-6">
                           <div className="thumb">
                              <img className="w-100" src={about2} alt="img" />
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="thumb">
                              <img className="w-100" src={about3} alt="img" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12 col-xxl-3 text-center text-xl-start">
                     <div className="about-feature-wrap">
                        <div className="about-feature">
                           <div className="box-icon">
                              <div className="color-masking">
                                 <div className="masking-src" ></div>
                                 <img src={feature1} alt="Icon" />
                              </div>
                           </div>
                           <div className="box-content">
                              <h3 className="box-title">Serenity and bliss</h3>
                              <p className="box-text">Your comfort zone away from home</p>
                           </div>
                        </div>
                        <div className="about-feature">
                           <div className="box-icon">
                              <div className="color-masking">
                                 <div className="masking-src"></div>
                                 <img src={feature2} alt="Icon" />
                              </div>
                           </div>
                           <div className="box-content">
                              <h3 className="box-title">Store Luggage</h3>
                              <p className="box-text">Hospitality Meets Home</p>
                           </div>
                        </div>
                        <div className="about-feature">
                           <div className="box-icon">
                              <div className="color-masking">
                                 <div className="masking-src" ></div>
                                 <img src={feature3} alt="Icon" />
                              </div>
                           </div>
                           <div className="box-content">
                              <h3 className="box-title">Room Services</h3>
                              <p className="box-text">Hospitality meets home</p>
                           </div>
                        </div>
                        <div className="about-feature">
                           <div className="box-icon">
                              <div className="color-masking">
                                 <div className="masking-src" ></div>
                                 <img src={feature4} alt="Icon" />
                              </div>
                           </div>
                           <div className="box-content">
                              <h3 className="box-title">Pick up & Drop</h3>
                              <p className="box-text">Experience elegance stay distinctive</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="space-top">
               <div className="row gy-4">
                  <div className="col-xl-6">
                     <div className="about-card8">
                        <div className="box-img">
                           <img src={about4} alt="img" />
                        </div>
                        <div className="box-content">
                           <h4 className="box-title">Reception 24/7 Days</h4>
                           <p className="box-text">We are grateful for our team of employees who have been with us for 15 years and together share our sense of hospitality.</p>
                           <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">EXPLORE MORE</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="about-card8">
                        <div className="box-img">
                           <img src={about5} alt="img" />
                        </div>
                        <div className="box-content">
                           <h4 className="box-title">Reservation Online</h4>
                           <p className="box-text">We are grateful for our team of employees who have been with us for 15 years and together share our sense of hospitality.</p>
                           <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">BOOK NOW</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default AboutAreaS7;