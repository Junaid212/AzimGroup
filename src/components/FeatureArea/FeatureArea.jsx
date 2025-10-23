import React from 'react';
import { Link } from 'react-router-dom';

import Icon1 from '../../img/icon/feature_card_1.svg';
import Icon2 from '../../img/icon/feature_card_2.svg';
import Icon3 from '../../img/icon/feature_card_3.svg';
import shapeImg from '../../img/shape/feature-shape.png';


const FeatureArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="row gy-4 justify-content-center">
               <div className="col-lg-6 col-xl-4">
                  <div className="feature-card">
                     <div className="feature-shape" style={{ backgroundImage: `url(${shapeImg})` }}></div>
                     <div className="box-icon">
                        <img src={Icon1} alt="Icon" />
                     </div>
                     <h3 className="box-title"><Link onClick={ClickHandler} to="/service-details/1">Keeping your safe</Link></h3>
                     <p className="box-text">The wellbeing of our guests and staff is of paramount importance. Our Covid-19 strategy includes deep cleaning rooms between guests and leaving rooms vacant for at least 24 hours for safety</p>
                     <Link onClick={ClickHandler} to="/service-details/1" className="th-btn2 style2">BOOK NOW</Link>
                  </div>
               </div>
               <div className="col-lg-6 col-xl-4">
                  <div className="feature-card">
                     <div className="feature-shape" style={{ backgroundImage: `url(${shapeImg})` }}></div>
                     <div className="box-icon">
                        <img src={Icon2} alt="Icon" />
                     </div>
                     <h3 className="box-title"><Link onClick={ClickHandler} to="/service-details/1">Cancellation within 24H</Link></h3>
                     <p className="box-text">We understand that sometimes things do not go to plan. You can book your stay with confidence with our 24 hour cancellation policy. Cancellations are available on bookings up to 24 hours</p>
                     <Link onClick={ClickHandler} to="/service-details/1" className="th-btn2 style2">BOOK NOW</Link>
                  </div>
               </div>
               <div className="col-lg-6 col-xl-4">
                  <div className="feature-card">
                     <div className="feature-shape" style={{ backgroundImage: `url(${shapeImg})` }}></div>
                     <div className="box-icon">
                        <img src={Icon3} alt="Icon" />
                     </div>
                     <h3 className="box-title"><Link onClick={ClickHandler} to="/service-details/1">full room amenities</Link></h3>
                     <p className="box-text">Our rooms are designed to give you maximum comfort and independence. You’ll find a microwave, fridge freezer, kettle and teas and coffees in every room.</p>
                     <Link onClick={ClickHandler} to="/service-details/1" className="th-btn2 style2">BOOK NOW</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeatureArea;