import React from 'react';
import { Link } from 'react-router-dom';
import Ab5 from '../../img/normal/about_5.jpg'
import Ab6 from '../../img/normal/about_6.jpg'
import Award from '../../img/normal/award-2.png'
import CountUp from 'react-countup';

const AboutAreaS5 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" +props.hclass} id="about-sec">
      <div className="container">
          <div className="row gy-5 align-items-center">
              <div className="col-xl-6">
                  <div className="img-box5">
                      <div className="about-img-area">
                          <div className="img1 th-parallax">
                              <img className="w-100" src={Ab5} alt="" />
                          </div>
                      </div>
                      <div className="about-wrapp">
                          <div className="img2">
                              <img src={Ab6} alt="" />
                          </div>
                          <div className="box-content">
                              <div className="award"><img src={Award} alt="" /></div>
                              <h3 className="box-title">Awards Winning Hotel Since 1999</h3>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="col-xl-5">
                  <div className="ps-xxl-5 ms-xxl-2">
                      <div className="title-area mb-37">
                          <span className="sub-title2 style1">ABOUT ROTAL</span>
                          <h2 className="sec-title">Welcome To Rotal Hotel <span>In Historic
                                  Surroudings</span></h2>
                      </div>
                      <p className="extra-text text-body fs-18 mb-0">In the heart of Hellerup, north of Copenhagen, is Park
                          Lane
                          Copenhagen – a peaceful and exclusive retreat in scenic surroundings. We offer an exclusive and
                          refined experience at our Boutique Hotel, where the focus is on the details.</p>
                      <p className="extra-text text-body fs-18 mb-50">FYou can expect to enter a world of timeless
                          elegance when you visit Park Lane Copenhagen. The hotel is characterized by a consistent style
                          that embraces both classic and modern design traditions.</p>

                      <div className="counter-card-wrap style2">
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number"><CountUp end={290}></CountUp></span>+ </h2>
                                  <p className="box-text">Luxury Rooms</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number">
                                  <CountUp end={4}></CountUp>.<CountUp end={8}></CountUp>
                                    </span>+ </h2>
                                  <p className="box-text">Guest Rating</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number"><CountUp end={128}></CountUp></span>k+ </h2>
                                  <p className="box-text">Clients Happy</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                      </div>

                      <div className="btn-group mt-70 justify-content-start">
                          <Link onClick={ClickHandler}  to="/about" className="th-btn th-icon">LEARN MORE</Link>
                          <Link onClick={ClickHandler}  to="/room" className="th-btn style3 th-icon">EXPLORE ROOMS</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   );
};

export default AboutAreaS5;