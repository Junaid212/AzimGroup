import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderTopS2 from '../HeaderTopS2/HeaderTopS2';

// Images
import bed from '../../img/icon/bed.svg';
import right from '../../img/icon/right-arrow3.svg';
import LogoShape from '../../img/logo-shape.png';
import Logo from '../../img/logo-white.svg';
import contactBg from '../../img/pages/contact_bg_img.jpg';
import card1 from '../../img/pages/mega-card-1.jpg';
import card2 from '../../img/pages/mega-card-2.jpg';
import card3 from '../../img/pages/mega-card-3.jpg';
import card4 from '../../img/pages/mega-card-4.jpg';
import card5 from '../../img/pages/mega-card-5.jpg';
import card6 from '../../img/pages/mega-card-6.jpg';
import Croom1 from '../../img/pages/menu-room-1.jpg';
import Croom2 from '../../img/pages/menu-room-2.jpg';
import Croom3 from '../../img/pages/menu-room-3.jpg';
import room1 from '../../img/pages/room-1.jpg';
import room2 from '../../img/pages/room-2.jpg';
import room3 from '../../img/pages/room-3.jpg';

const HeaderAreaS2 = (props) => {
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



   return (
      <div id='scroll'>
         <header className={"" + props.hclass}>
            <HeaderTopS2 hclass={'header-top'} />
            <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
               <div className="menu-area">
                  <div className="container-fluid">
                     <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                           <div className="header-wrapp">
                              <div className="header-button">
                                 <Link to="#" className="simple-btn sideMenuToggler" onClick={toggleMenu}><i className="fa-sharp-duotone fa-light fa-bars"></i><span className="menu">MENU</span></Link>
                              </div>
                              <nav className="main-menu d-none d-xl-block">
                                 <ul>
                                    <li className="menu-item-has-children">
                                       <Link onClick={ClickHandler} to="#">ROOMS</Link>
                                       <ul className="mega-menu style2 mega-menu-content allow-natural-scroll">
                                          <li>
                                             <div className="container">
                                                <div className="row gy-4">
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box style2">
                                                         <div className="mega-menu-img">
                                                            <img src={room1} alt="Home One" />

                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/room">Single Room</Link></h3>
                                                         <p className="price">Price Start at $290</p>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box style2">
                                                         <div className="mega-menu-img">
                                                            <img src={room2} alt="Home One" />
                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/room">Grand Luxury Room</Link></h3>
                                                         <p className="price">Price Start at $320</p>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box style2">
                                                         <div className="mega-menu-img">
                                                            <img src={room3} alt="Home One" />

                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/room">Cozy Room</Link></h3>
                                                         <p className="price">Price Start at $370</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="row">
                                                   <div className="btn-room mt-40">
                                                      <Link onClick={ClickHandler} to="/room-details/1" className="th-btn btn-fw th-icon">ACCOMMODATION</Link>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                        <div className="col-auto">
                           <div className="header-logo">
                              <Link onClick={ClickHandler} to="/">
                                 <img src={Logo} alt="Rotal" />
                              </Link>
                              <div className="bg-shape background-image" style={{ backgroundImage: `url(${LogoShape})` }} ></div>
                           </div>
                        </div>
                        <div className="col-auto">
                           <div className="header-wrapp">
                              <nav className="main-menu style3 d-none d-xl-block">
                                 <ul>
                                    <li className="menu-item-has-children">
                                       <Link onClick={ClickHandler} to="#">HOTEL</Link>
                                       <ul className="mega-menu style3 mega-menu-content allow-natural-scroll">
                                          <li>
                                             <div className="container">
                                                <div className="row gy-4">
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box style3">
                                                         <div className="box-content">
                                                            <div className="logo">
                                                               <img src={Logo} alt="Home One" />
                                                            </div>
                                                            <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/about">The Hotel</Link></h3>
                                                            <p className="price">Booking Start at $290</p>

                                                         </div>
                                                         <Link onClick={ClickHandler} className="icon-btn" to="/about"><img src={right} alt="" /></Link>
                                                      </div>
                                                      <div className="mega-card">
                                                         <div className="mega-wrapp">
                                                            <div className="box-img"><img src={card1} alt="" /></div>
                                                            <h3 className="box-title"><Link onClick={ClickHandler} to="/service-details/1">Restaurant</Link></h3>
                                                         </div>
                                                         <Link onClick={ClickHandler} to="/service-details/1"><img src={right} alt="" /></Link>
                                                      </div>
                                                      <div className="mega-card">
                                                         <div className="mega-wrapp">
                                                            <div className="box-img"><img src={card2} alt="" /></div>
                                                            <h3 className="box-title"><Link onClick={ClickHandler} to="/equipment">Equipments</Link></h3>
                                                         </div>
                                                         <Link onClick={ClickHandler} to="/equipment"><img src={right} alt="" /></Link>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box style3">
                                                         <div className="box-content">
                                                            <div className="logo">
                                                               <img src={Logo} alt="Home One" />
                                                            </div>
                                                            <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/service-details/1">Wellness</Link></h3>
                                                            <p className="price">Booking Start at $270</p>
                                                         </div>
                                                         <Link onClick={ClickHandler} className="icon-btn" to="/service-details/1"><img src={right} alt="" /></Link>
                                                      </div>
                                                      <div className="mega-card">
                                                         <div className="mega-wrapp">
                                                            <div className="box-img"><img src={card3} alt="" /></div>
                                                            <h3 className="box-title"><Link onClick={ClickHandler} to="/package">Packages</Link></h3>
                                                         </div>
                                                         <Link onClick={ClickHandler} to="/package"><img src={right} alt="" /></Link>
                                                      </div>
                                                      <div className="mega-card">
                                                         <div className="mega-wrapp">
                                                            <div className="box-img"><img src={card4} alt="" /></div>
                                                            <h3 className="box-title"><Link onClick={ClickHandler} to="/event">Events</Link></h3>
                                                         </div>
                                                         <Link onClick={ClickHandler} to="/event"><img src={right} alt="" /></Link>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box style3">
                                                         <div className="box-content">
                                                            <div className="logo">
                                                               <img src={Logo} alt="Home One" />
                                                            </div>
                                                            <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/service">Services</Link></h3>
                                                            <p className="price">Price Start at $370</p>
                                                         </div>
                                                         <Link onClick={ClickHandler} className="icon-btn" to="/service"><img src={right} alt="" /></Link>
                                                      </div>
                                                      <div className="mega-card">
                                                         <div className="mega-wrapp">
                                                            <div className="box-img"><img src={card5} alt="" /></div>
                                                            <h3 className="box-title"><Link onClick={ClickHandler} to="/review">Reviews</Link></h3>
                                                         </div>
                                                         <Link onClick={ClickHandler} to="/review"><img src={right} alt="" /></Link>
                                                      </div>
                                                      <div className="mega-card">
                                                         <div className="mega-wrapp">
                                                            <div className="box-img"><img src={card6} alt="" /></div>
                                                            <h3 className="box-title"><Link onClick={ClickHandler} to="/blog">Blog</Link></h3>
                                                         </div>
                                                         <Link onClick={ClickHandler} to="/blog"><img src={right} alt="" /></Link>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                              <Link onClick={ClickHandler} to="/contact" className="th-btn booking">BOOKING <img src={bed} alt="" /></Link>
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

export default HeaderAreaS2;