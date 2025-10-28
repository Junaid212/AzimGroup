import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';
import titleimg from '../../img/theme-img/title_icon.svg';

const ServiceArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   // Array of gradient colors for each card
   const gradientColors = [
      'linear-gradient(135deg, rgba(248, 151, 51, 0.9) 0%, rgba(255, 195, 0, 0.9) 100%)',
      'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)',
      'linear-gradient(135deg, rgba(248, 151, 51, 0.9) 0%, rgba(255, 195, 0, 0.9) 100%)',
      'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)',
      'linear-gradient(135deg, rgba(248, 151, 51, 0.9) 0%, rgba(255, 195, 0, 0.9) 100%)',
      'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)',
      'linear-gradient(135deg, rgba(248, 151, 51, 0.9) 0%, rgba(255, 195, 0, 0.9) 100%)' // For the full-width card
   ];

   return (
      <section className={"" + props.hclass} id="service-sec">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5">
                  <div className="title-area text-center">
                     <span className="sub-title">SERVICES</span>
                     <h2 className="sec-title ">Explore Azim Group Services</h2>
                     <span className="title-img"><img src={titleimg} alt="shape" /></span>
                  </div>
               </div>
            </div>
            <div className="row gy-4">
  {ServiceData.slice(0, 7).map((service, index) => (
    <div 
      className={index === 6 ? 'col-12' : 'col-md-6 col-xl-4'} 
      key={index}
    >
      <div 
        className="service-card" 
        style={{ 
          background: gradientColors[index],
          color: '#fff', // Ensure text is readable on gradients
          borderRadius: '10px',
          overflow: 'hidden'
        }}
      >
        {index === 6 ? (
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Text content on left */}
              <div className="box-number position-relative static-number">{service.num}</div>
              <div className="box-icon">
                <img src={service.Icon} alt="Icon" />
              </div>
              <h3 className="box-title" style={{color: '#fff'}}>
                <Link onClick={ClickHandler} to={`/service-details/${service.slug}`} style={{color: '#fff'}}>{service.title}</Link>
              </h3>
              <p className="box-text" style={{color: 'rgba(255,255,255,0.9)'}}>{service.subtitle}</p>
            </div>
            <div className="col-md-6">
              {/* Image on right */}
              <div className="box-img global-img">
                <img src={service.image} alt="Icon" className="img-fluid" />
              </div>
            </div>
          </div>
        ) : (
          // Regular layout
          <>
            <div className="box-number" style={{color: '#fff'}}>{service.num}</div>
            <div className="box-icon">
              <img src={service.Icon} alt="Icon" />
            </div>
            <h3 className="box-title" style={{color: '#fff'}}>
              <Link onClick={ClickHandler} to={`/service-details/${service.slug}`} style={{color: '#fff'}}>{service.title}</Link>
            </h3>
            <p className="box-text" style={{color: 'rgba(255,255,255,0.9)'}}>{service.subtitle}</p>
            <div className="box-img global-img">
              <img src={service.image} alt="Icon" />
            </div>
          </>
        )}
      </div>
    </div>
  ))}
  <style>{`
  /* Fix for box-number positioning in special layout */
.static-number {
  position: static !important;
  transform: none !important;
  margin-bottom: -3rem;
  margin-left: 38rem;
  color: #fff !important;
}

/* Ensure all text is visible on gradients */
.service-card .box-title a:hover {
  color: rgba(255,255,255,0.8) !important;
}

/* Optional: Add some hover effects */
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
  `}</style>
</div>
         </div>
      </section>
   );
};

export default ServiceArea;