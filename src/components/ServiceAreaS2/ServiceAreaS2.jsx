import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';

const ServiceAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   // Array of gradient colors for each card
   const gradientColors = [
      'linear-gradient(90deg,rgba(248, 151, 51, 1) 53%, rgba(255, 195, 0, 1) 100%)',
      'linear-gradient(90deg,rgba(0, 183, 190, 1) 0%, rgba(0, 120, 106, 1) 96%)', 
      'linear-gradient(90deg,rgba(248, 151, 51, 1) 53%, rgba(255, 195, 0, 1) 100%)'  
   ];

   return (
      <section className={"" + props.hclass} id="service-sec">
         <div className="container" >
            <div className="row gy-0">
               {ServiceData.slice(7, 10).map((item, iservic) => (
                  <div className="col-12 service-card-wrap" key={iservic}>
                     <div className="service-card style3" style={{background: gradientColors[iservic]}}>
                        <div className="box-img">
                           <img src={item.image} alt="Icon" />
                        </div>
                        <div className="box-content" style={{background: 'transparent'}}>
                           <h6 className="box-subtitle">{item.title2}</h6>
                           <h3 className="box-title">{item.title}</h3>
                           <p className="box-text">{item.subtitle}</p>
                           {/* <Link onClick={ClickHandler} to={`/service-details/${item.slug}`} className="th-btn2 style2 th-icon">LEARN MORE</Link> */}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceAreaS2;