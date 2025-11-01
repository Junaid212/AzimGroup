import React from 'react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';
import titleimg from '../../img/theme-img/title_icon.svg'

const ServiceAreaS4 = () => {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
       <section className="overflow-hidden space" id="service-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="title-area text-center">
                        <h2 className="sec-title">Why Choose Us</h2>
                        <span className="title-img"><img src={titleimg} alt="shape" /></span>
                    </div>
                </div>
            </div>
            <div className="row gy-4">
               {ServiceData.slice(0,6).map((item,skay)=>(
                   <div className="col-md-6 col-xl-4 d-flex" key={skay}>
                    <div className="service-box style2 h-100 d-flex flex-column">
                        <div className="box-icon">
                            <img src={item.Icon} alt="Icon" />
                        </div>
                        <div className="box-content flex-grow-1">
                            <h3 className="box-title">
                                <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                                    {item.title2}
                                </Link>
                            </h3>
                            <p className="box-text">{item.subtitle2}</p>
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