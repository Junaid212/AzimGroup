import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';


const ServiceAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass} id="service-sec">
         <div className="container">
            <div className="row gy-60">
               {ServiceData.slice(7, 10).map((item, iservic) => (
                  <div className="col-12 service-card-wrap" key={iservic}>
                     <div className="service-card style3" style={{backgroundColor:'#181A1E'}}>
                        <div className="box-img">
                           <img src={item.image} alt="Icon" />
                        </div>
                        <div className="box-content" style={{backgroundColor:'#181A1E'}}>
                           <h6 className="box-subtitle">{item.title2}</h6>
                           <h3 className="box-title"><Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>{item.title}</Link></h3>
                           <p className="box-text">{item.subtitle}</p>
                           {/* <Link onClick={ClickHandler} to={`/service-details/${item.slug}`} className="th-btn2 style2 th-icon">LEARN MORE</Link> */}
                        </div>
                     </div>
                  </div>
               ))}

            </div>
            {/* <div className="d-flex justify-content-center mt-60 text-center"><Link onClick={ClickHandler} to="/package" className="th-btn2 style4 ser-btn">Explore More</Link>
            </div> */}
         </div>
      </section>
   );
};

export default ServiceAreaS2;