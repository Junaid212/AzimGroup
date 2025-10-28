import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

import Ab1 from '../../img/normal/about_1.jpg'
import title from '../../img/theme-img/ab-logo.png'
import title2 from '../../img/theme-img/title_icon2.svg'
import feature1 from '../../img/icon/about_feature_1.svg'
import feature2 from '../../img/icon/about_feature_2.svg'
import feature3 from '../../img/icon/about_feature_3.svg'
import feature4 from '../../img/icon/about_feature_4.svg'
import CircleText from './CircleText';
import { PiFediverseLogoThin } from 'react-icons/pi';
import { PiCubeFocusThin } from 'react-icons/pi';
import { PiRocketLaunchThin } from 'react-icons/pi';
import { PiMedalMilitaryThin } from 'react-icons/pi';

const AboutArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className="about-shape overflow-hidden bg-shape " id="about-sec">
      <div className="container">
          <div className="row gy-40 align-items-center">
              <div className="col-lg-6 col-xxl-4">
                  <div className="title-area mb-30 pe-xxl-5">
                      {/* <img src={title} alt="shape" /> */}
                      <h2 className="sec-title text-white">Who We Are</h2>
                      <img src={title2} alt="shape" />
                      <p className="text-body fs-18 mt-25 mb-40">At the heart of Qatar's business landscape, AZIM Group 
                        emerges as a constellation of enterprises dedicated to the pursuit of excellence. With Seven unique
                         companies under our banner, we orchestrate a symphony of services aimed at delivering unmatched value
                          to our esteemed clients in various industries.</p>
                      <p className="text-body fs-18 mb-60">Our commitment to excellence makes Azim Group the trusted choice for
                         businesses seeking reliability and results.
Join our satisfied clients and experience the difference today.</p>
                  </div>
                  <div className="counter-card-wrap">
                      <div className="counter-card">
                          <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={58}/></span>+</h2>
                              <p className="box-text">Clients</p>
                          </div>
                      </div>
                      <div className="divider"></div>
                      <div className="counter-card">
                          <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={10}/></span>+</h2>
                              <p className="box-text">Years of Experience</p>
                          </div>
                      </div>
                      <div className="divider"></div>
                      <div className="counter-card">
                          <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={370}/></span>+</h2>
                              <p className="box-text">Staff</p>
                          </div>
                      </div>
                      <div className="divider"></div>
                  </div>
                  <div className="btn-group mt-60">
                      <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">KNOW MORE</Link>
                  </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                  <div className="img-box1">
                      <div className="img1">
                          <img src="src/img/new/13.png" alt="About" />
                      </div>
                      <div className="about-wrapp">
                          <CircleText text="* welcome to Azim Group* Committed to People, Committed to Future" />
                      </div>
                  </div>
              </div>
              <div className="col-xl-12 col-xxl-4 text-center text-xl-start">
                  <div className="about-feature-wrap">
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <PiFediverseLogoThin size={56} className="about-feature-icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Diverse Portfolio</h3>
                              <p className="box-text">Azim Group boasts a diverse, <br/>multi-industry portfolio</p>
                          </div>
                      </div>
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <PiCubeFocusThin size={54} className="about-feature-icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Innovative Vision</h3>
                              <p className="box-text">The group is led by an inclusive team <br/>that values diverse perspectives and ideas</p>
                          </div>
                      </div>
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <PiRocketLaunchThin size={54} className="about-feature-icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Commitment to Excellence</h3>
                              <p className="box-text">Committed to excellence, setting<br/> benchmarks through quality and innovation</p>
                          </div>
                      </div>
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <PiMedalMilitaryThin size={54} className="about-feature-icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Success</h3>
                              <p className="box-text">Professionally develop strategic <br/>platforms after thorough testing</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Add CSS for hover effect */}
      <style jsx>{`
        .about-feature:hover .about-feature-icon {
          color: white !important;
          transition: color 0.3s ease;
        }
        
        .about-feature {
          transition: all 0.3s ease;
          color: #BF930F;
        }
      `}</style>
  </div>
   );
};

export default AboutArea;