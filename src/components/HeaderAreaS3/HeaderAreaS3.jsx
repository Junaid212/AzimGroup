import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderTopS3 from '../HeaderTopS3/HeaderTopS3';




// Images
import LogoShape2 from '../../img//logo-shape.png';
import bed from '../../img/icon/bed.svg';
import LogoShape from '../../img/logo-shape2.png';
import Logo from '../../img/logo-white.svg';
import contactBg from '../../img/pages/contact_bg_img.jpg';
import Croom1 from '../../img/pages/menu-room-1.jpg';
import Croom2 from '../../img/pages/menu-room-2.jpg';
import Croom3 from '../../img/pages/menu-room-3.jpg';

const HeaderAreaS3 = (props) => {

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);

   };
   const closeMenu = () => {
      setIsMenuOpen(false);
   };


   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const topPos = window.scrollY;
         setIsSticky(topPos > 500);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);


   const [openSubMenus, setOpenSubMenus] = useState({});
   const toggleSubMenu = (menuKey) => {
      setOpenSubMenus((prev) => {
         const updated = { ...prev };
         if (prev[menuKey]) {
            updated[menuKey] = false;
         } else {
            const isNested = menuKey.includes('.');
            if (!isNested) {
               Object.keys(updated).forEach((key) => {
                  if (!key.includes('.')) updated[key] = false;
               });
            }
            updated[menuKey] = true;
         }

         return updated;
      });
   };



   const { ContactBtn = false, } = props
   const { RoomBtn = false, } = props
   const { LogoshapeOn = false, } = props
   const { Logoshapetwo = false, } = props

   return (
      <div id='scroll'>
         <header className={'' + props.hclass}>
            <HeaderTopS3 hclass={'header-top d-none d-lg-block'} />
            <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
               <div className="menu-area" style={{ backgroundColor: `#0C2830` }}>
                  <div className="container th-container2">
                     <div className="row align-items-center justify-content-between">
                        <div className="col-auto d-sm-block d-none">
                           <div className="header-wrapp">
                              <div className="header-button">
                                 <Link to="#" className="simple-btn sideMenuToggler" onClick={toggleMenu}><i className="fa-sharp-duotone fa-light fa-bars me-2"></i><span className="menu">MENU</span></Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-auto ms-auto d-none d-xl-block">
                           <div className="header-wrapp">
                              <nav className="main-menu">
                                 <ul>
                                    <li>
                                       <Link onClick={ClickHandler} to="/room">ROOMS</Link>
                                    </li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/service-details/1">GASTRO</Link>
                                    </li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/service-details/1">WELLNESS</Link>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                        <div className="col-auto">
                           {LogoshapeOn && (
                              <div className="header-logo">
                                 <Link onClick={ClickHandler} to="/">
                                    <img src={Logo} alt="Rotal" />
                                 </Link>
                                 <div className="bg-shape background-image" style={{ backgroundImage: `url(${LogoShape})` }} ></div>
                              </div>
                           )}

                           {Logoshapetwo && (
                              <div className="header-logo">
                                 <Link onClick={ClickHandler} to="/">
                                    <img src={Logo} alt="Rotal" />
                                 </Link>
                                 <div className="bg-shape background-image" style={{ backgroundImage: `url(${LogoShape2})` }} ></div>
                              </div>
                           )}

                        </div>
                        <div className="col-auto me-auto d-none d-xl-block">
                           <div className="header-wrapp">
                              <nav className="main-menu style3">
                                 <ul>
                                    <li>
                                       <Link onClick={ClickHandler} to="/about">HOTEL</Link>
                                    </li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/event">EVENT</Link>
                                    </li>
                                    <li>
                                       <Link onClick={ClickHandler} to="/contact">CONTACT US</Link>
                                    </li>
                                 </ul>
                              </nav>
                           </div>

                        </div>
                        <div className="col-auto">
                           <div className="header-button">
                              {ContactBtn && (
                                 <Link onClick={ClickHandler} to="/contact" className="th-btn2 style3 d-sm-block d-none">BOOK NOW <img src={bed} alt="" /></Link>
                              )}
                              {RoomBtn && (
                                 <Link onClick={ClickHandler} to="/contact" className="th-btn2 d-sm-block d-none">EXPLORE ROOMS <img src={bed} alt="" /></Link>
                              )}
                              <a href="#" className="icon-btn sideMenuToggler d-sm-none " onClick={toggleMenu}><i className="fa-sharp-duotone far fa-bars"></i></a>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className={`sidemenu-wrapper ${isMenuOpen ? 'show' : ''}`}>
            <div className="sidemenu-content allow-natural-scroll">
               <button className="closeButton sideMenuCls" onClick={closeMenu}><i className="far fa-times"></i></button>
               <div className="sidemenu-layout">
                  <div className="th-side-menu">
                     <div className="side-logo">
                        <Link onClick={ClickHandler} to="/"><img src={Logo} alt="Rotal" /></Link>
                     </div>
                     <ul>
                        <li className={`menu-item-has-children ${openSubMenus['home'] ? 'open' : ''}`}>
                           <Link to="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('home'); }}>Home</Link>
                           <ul
                              className="sub-menu"
                              style={{
                                 maxHeight: openSubMenus['home'] ? '500px' : '0px',
                              }}
                           >
                              <li><Link onClick={ClickHandler} to="/home">Home Modern Hotel</Link></li>
                              <li><Link onClick={ClickHandler} to="/home-2">Home Resort Hotel</Link></li>
                              <li><Link onClick={ClickHandler} to="/home-3">Home Luxury Hotel</Link></li>
                              <li><Link onClick={ClickHandler} to="/home-4">Home Luxury Hotel 2</Link></li>
                              <li><Link onClick={ClickHandler} to="/home-5">Home City Hotel</Link></li>
                           </ul>
                        </li>
                        <li className={`menu-item-has-children ${openSubMenus['pages'] ? 'open' : ''}`}>
                           <Link to="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('pages'); }}>Pages</Link>
                           <ul
                              className="sub-menu"
                              style={{
                                 maxHeight: openSubMenus['pages'] ? '500px' : '0px',
                              }}
                           >

                              <li className={`menu-item-has-children ${openSubMenus['pages.rooms'] ? 'open' : ''}`}>
                                 <Link to="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('pages.rooms'); }}>All Rooms</Link>
                                 <ul
                                    className="sub-menu"
                                    style={{
                                       maxHeight: openSubMenus['pages.rooms'] ? '200px' : '0px',
                                    }}
                                 >
                                    <li><Link onClick={ClickHandler} to="/room">Rooms Suites</Link></li>
                                    <li><Link onClick={ClickHandler} to="/room-details/1">Room Details</Link></li>
                                 </ul>
                              </li>

                              <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                              <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                              <li><Link onClick={ClickHandler} to="/team-details/1">Team Details</Link></li>
                              <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                              <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                              <li><Link onClick={ClickHandler} to="/pricing">Price Plan</Link></li>
                              <li><Link onClick={ClickHandler} to="/testimonial">Testimonials</Link></li>
                              <li><Link onClick={ClickHandler} to="/faq">FAQ Page</Link></li>
                              <li><Link onClick={ClickHandler} to="/error">Error Page</Link></li>
                           </ul>
                        </li>
                        <li className={`menu-item-has-children ${openSubMenus['services'] ? 'open' : ''}`}>
                           <Link to="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('services'); }}>Our Services</Link>
                           <ul
                              className="sub-menu"
                              style={{
                                 maxHeight: openSubMenus['services'] ? '200px' : '0px',
                              }}
                           >
                              <li><Link onClick={ClickHandler} to="/service">Our Services</Link></li>
                              <li><Link onClick={ClickHandler} to="/service-details/1">Service Details</Link></li>
                           </ul>
                        </li>

                        <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>


                        <li className={`menu-item-has-children ${openSubMenus['blog'] ? 'open' : ''}`}>
                           <Link to="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('blog'); }}>Blog</Link>
                           <ul
                              className="sub-menu"
                              style={{
                                 maxHeight: openSubMenus['blog'] ? '300px' : '0px',
                              }}
                           >

                              <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                              <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                              <li><Link onClick={ClickHandler} to="/blog-details-right-sidebar/1">Blog Details Without Sidebar</Link></li>
                              <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                           </ul>
                        </li>

                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                     </ul>

                  </div>
                  <div className="widget side-menu-contact pt-80 footer-widget background-image" style={{ backgroundImage: `url(${contactBg})` }}>
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
                     <div className="mt-50">
                        <Link onClick={ClickHandler} to="/contact" className="th-btn th-icon">BOOK AN APPOINTMENT</Link>
                     </div>
                  </div>
                  <div className="widget menu-rooms-area footer-widget">
                     <h3 className="h4 text-center">Discover Your Ideal Room</h3>
                     <div className="menu-rooms-list">
                        <Link onClick={ClickHandler} className="menu-room-link" to="/room-details/1">
                           <div className="menu-room-image global-img">
                              <img src={Croom1} alt="Gallery Image" />
                              <div className="menu-room-content">
                                 <h3 className="box-title">Deluxe King Bed</h3>
                              </div>
                           </div>
                        </Link>
                        <Link onClick={ClickHandler} className="menu-room-link" to="/room-details/1">
                           <div className="menu-room-image global-img">
                              <img src={Croom2} alt="Gallery Image" />
                              <div className="menu-room-content">
                                 <h3 className="box-title">Twine King Bed</h3>
                              </div>
                           </div>
                        </Link>
                        <Link onClick={ClickHandler} className="menu-room-link" to="/room-details/1">
                           <div className="menu-room-image global-img">
                              <img src={Croom3} alt="Gallery Image" />
                              <div className="menu-room-content">
                                 <h3 className="box-title">Family Exclusive</h3>
                              </div>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
};

export default HeaderAreaS3;