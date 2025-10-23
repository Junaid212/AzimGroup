import React from 'react';
import { Link } from 'react-router-dom';
import pricingData from '../../api/pricing';
import priceCion from '../../img/icon/price-icon.svg';

const PricingArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5">
                  <div className="title-area text-center">
                     <span className="sub-title2 style2">Service we provide</span>
                     <h2 className="sec-title text-white">
                        Turning your vision into reality. Call us for any event
                     </h2>
                  </div>
               </div>
            </div>

            <div className="row gy-4 justify-content-center">
  {pricingData.map((plan, idx) => (
    <div className="col-xl-4 col-md-6 d-flex" key={idx} >
      <div
        className={`price-card bg-light2 d-flex flex-column justify-content-between w-100 ${
          plan.active ? "item-active" : ""
        }`}
        style={{ height: "100%" }}
      >
        <div className="box-content flex-grow-1" style={{backgroundColor:'#181A1E'}}>
          <h3 className="box-title">{plan.title}</h3>
          <p className="box-text">{plan.subtitle}</p>
          <div className="checklist">
            <ul>
              {(plan.features || []).map((feature, index) => {
                const isUnavailable =
                  typeof feature === "object" && feature.unavailable;
                const text = typeof feature === "object" ? feature.text : feature;
                return (
                  <li key={index} className={isUnavailable ? "unavailable" : ""}>
                    {text}
                  </li>
                );
              })}
            </ul>
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

export default PricingArea;
