
import React from 'react';
import { Link } from 'react-router-dom';


import Ab4 from '../../img/normal/about_4.jpg';
import Avater from '../../img/normal/about_avater2.png';
import Signature from '../../img/normal/signature2.svg';

const AboutAreaS4 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   return (
      <div>
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-4">
                  <div className="pe-xl-5">
                     <div className="title-area mb-37 text-center text-xl-start">
                        <span className="sub-title2 style1 ">CHAIRMAN</span>
                        {/* <h2 className="sec-title ">The rotal In The Heart of Switzerland</h2> */}

                     </div>
                     <p className="fs-18  text-center text-xl-start">On behalf of Azim Group, Iextend my warmest welcome to you. 
                        Our journey has been defined by an unwavering commitment to excellence, a spirit of innovation, and a 
                        diverse portfolio of companies. It is our dedicated teams, spread across these varied businesses, who 
                        have been the true architects of our success. I am immensely grateful for their contributions and dedication.</p>
                     <div className="btn-group mt-40 d-flex justify-content-center justify-content-xl-start">
                        {/* <Link onClick={ClickHandler} to="/about" className="th-btn style2 extra-btn">EXPLORE MORE</Link> */}

                     </div>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="img-box4">
                     <div className="img1 th-parallax">
                        <img src='src/img/new/26.png' alt="Image" />
                     </div>

                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="ps-xl-5">
                     <div className="about-profile2">
                        <div className="avater">
                           {/* <img src={Avater} alt="avater" /> */}
                        </div>
                        <h3 className="box-title">Mr.Ali Ahmed A.M Marafia</h3>
                        <span className="text">Chairman</span>
                        <p className="extra-text fs-18 mb-35">We are fully committed to supporting their growth
                            and professional development. As we navigate the ever-evolving business landscape, 
                            our shared vision remains clear - to not just adapt but to thrive. Thank you for being 
                            a part of Azim Group's remarkable story.</p>
                        <div>
                           <div className="signature">
                              {/* <img src={Signature} alt="signature" /> */}
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-4">
                  <div className="pe-xl-5">
                     <div className="title-area mb-37 text-center text-xl-start">
                        <span className="sub-title2 style1 ">MANGING DIRECTOR</span>
                        {/* <h2 className="sec-title ">The rotal In The Heart of Switzerland</h2> */}

                     </div>
                     <p className="fs-18  text-center text-xl-start">We are proud to bring together a diverse range of companies,
                         each with its unique strengths, all united by a common goal: delivering excellence. Located in the heart
                          of Doha, we're dedicated to staying up-to-date and modern. Our aim is to not just meet your needs, but
                           to go above and beyond, providing top-notch service.</p>
                     <div className="btn-group mt-40 d-flex justify-content-center justify-content-xl-start">
                        {/* <Link onClick={ClickHandler} to="/about" className="th-btn style2 extra-btn">EXPLORE MORE</Link> */}

                     </div>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="img-box4">
                     <div className="img1 th-parallax">
                        <img src='src/img/new/27.png' alt="Image" />
                     </div>

                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="ps-xl-5">
                     <div className="about-profile2">
                        <div className="avater">
                           {/* <img src={Avater} alt="avater" /> */}
                        </div>
                        <h3 className="box-title">Mr. Mohammed Shameer</h3>
                        <span className="text">managing director</span>
                        <p className="extra-text fs-18 mb-35">Together, let's push the boundaries of success and raise the bar
                            for excellence, not only here in Qatar but around the world. Thank you for being part of this
                             journey.</p>
                        <div>
                           <div className="signature">
                              {/* <img src={Signature} alt="signature" /> */}
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
   );
};

export default AboutAreaS4;