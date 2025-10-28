import React from 'react';
import { Link } from 'react-router-dom';


// icon
import feaat1 from '../../img/new/69.png'
import hotelIcon1 from '../../img/icon/hotel-icon1-5.svg'
import hotelIcon2 from '../../img/icon/hotel-icon1-1.svg'
import hotelIcon3 from '../../img/icon/hotel-icon1-6.svg'
import hotelIcon4 from '../../img/icon/hotel-icon1-2.svg'
import hotelIcon5 from '../../img/icon/hotel-icon1-7.svg'
import hotelIcon6 from '../../img/icon/hotel-icon1-3.svg'
import hotelIcon7 from '../../img/icon/hotel-icon1-8.svg'
import hotelIcon8 from '../../img/icon/hotel-icon1-4.svg'

const FeatureAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" +props.hclass}>
         <div className="container" >
            <div className="why-wrap1">
               <div className="why-img-box1">
                  <img src={feaat1} alt="img" />
               </div>
               <div className="why-wrap-content" style={{backgroundColor:'#181A1E'}}>
                  <div className="title-area">
                     
                     <h2 className="sec-title">Services Offered</h2>
                     <span className="sub-title2 style1">At Golden Vision Auto Electrical, we offer a comprehensive range of auto electrical services, including but not limited to:</span>
                     {/* <p className="sec-text pe-xl-5 me-xxl-5">We pride ourselves on a high standard of friendly cheerful service which cafers to the needs of the whole family.</p> */}
                  </div>
                  <ul className="why-grid-list">
                     <li>
                        <div className="box-icon"><img src={hotelIcon1} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Diagnostics and Troubleshooting</p>
                        </div>
                     </li>
                     {/* <li>
                        <div className="box-icon"><img src={hotelIcon2} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Swimming Pool</p>
                        </div>
                     </li> */}
                     {/* <li>
                        <div className="box-icon"><img src={hotelIcon3} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Wellness & Spa</p>
                        </div>
                     </li> */}
                     <li>
                        <div className="box-icon"><img src={hotelIcon4} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Battery Testing and Replacement</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon5} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Alternator and Starter Motor Repairs</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon6} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Lighting System Repairs</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon7} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Ignition System Repairs</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon8} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Wiring Repairs and Rewiring</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon8} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Electrical Component Installation</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon8} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Electronic Systems Diagnosis and Repair</p>
                        </div>
                     </li>
                  </ul>
                  <div className="btn-group mt-60">
                     {/* <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">VIEW ALL</Link> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeatureAreaS2;