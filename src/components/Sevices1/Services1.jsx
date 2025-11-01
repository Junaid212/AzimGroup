import React from 'react';
import titleimg from '../../img/theme-img/title_icon.svg';

const Services1 = () => {
  return (
    <section className="overflow-hidden space" id="service-sec">
      <div className="container">
        {/* Title */}
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="title-area text-center">
              <h2 className="sec-title">Our Services</h2>
              <span className="title-img">
                <img src={titleimg} alt="shape" />
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row gy-4 justify-content-center">
          {[
            {
              title: 'Property Maintenance',
              text: 'Comprehensive upkeep to create pleasant, inviting spaces.',
            },
            {
              title: 'Amenity Management',
              text: 'Expert care for fitness centers, pools, and shared areas.',
            },
            {
              title: 'Security & Safety',
              text: 'Advanced surveillance and access control for resident protection.',
            },
            {
              title: 'Energy Efficiency',
              text: 'Sustainable practices to reduce costs and environmental impact.',
            },
            {
              title: 'Landscaping',
              text: 'Beautiful, balanced green spaces that enrich community living.',
            },
            {
              title: 'Visitor Management',
              text: 'Secure, convenient, and welcoming services for guests.',
            },
            {
              title: 'Emergency Preparedness',
              text: 'Robust protocols ensuring safety in critical situations.',
              center: true, // mark this to center
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`col-md-6 col-xl-4 d-flex ${
                service.center ? 'justify-content-center' : ''
              }`}
            >
              <div
                className="service-box style2 h-100 d-flex flex-column align-items-stretch"
                style={{
                  minHeight: '100%',
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                <div className="box-content flex-grow-1 d-flex flex-column justify-content-center">
                  <h3 className="box-title">{service.title}</h3>
                  <p className="box-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
