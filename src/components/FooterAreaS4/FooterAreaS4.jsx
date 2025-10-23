import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.svg'
import blog1 from '../../img/blog/recent-post-1-1.jpg'
import blog2 from '../../img/blog/recent-post-1-2.jpg'
import blog3 from '../../img/blog/recent-post-1-3.jpg'
import copyright from '../../img/bg/footer-copyright-bg.png'

const FooterAreaS4 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <footer className={"" + props.hclass}>
         <div className="container">
            <div className="footer-logo">
               <img className="bg-light2" src={Logo} alt="img" />
            </div>
         </div>
         <div className="widget-area">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget footer-widget footer-line">
                        <h3 className="widget_title">About Hotel</h3>
                        <div className="th-widget-about style2">
                           <p className="footer-text">This luxurious and modern hotel is designed to make your stay easier. Experience an extraordinary experience in every corner and in our services. Seamless world of hotel reservations, where securing your stay is as effortless as a few clicks. Place an order and have a pleasant experience.</p>
                           <div className="th-social">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                              <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                              <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                           </div>
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
                              <li><Link onClick={ClickHandler} to="/contact">Career</Link></li>
                              <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                     <div className="widget footer-widget footer-line">
                        <h3 className="widget_title">Latest News</h3>
                        <div className="recent-post-wrap">
                           <div className="recent-post">
                              <div className="media-img">
                                 <Link onClick={ClickHandler} to="/blog-details"><img src={blog1} alt="Blog Image" /></Link>
                              </div>
                              <div className="media-body">
                                 <h4 className="post-title"><Link onClick={ClickHandler} className="text-inherit" to="/blog">Discover and book a wide range of hotels rooms</Link></h4>
                                 <div className="blog-meta">
                                    <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar-days"></i>Dec 22, 2025</Link>
                                    <Link onClick={ClickHandler} to="/blog">08 min read</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="recent-post">
                              <div className="media-img">
                                 <Link onClick={ClickHandler} to="/blog"><img src={blog2} alt="Blog Image" /></Link>
                              </div>
                              <div className="media-body">
                                 <h4 className="post-title"><Link onClick={ClickHandler} className="text-inherit" to="/blog">halloween decoratjion for you home</Link></h4>
                                 <div className="blog-meta">
                                    <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar-days"></i>Dec 22, 2025</Link>
                                    <Link onClick={ClickHandler} to="/blog">08 min read</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="recent-post">
                              <div className="media-img">
                                 <Link onClick={ClickHandler} to="/blog-details"><img src={blog3} alt="Blog Image" /></Link>
                              </div>
                              <div className="media-body">
                                 <h4 className="post-title"><Link onClick={ClickHandler} className="text-inherit" to="/blog">where hospitality meets adventure, tales from hotel</Link></h4>
                                 <div className="blog-meta">
                                    <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar-days"></i>Dec 22, 2025</Link>
                                    <Link onClick={ClickHandler} to="/blog">08 min read</Link>
                                 </div>
                              </div>
                           </div>
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
            </div>
         </div>
         <div className="copyright-wrap" style={{backgroundImage:`url(${copyright})`}} data-overlay="black3" data-opacity="8">
            <div className="container">
               <div className="row gy-2 align-items-center">
                  <div className="col-lg-5">
                     <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2025 <Link onClick={ClickHandler} to="/">Rotal</Link>. All Rights Reserved.</p>
                  </div>
                  <div className="col-lg-7 text-center text-lg-end">
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

export default FooterAreaS4;