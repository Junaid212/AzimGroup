import React from 'react';

import Img1 from '../../img/team/team_2_1.jpg'
import Img2 from '../../img/team/team_2_2.jpg'
import { Link } from 'react-router-dom';

const Experience = () => {

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className="bg-black2">
         <div className="container">
            <div className="row gx-0 align-items-center">
               <div className="col-lg-6 order-lg-1 p-0">
                  <div className="experience-img">
                     <div className="box-img global-img">
                        <img src={Img1} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 order-lg-0 p-0">
                  <div className="experience-stuff">
                     <div className="box-content">
                        <h3 className="box-title">Experience staff</h3>
                        <p className="box-text">The best way to stay healthy is to choose our hotel that provides all the
                           modern amenities and facilities. Find out why our hotels in wellness.</p>
                        <div className="btn-group justify-content-center"> <Link onClick={ClickHandler} to="/service" className="th-btn2 style2 th-icon">GET SERVICE</Link></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6 order-lg-1 p-0">
                  <div className="experience-img global-img">
                     <div className="box-img">
                        <img src={Img2} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 order-lg-1 p-0">
                  <div className="experience-stuff">
                     <div className="box-content">
                        <h3 className="box-title">Best Quality</h3>
                        <p className="box-text">The best way to stay healthy is to choose our hotel that provides all the
                           modern amenities and facilities. Find out why our hotels in wellness.</p>
                        <div className="btn-group justify-content-center"> <Link onClick={ClickHandler} to="/review" className="th-btn2 style2 th-icon">ALL REVIEWS</Link></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Experience;