import React from 'react';
import { Link } from 'react-router-dom';
import pricingData from '../../api/pricing';
import priceCion from '../../img/icon/price-icon.svg';

const PricingAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5">
                  <div className="title-area text-center">
                     <span className="sub-title2 style2">PRICING PLAN</span>
                     <h2 className="sec-title text-white">
                        Make memories book <span>your hotel now</span>
                     </h2>
                  </div>
               </div>
            </div>

            <div className="row gy-4 justify-content-center">
               {pricingData.map((plan, idx) => (
                  <div className="col-xl-4 col-md-6" key={idx}>
                     <div className={`price-card ${plan.active ? "item-active" : ""}`}>
                        <div
                           className="header-price">
                           <div className="box-icon">
                              <img src={priceCion} alt="shape" />
                           </div>
                           <p className="box-price">
                              {plan.price}
                              <span className="duration">{plan.duration}</span>
                           </p>
                           {plan.popular && <span className="tag">Popular</span>}
                        </div>

                        <div className="box-content">
                           <h3 className="box-title">{plan.title}</h3>
                           <p className="box-text">
                              {plan.subtitle}
                           </p>
                           <div className="checklist">
                              <ul>
                                 {(plan.features || []).map((feature, index) => {
                                    const isUnavailable = typeof feature === "object" && feature.unavailable;
                                    const text = typeof feature === "object" ? feature.text : feature;
                                    return (
                                       <li key={index} className={isUnavailable ? "unavailable" : ""}>
                                          {text}
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                           <div className="box-footer">
                              <Link to="/pricing" onClick={ClickHandler}  className="th-btn btn-fw style3 th-icon">
                                 PURCHASE NOW
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default PricingAreaS2;
