import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HeaderTop = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
               <div className="col-auto">
                  <div className="header-links">
                     <ul>
                        <li><i className="fas fa-location-dot"></i>45 New Eskaton Road, Austria</li>
                        <li><i className="fas fa-clock"></i> Sun to Friday: 8.00 am - 7.00 pm</li>
                     </ul>
                  </div>
               </div>
               <div className="col-auto">
                  <div className="header-links">
                     <ul>
                        <li className="d-none d-md-inline-block"><i className="fa-sharp fa-solid fa-clock"></i>Local Time:
                           01:15PM</li>
                        <li className="d-none d-md-inline-block"><i className="fa-sharp fa-solid fa-comments"></i><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                        <li><i className="fas fa-headset"></i> <Link onClick={ClickHandler} to="/contact">Support</Link></li>
                        <li>
                           <div className="dropdown-link">
                              <a
                                 className="dropdown-toggle"
                                 href="#"
                                 role="button"
                                 id="dropdownMenuLink1"
                                 data-bs-toggle="dropdown"
                                 aria-expanded="false"
                              >
                                 <i className="fas fa-globe"></i> English
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                 <li>
                                    <a href="#">German</a>
                                    <a href="#">French</a>
                                    <a href="#">Italian</a>
                                    <a href="#">Latvian</a>
                                    <a href="#">Spanish</a>
                                    <a href="#">Greek</a>
                                 </li>
                              </ul>
                           </div>

                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeaderTop;