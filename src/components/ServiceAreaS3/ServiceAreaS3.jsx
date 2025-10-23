import React from 'react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';

const ServiceAreaS3 = () => {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="service-area3 overflow-hidden space">
        <div className="container">
            <div className="title-area text-center">
                <span className="sub-title2 style1 ">HOTEL AMENITIES</span>
                <h2 className="sec-title text-white">All Facilities at Rotal</h2>
            </div>
            <div className="row gy-4">
               {ServiceData.slice(0,7).map((item,sky) =>(
                  <div className="col-md-6 col-xl-4 col-xxl-3" key={sky}>
                    <div className="service-box">
                        <div className="box-icon">
                            <img src={item.Icon} alt="Icon" />
                        </div>
                        <div className="box-content">
                            <h3 className="box-title"><Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>{item.title}</Link></h3>
                            <p className="box-text">{item.subtitle}</p>
                        </div>
                    </div>
                </div>
               ))}
            </div>
        </div>
    </section>
   );
};

export default ServiceAreaS3;