import React from 'react';
import CountUp from 'react-countup';

// images
import { Link } from 'react-router-dom';
import feature1 from '../../img/icon/about_feature_1.svg';
import feature2 from '../../img/icon/about_feature_2.svg';
import feature3 from '../../img/icon/about_feature_3.svg';
import feature4 from '../../img/icon/about_feature_4.svg';
import Ab4 from '../../img/new/110.png';
import VideoModal from '../ModalVideo/ModalVideo';
import about2 from '../../img/normal/about_8_2.jpg'
import about3 from '../../img/normal/about_8_3.jpg'


const AboutAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} id="about-sec">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-6 mb-xl-0">
                  <div className="title-area mb-30 pe-xxl-5">
                     <span className="sub-title2 style1">ABOUT US</span>
                     <h2 className="sec-title text-white">AZIM FACILITIES MANAGEMENT AND SERVICES
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row gy-4 gx-15 justify-content-between">
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature1} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Highly Qualified Workforce</h3>
                        {/* <p className="box-text">Your comfort zone away from home</p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature2} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Scalability without Compromise</h3>
                        {/* <p className="box-text">Hospitality Meets Home</p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature3} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">ISO 9001:2015 certified company</h3>
                        {/* <p className="box-text">Hospitality meets home</p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature4} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Compliant to Sedex Smeta 4- pillar guidelines</h3>
                        {/* <p className="box-text">Experience elegance stay distinctive</p> */}
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gy-4 space-top">
               <div className="col-xxl-7">
                  <div className="img-box3">
                     <div className="img1 th-parallax">
                        <img src={Ab4} alt="" />
                        {/* <VideoModal vidclass={'play-btn border-play-btn popup-video'} /> */}
                     </div>
                  </div>
               </div>
               <div className="col-xxl-5">
                  <div className="ps-xxl-5 pe-xxl-5">
                     <div className="counter-card-wrap style2">
                        <div className="counter-card">
                           <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={10} /></span>+</h2>
                              <p className="box-text">Years of Experience</p>
                           </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                           <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={58} /></span>+</h2>
                              <p className="box-text">Cliens</p>
                           </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                           <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={370} /></span>+</h2>
                              <p className="box-text">Staff</p>
                           </div>
                        </div>
                        <div className="divider"></div>
                     </div>
                     <p className="extra-text text-body fs-18 mt-50 mb-40">We are an ISO 9001:2015 certified company with full
                         compliance to Sedex Smeta 4-pillar guidelines, stands as a leading player in the realm of facilities 
                         management & Hospitality in Qatar. With a heightened demand for quality services in the thriving hospitality
                          and hotel industries, Azim Facilities Management & Hospitality Services emerges as a pivotal solution provider. 
                          </p>
                     <p className="extra-text text-body fs-18 mb-50 pe-xl-5">Our unwavering commitment to excellence, coupled with
                         highly skilled and adept workforce, positions us as a 
                          premier choice for comprehensive facility management & Hospitality services</p>
                     <div className="btn-group justify-content-start">
                        {/* <Link onClick={ClickHandler} to="/about" className="th-btn th-icon">LEARN MORE</Link> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
};

export default AboutAreaS3;