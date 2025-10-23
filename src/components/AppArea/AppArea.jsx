import React from 'react';

import { Link } from 'react-router-dom';
import appbg from '../../img/bg/app_bg_1.jpg';
import App1 from '../../img/theme-img/app-btn.jpg';
import App2 from '../../img/theme-img/app-btn2.jpg';

const AppArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${appbg})` }} >
         <div className="container">
            <div className="app-title-area text-center">
               <div className="title-area mb-0">
                  <span className="sub-title2 style2">GET APPLICATION</span>
                  <h2 className="sec-title">Luxury awaits.
                     Book your stay Today!</h2>
                  <p className="sec-text">Seamless world of hotel reservations, where securing your stay is as effortless as a few clicks. Place an order and have a pleasant experience.</p>
                  <div className="btn-wrap justify-content-center">
                     <Link onClick={ClickHandler} to="/"><img src={App1} alt="img" /></Link>
                     <Link onClick={ClickHandler} to="/"><img src={App2} alt="img" /></Link>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default AppArea;