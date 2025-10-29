import React, { useState } from 'react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';

const ServiceAreaS3 = () => {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   const [hoveredIndex, setHoveredIndex] = useState(null);

   return (
      <section className="service-area3 overflow-hidden space">
        <div className="container">
            <div className="title-area text-center">
                <span className="sub-title2 style1 ">Services</span>
                <h2 className="sec-title text-white">All Facilities at Azim Group</h2>
            </div>
            <div className="row gy-4">
               {ServiceData.slice(0,7).map((item, index) =>(
                  <div className="col-md-6 col-xl-4 col-xxl-3" key={index}>
                    <div 
                      className="service-box"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        background: hoveredIndex === index 
                          ? 'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)' 
                          : 'initial',
                        transition: 'background 0.3s ease',
                        borderRadius: '10px'
                      }}
                    >
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