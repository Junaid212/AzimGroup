import React from 'react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';

const ServiceAreaS4 = () => {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
       <section className="overflow-hidden space" id="service-sec">
        <div className="container">
            <div className="row gy-100">
               {ServiceData.slice(0,6).map((item,skay)=>(
                   <div className="col-md-6 col-xl-4" key={skay}>
                    <div className="service-box style2">
                        <div className="box-icon">
                            <img src={item.Icon2} alt="Icon" />
                        </div>
                        <div className="box-content">
                            <h3 className="box-title"><Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>{item.title2}</Link></h3>
                            <p className="box-text">The room is equiped with air conditioning.</p>
                        </div>
                    </div>
                </div>
               ))}
            </div>
        </div>
    </section>

   );
};

export default ServiceAreaS4;