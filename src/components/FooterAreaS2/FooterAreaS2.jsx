import React from 'react';
import { Link } from 'react-router-dom';
import { default as RightArrow, default as RightArrow2 } from '../../img/icon/right-arrow2.svg';
import LogoFooter from '../../img/logo.svg';
import Footer1 from '../../img/room/footer-img1.png';
import Footer2 from '../../img/room/footer-img2.png';

const FooterAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <footer className={"" + props.hclass}>
         <div className="footer-logo">
            <img src={LogoFooter} alt="" />
         </div>
         <div className="container">
            <ul className="footer-menu">
               <li> <Link onClick={ClickHandler} to="/">Home</Link> </li>
               <li> <Link onClick={ClickHandler} to="/">Pages</Link> </li>
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
                        <img src={Footer1} alt="" />
                        <h3 className="box-title">Our Rooms & Suits</h3>
                     </div>
                     <Link onClick={ClickHandler} className="footer-btn" to="/contact">MAKE RESERVATION <span><img src={RightArrow} alt="" /></span></Link>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="room-book">
                     <div className="room-img">
                        <img src={Footer2} alt="" />
                        <h3 className="box-title">Get to know us</h3>
                     </div>
                     <Link onClick={ClickHandler} className="footer-btn" to="/contact">CONTACT US<span><img src={RightArrow2} alt="" /></span></Link>
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

export default FooterAreaS2;