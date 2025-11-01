import React from 'react';
import titleimg from '../../img/theme-img/title_icon.svg';

const Services3 = () => {
  const services = [
    {
      title: 'Property Maintenance',
      text: 'Routine inspections, prompt repairs, and upkeep for lasting appeal.',
    },
    {
      title: 'Tenant Experience',
      text: 'Efficient operations and responsive service to boost retention.',
    },
    {
      title: 'Energy Efficiency',
      text: 'Audits, upgrades, and sustainable practices to cut costs and impact.',
    },
    {
      title: 'Security & Safety',
      text: 'Access control, surveillance, and emergency planning for protection.',
    },
    {
      title: 'Janitorial Services',
      text: 'Thorough cleaning and waste management for welcoming spaces.',
    },
    {
      title: 'Space Optimisation',
      text: 'Smart layout enhancements to improve functionality and value.',
    },
  ];

  return (
    <section className="overflow-hidden space" id="service-sec">
      <div className="container">
        {/* Section Title */}
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
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-xl-4 d-flex justify-content-center">
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

export default Services3;
