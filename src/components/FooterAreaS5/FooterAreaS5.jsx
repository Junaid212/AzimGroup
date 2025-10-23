import React from 'react';
import { Link } from 'react-router-dom';
import Bgimg from '../../img/bg/footer-2-bg.png';
import arrow2 from '../../img/icon/right-arrow2.svg';
import logo from '../../img/logo.svg';
import footer1 from '../../img/room/footer-img1.png';
import footer2 from '../../img/room/footer-img2.png';

const FooterAreaS5 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (


      <footer className={"" + props.hclass} style={{ backgroundImage: `url(${Bgimg})` }} data-overlay="black3" data-opacity="8">
         <div className="footer-wrap2-1 bg-body-bg">
            <div className="container">
               <div className="footer-logo">
                  <img src={logo} alt="" />
               </div>
               <ul className="footer-menu">
                  <li> <Link onClick={ClickHandler} to="/">Home</Link> </li>
                  <li> <Link onClick={ClickHandler} to="#">Pages</Link> </li>
                  <li><Link onClick={ClickHandler} to="/service">OUR SERVICES</Link></li>
                  <li><Link onClick={ClickHandler} to="/contact">OFFER & EVENTS</Link></li>
                  <li> <Link onClick={ClickHandler} to="/gallery">GALLERY</Link> </li>
                  <li><Link onClick={ClickHandler} to="/blog">Blog</Link> </li>
                  <li> <Link onClick={ClickHandler} to="/contact">Contact Us</Link> </li>
               </ul>
               <div className="row gy-4">
                  <div className="col-lg-6">
                     <div className="room-book">
                        <div className="room-img">
                           <img src={footer1} alt="" />
                           <h3 className="box-title">Our Rooms & Suits</h3>
                        </div>
                        <Link onClick={ClickHandler} className="footer-btn" to="/contact">MAKE RESERVATION <span><img src={arrow2} alt="" /></span></Link>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="room-book">
                        <div className="room-img">
                           <img src={footer2} alt="" />
                           <h3 className="box-title">Get to know us</h3>
                        </div>
                        <Link onClick={ClickHandler} className="footer-btn" to="/contact">CONTACT US<span><img src={arrow2} alt="" /></span></Link>
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

export default FooterAreaS5;