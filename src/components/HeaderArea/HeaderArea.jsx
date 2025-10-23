import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconBad from '../../img/icon/bed.svg';
import iconCl from '../../img/icon/calender.svg';
import Logo from '../../img/logo.png';
import home5 from '../../img/pages/home-city-hotel.jpg';
import home4 from '../../img/pages/home-luxury-hotel-2.jpg';
import home3 from '../../img/pages/home-luxury-hotel.jpg';
import home1 from '../../img/pages/home-modern-hotel.jpg';
import home2 from '../../img/pages/home-resort-hotel.jpg';
import HeaderTop from '../HeaderTop/HeaderTop';
import SmoothScrollWrapper from '../SmoothScrollWrapper/SmoothScrollWrapper';


const HeaderArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
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



   const [menuOpen, setMenuOpen] = useState(false);
   const [openSubMenus, setOpenSubMenus] = useState({});

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      setOpenSubMenus({});
   };

   const toggleSubMenu = (menuKey) => {
      setOpenSubMenus((prev) => ({
         ...prev,
         [menuKey]: !prev[menuKey]
      }));
   };

   const { ContactBtn = false, } = props
   const { RoomBtn = false, } = props


   return (
      <div id='scroll'>


         <header className={"" + props.hclass}>
            {/* <HeaderTop hclass={'header-top'} /> */}
            <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
               <div className="container">
                  <div className="menu-area">
                     <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                           <div className="header-logo">
                              <Link onClick={ClickHandler} to="/">
                                 <img src={Logo} alt="Rotal" style={{height:'54px'}}/></Link>
                           </div>
                        </div>
                        <div className="col-auto">
                           <nav className="main-menu d-none d-lg-inline-block">
                              <ul>
                                 <li >
                                    <Link onClick={ClickHandler} to="/">Home</Link>
                                    {/* <SmoothScrollWrapper>
                                       <ul className="mega-menu mega-menu-content allow-natural-scroll">
                                          <li>
                                             <div className="container">
                                                <div className="row gy-4">
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box">
                                                         <div className="mega-menu-img">
                                                            <img src={home1} alt="Home One" />
                                                            <div className="btn-wrap">
                                                               <Link onClick={ClickHandler} to="/home" className="th-btn">View Demo</Link>
                                                            </div>
                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home">Home Modern Hotel</Link></h3>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box">
                                                         <div className="mega-menu-img">
                                                            <img src={home2} alt="Home Two" />
                                                            <div className="btn-wrap">
                                                               <Link onClick={ClickHandler} to="/home-2" className="th-btn ">View Demo</Link>
                                                            </div>
                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-2">Home Resort Hotel</Link></h3>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box">
                                                         <div className="mega-menu-img">
                                                            <img src={home3} alt="Home Three" />
                                                            <div className="btn-wrap">
                                                               <Link onClick={ClickHandler} to="/home-3" className="th-btn ">View Demo</Link>
                                                            </div>
                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-3">Home Luxury Hotel</Link>
                                                         </h3>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box">
                                                         <div className="mega-menu-img">
                                                            <img src={home4} alt="Home Three" />
                                                            <div className="btn-wrap">
                                                               <Link onClick={ClickHandler} to="/home-4" className="th-btn ">View Demo</Link>
                                                            </div>
                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-4">Home Luxury Hotel 2</Link>
                                                         </h3>
                                                      </div>
                                                   </div>
                                                   <div className="col-lg-4">
                                                      <div className="mega-menu-box">
                                                         <div className="mega-menu-img">
                                                            <img src={home5} alt="Home Three" />
                                                            <div className="btn-wrap">
                                                               <Link onClick={ClickHandler} to="/home-5" className="th-btn ">View Demo</Link>
                                                            </div>
                                                         </div>
                                                         <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-5">Home City Hotel</Link>
                                                         </h3>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </SmoothScrollWrapper> */}
                                 </li>
                                 <li >
                                    <Link onClick={ClickHandler} to="/about">About Us</Link>
                                    {/* <ul className="sub-menu">
                                       <li className="menu-item-has-children">
                                          <Link onClick={ClickHandler} to="#">All Rooms</Link>
                                          <ul className="sub-menu">
                                             <li><Link onClick={ClickHandler} to="/room">Rooms Suites</Link></li>
                                             <li><Link onClick={ClickHandler} to="/room-details/1">Room Details</Link></li>
                                          </ul>
                                       </li>
                                       <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                       <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                       <li><Link onClick={ClickHandler} to="/team-details/1">Team Details</Link></li>
                                       <li><Link onClick={ClickHandler} to="/package">Packages</Link></li>
                                       <li><Link onClick={ClickHandler} to="/event">Event Page</Link></li>
                                       <li><Link onClick={ClickHandler} to="/equipment">Equipments</Link></li>
                                       <li><Link onClick={ClickHandler} to="/review">Reviews</Link></li>
                                       <li><Link onClick={ClickHandler} to="/pricing">Price Plan</Link></li>
                                       <li><Link onClick={ClickHandler} to="/testimonial">Testimonials</Link></li>
                                       <li><Link onClick={ClickHandler} to="/faq">Faq Page</Link></li>
                                       <li><Link onClick={ClickHandler} to="/error">Error Page</Link></li>
                                    </ul> */}
                                 </li>
                                 <li className="menu-item-has-children">
                                    <Link onClick={ClickHandler} to="/service">Services</Link>
                                    <ul className="sub-menu">
                                       <li><Link onClick={ClickHandler} to="/service">All Services</Link></li>
                                       <li><Link onClick={ClickHandler} to="/one-way-limousin-wll/1">One Way Limousine WLL</Link></li>
                                       <li><Link onClick={ClickHandler} to="/facilities-management-services/2">AZIM Facilities Management & services</Link></li>
                                       <li><Link onClick={ClickHandler} to="/venyou-events/3">VenYou Events</Link></li>
                                       <li><Link onClick={ClickHandler} to="/nijila-food-trading/4">Najila Food Trading</Link></li>
                                       <li><Link onClick={ClickHandler} to="/hospitality-services/5">Golden Vision Cleaning and Hospitality Services</Link></li>
                                       <li><Link onClick={ClickHandler} to="/golden-auto-electrical/6">Golden Auto Electrical</Link></li>
                                       <li><Link onClick={ClickHandler} to="/vadakara-to-kasargog-reststaurent/7">Vadakara To Kasargod Restaurant</Link></li>
                                    </ul>
                                 </li>
                                 {/* <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                 <li className="menu-item-has-children">
                                    <Link onClick={ClickHandler} to="#">Blog</Link>
                                    <ul className="sub-menu">
                                       <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                       <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                                       <li><Link onClick={ClickHandler} to="/blog-details-right-sidebar/1">Blog Details Without Sidebar</Link></li>
                                       <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                                    </ul>
                                 </li> */}
                                 <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                              </ul>
                           </nav>
                           <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={toggleMenu}>
                              <i className='far fa-bars'></i>
                           </button>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                           {ContactBtn && (
                              <Link onClick={ClickHandler} to="/contact" className="th-btn2">GET IN TOUCH</Link>
                           )}
                           {RoomBtn && (
                              <Link onClick={ClickHandler} to="/room" className="th-btn style2">BROWSE ROOMS <img src={iconBad} alt="" /></Link>
                           )}

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>


         {menuOpen && (
            <div className="th-menu-wrapper th-body-visible d-block d-lg-none">
               <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
                  <button className="th-menu-toggle" onClick={toggleMenu}><i className="fal fa-times"></i></button>
                  <div className="mobile-logo">
                     <Link onClick={ClickHandler} to="/">
                        <img src={Logo} alt="Rotal" />
                     </Link>
                  </div>
                  <div className="th-mobile-menu">
                     <ul>
                        <li >
                           <Link to='/' onClick={() => toggleSubMenu('home')}>Home</Link>
                           {/* {openSubMenus['home'] && (
                              <ul className="sub-menu">
                                 <li><Link onClick={ClickHandler} to="/home">Home Modern Hotel</Link></li>
                                 <li><Link onClick={ClickHandler} to="/home-2">Home Resort Hotel</Link></li>
                                 <li><Link onClick={ClickHandler} to="/home-3">Home Luxury Hotel</Link></li>
                                 <li><Link onClick={ClickHandler} to="/home-4">Home Luxury Hotel 2</Link></li>
                                 <li><Link onClick={ClickHandler} to="/home-5">Home City Hotel</Link></li>
                              </ul>
                           )} */}
                        </li>

                        <li className="menu-item-has-children">
                          <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                           {openSubMenus['pages'] && (
                              <ul className="sub-menu">
                                 <li className="menu-item-has-children">
                                    <Link to='#' onClick={() => toggleSubMenu('rooms')}>All Rooms</Link>
                                    {openSubMenus['rooms'] && (
                                       <ul className="sub-menu">
                                          <li><Link onClick={ClickHandler} to="/room">Rooms Suites</Link></li>
                                          <li><Link onClick={ClickHandler} to="/room-details/1">Room Details</Link></li>
                                       </ul>
                                    )}
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
                           )}
                        </li>

                        <li className="menu-item-has-children">
                           <Link to='#' onClick={() => toggleSubMenu('services')}>Our Services</Link>
                           {openSubMenus['services'] && (
                              <ul className="sub-menu">
                                 <li><Link onClick={ClickHandler} to="/service">Our Services</Link></li>
                                 <li><Link onClick={ClickHandler} to="/service-details/1">Service Details</Link></li>
                              </ul>
                           )}
                        </li>

                        {/* <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li> */}

                        {/* <li className="menu-item-has-children">
                           <Link to='#' onClick={() => toggleSubMenu('blog')}>Blog</Link>
                           {openSubMenus['blog'] && (
                              <ul className="sub-menu">
                                 <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                 <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                                 <li><Link onClick={ClickHandler} to="/blog-details-right-sidebar/1">Blog Details Without Sidebar</Link></li>
                                 <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                              </ul>
                           )}
                        </li> */}

                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
};

export default HeaderArea;