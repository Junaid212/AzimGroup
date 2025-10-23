import React from 'react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';

const ServiceAreaS5 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="overflow-hidden space" id="service-sec">
         <div className="container">
            <div className="row gy-4">
               {ServiceData.slice(0, 7).map((item, Skye) => (
                  <div className="col-xxl-6" key={Skye}>
                     <div className="service-grid style-flex">
                        <div className="box-img global-img">
                           <img src={item.grid} alt="img" />
                        </div>
                        <div className="box-content">
                           <span className="sub-title2 style1">{item.num}</span>
                           <h3 className="box-title"><Link onClick={ClickHandler} to={`/service-details/${item.slug}`} >{item.title}</Link></h3>
                           <p className="box-text">{item.subtitle}</p>
                           <div className=""><Link onClick={ClickHandler} to={`/service-details/${item.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceAreaS5;