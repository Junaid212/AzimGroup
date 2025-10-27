import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import degree from '../../img/icon/degree.svg';
import cards from '../../img/shape/cards.png';

const FooterArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <footer className={"" + props.hclass}>
         <div className="footer-logo">
            <img src={logo} alt="" />
         </div>
         <div className="widget-area">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget newsletter-widget footer-widget">
                        <h3 className="newsletter-title h2">Subscribe to receive latest offers</h3>
                        <form className="newsletter-form style2">
                           <input className="form-control" type="email" placeholder="Enter Email" required="" />
                           <button type="submit" className="th-btn2 style1">SUBSCRIBE</button>
                        </form>
                        <div className="th-social">
                           <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                           {/* <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> */}
                           <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                           {/* <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a> */}
                           <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget widget_nav_menu footer-line footer-widget">
                        <h3 className="widget_title"> Quick Links</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu">
                              <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                              <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                              <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                              {/* <li><Link onClick={ClickHandler} to="/contact">Rquest a Booking</Link></li> */}
                              <li><Link onClick={ClickHandler} to="/contact">Career</Link></li>
                              {/* <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget widget_nav_menu footer-line footer-widget">
                        <h3 className="widget_title">Our Services</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu">
                              <li><Link onClick={ClickHandler} to="/package">Facilities Management & services</Link></li>
                              <li><Link onClick={ClickHandler} to="/room">One Way Limousine</Link></li>
                              <li><Link onClick={ClickHandler} to="/gallery">VenYou Events</Link></li>
                              <li><Link onClick={ClickHandler} to="/review">Food Trading</Link></li>
                              <li><Link onClick={ClickHandler} to="/contact">Cleaning and Hospitality Services</Link></li>
                              <li><Link onClick={ClickHandler} to="/contact">Auto Electrical</Link></li>
                              <li><Link onClick={ClickHandler} to="/contact">Restaurant</Link></li>
                              
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
                              <p className="box-text">NBK Building,
#805, 8th Floor,
Doha-Qatar</p>
                           </div>
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-phone"></i>
                              </div>
                              <p className="box-text">
                                 <a href="tel:+97444802851" className="box-link">+ 974 4480 2851</a>
                                 <a href="tel:+97477047248" className="box-link">+ 974 7704 7248</a>
                              </p>
                           </div>
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <p className="box-text">
                                 <a href="mailto:mailinfo00@rotal.com" className="box-link">afms@azimgroup.qa</a>
                                 {/* <a href="mailto:support24@rotal.com" className="box-link">support24@rotal.com</a> */}
                              </p>
                           </div>
                        </div>
                        {/* <div className="degree-text mt-30"><Link onClick={ClickHandler} to="/room"><img src={degree} alt="" /></Link></div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright-wrap">
            <div className="container">
                <div className="row gy-2 align-items-center">
                    <div className="col-lg-5">
                        <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2025 by <Link onClick={ClickHandler} to="https://brightmedia.tech/" target='blank'>Bright Media.tech</Link>. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-7 text-center text-lg-end">
                        <div className="footer-links">
                            <ul>
                                {/* <li><Link onClick={ClickHandler} to="/about">Terms of service</Link></li>
                                <li><Link onClick={ClickHandler} to="/about">Privacy policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/about">Cookies</Link></li> */}
                            </ul>
                            <span className="footer-card">
                                {/* <img src={cards} alt="" /> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
   );
};

export default FooterArea;