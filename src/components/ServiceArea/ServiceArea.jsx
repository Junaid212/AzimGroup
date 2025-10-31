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
      'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)'
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
  {ServiceData.slice(0, 6).map((service, index) => (
    <div className="col-md-6 col-xl-4" key={index}>
      <div 
        className="service-card h-100 d-flex flex-column"
        style={{ 
          background: gradientColors[index],
          color: '#fff',
          borderRadius: '10px',
          overflow: 'hidden'
        }}
      >
        <div className="service-card-content flex-grow-1 d-flex flex-column p-4">
          <div className="box-number mb-2" style={{color: '#fff'}}>{service.num}</div>
          <div className="box-icon mb-3">
            <img src={service.Icon} alt="Icon" />
          </div>
          <h3 className="box-title mb-3" style={{color: '#fff', minHeight: '60px'}}>
            <Link onClick={ClickHandler} to={`/service-details/${service.slug}`} style={{color: '#fff'}}>{service.title}</Link>
          </h3>
          <p className="box-text mb-4 flex-grow-1" style={{color: 'rgba(255,255,255,0.9)'}}>{service.subtitle}</p>
        </div>
        <div className="box-img global-img mt-auto">
          <img src={service.image} alt="Service" className="img-fluid w-100" style={{maxHeight: '200px', objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  ))}
  <style>{`
    .service-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      min-height: 400px;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .service-card-content {
      flex: 1;
    }

    /* Ensure all text is visible on gradients */
    .service-card .box-title a:hover {
      color: rgba(255,255,255,0.8) !important;
    }

    /* Make sure images are consistent */
    .box-img img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  `}</style>
</div>
         </div>
      </section>
   );
};

export default ServiceArea;