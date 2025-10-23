import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo-white2.svg'
import footer1 from '../../img/room/footer-img3.png'
import footer2 from '../../img/room/footer-img4.png'
import right from '../../img/icon/right-arrow2.svg'

const FooterAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <footer className={"" + props.hclass}>
         <div className="container">
            <div className="social-area">
               <div className="social-link"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i><span className="text">FACEBOOK</span></a></div>

               <div className="social-link"><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i><span className="text">TWITTER</span></a></div>
               <div className="social-link"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i><span className="text">LINKEDIN</span></a></div>
               <div className="social-link"><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i><span className="text">INSTAGRAM</span></a></div>

            </div>
         </div>
         <div className="widget-area">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget footer-widget footer-line">
                        <div className="th-widget-about">
                           <div className="about-logo">
                              <Link onClick={ClickHandler} to="/"><img src={logo} alt="Rotal" /></Link>
                           </div>
                           <p className="about-text">Rotal a peaceful and exclusive retreat in scenic surroundings. We offer an exclusive and refined experience at our Hote.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget widget_nav_menu footer-line footer-widget">
                        <h3 className="widget_title"> Useful Links</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu">
                              <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                              <li><Link onClick={ClickHandler} to="/room">Featured Rooms</Link></li>
                              <li><Link onClick={ClickHandler} to="/service">Our Best Services</Link></li>
                              <li><Link onClick={ClickHandler} to="/contact">Rquest a Booking</Link></li>
                              <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget widget_nav_menu footer-line footer-widget">
                        <h3 className="widget_title">Explore</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu">
                              <li><Link onClick={ClickHandler} to="/package">All Offers</Link></li>
                              <li><Link onClick={ClickHandler} to="/room">Our Rooms</Link></li>
                              <li><Link onClick={ClickHandler} to="/gallery">Our Gallery</Link></li>
                              <li><Link onClick={ClickHandler} to="/testimonial">Client Reviews</Link></li>
                              <li><Link onClick={ClickHandler} to="/contact">Neighborhood</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget footer-widget">
                        <h3 className="widget_title">Get In Touch</h3>
                        <div className="th-widget-contact">
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-location-dot"></i>
                              </div>
                              <p className="box-text">789 Inner Lane, Holy park, California, USA</p>
                           </div>
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-phone"></i>
                              </div>
                              <p className="box-text">
                                 <a href="tel:+01234567890" className="box-link">+01 234 567 890</a>
                                 <a href="tel:+09876543210" className="box-link">+09 876 543 210</a>
                              </p>
                           </div>
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <p className="box-text">
                                 <a href="mailto:mailinfo00@rotal.com" className="box-link">mailinfo00@rotal.com</a>
                                 <a href="mailto:support24@rotal.com" className="box-link">support24@rotal.com</a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="room-book-area">
                  <div className="row gy-4">
                     <div className="col-lg-6">
                        <div className="room-book style2">
                           <div className="room-img">
                              <img src={footer1} alt="" />
                              <h3 className="box-title">Our Rooms & Suits</h3>
                           </div>
                           <Link onClick={ClickHandler} className="footer-btn" to="/contact">MAKE RESERVATION<span><img src={right} alt="" /></span></Link>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="room-book style2">
                           <div className="room-img">
                              <img src={footer2} alt="" />
                              <h3 className="box-title">Get to know us</h3>
                           </div>
                           <Link onClick={ClickHandler} className="footer-btn" to="/contact">CONTACT US<span><img src={right} alt="" /></span></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="copyright-wrap">
               <div className="row gy-2 align-items-center">
                  <div className="col-lg-6">
                     <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2025 <Link onClick={ClickHandler} to="/">Rotal</Link>. All Rights Reserved.</p>
                  </div>
                  <div className="col-lg-6 text-center text-md-end">
                     <div className="footer-links">
                        <ul>
                           <li><Link onClick={ClickHandler} to="/about">Terms of service</Link></li>
                           <li><Link onClick={ClickHandler} to="/about">Privacy policy</Link></li>
                           <li><Link onClick={ClickHandler} to="/about">Cookies</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterAreaS3;