import React from 'react';
import { Link } from 'react-router-dom';
import Ab2 from '../../img/new/119.png';
import Ab1 from '../../img/normal/about_avater.jpg';
import Signature from '../../img/normal/signature.svg';
import PatternsShape from '../../img/shape/pattern-shape.png';
import Icon from '../../img/theme-img/title_icon2.svg';

const AboutAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass}>
         <div className="shape-mockup s2 d-none d-xxl-block" >
            <img src={PatternsShape} alt="shape" />
         </div>
         <div className="container" style={{backgroundColor:'#000000'}}>
            <div className="row align-items-center">
               <div className="col-xl-6 mb-35 mb-xl-0">
                  <div className="img-box2">
                     <div className="img1 th-parallax">
                        <img src={Ab2} alt="Image" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="ps-xl-5 space-extra2">
                     <div className="title-area mb-37">
                        <span className="sub-title">ABOUT</span>
                        <h2 className="sec-title">Golden Vision Cleaning and Hospitality Services</h2>
                        <img src={Icon} alt="shape" />

                     </div>
                     <p className="fs-18">Introducing Golden Vision Hospitality and Cleaning Services, an esteemed extension of Azim Facilities Management and Services. Specializing in the meticulous cleaning of both building exteriors and interiors, Golden Vision takes pride in delivering unparalleled cleanliness and hygiene standards.</p>
                     {/* <p className="fs-18">We are very pleased to serve thousands of happy clients every year. As we are just
                        in front
                        of the sea, Nothing can make obstruction to enjoy your beloved sea right from your bed.</p> */}
                     <div className="btn-group about-btn justify-content-start">
                        <Link onClick={ClickHandler} to="/about" className="th-btn2 extra-btn">EXPLORE MORE</Link>
                        {/* <div className="about-profile">
                           <div className="avater">
                              <img src={Ab1} alt="avater" />
                           </div>
                           <div>
                              <div className="signature">
                                 <img src={Signature} alt="signature" />
                              </div>
                              <span className="text">Andrew Karlex</span>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutAreaS2;