import React from "react";
const ContactInfoArea = () => {
   return (
      <div className="contact-info-area space-top">
         <div className="container">
            <div className="contact-info-wrapp">
               <div className="team-contact-title">
                  <h3 className="box-title">Contact Info:</h3>
               </div>
               <div className="contact-info">
                  <div className="team-contact">
                     <div className="icon-btn">
                        <i className="fas fa-location-dot"></i>
                     </div>
                     <div className="media-body">
                        <h5 className="box-title">Our Address</h5>
                        <p className="box-text">NBK Building,
#805, 8th Floor,
Doha-Qatar</p>
                     </div>
                  </div>
                  <div className="team-contact">
                     <div className="icon-btn">
                        <i className="fas fa-phone"></i>
                     </div>
                     <div className="media-body">
                        <h5 className="box-title">Phone Number</h5>
                        <p className="box-text">
                           <a href="tel:+97444802851">+ 974 4480 2851</a>
                           <a href="tel:+97477047248">+ 974 7704 7248</a>
                        </p>
                     </div>
                  </div>
                  <div className="team-contact">
                     <div className="icon-btn">
                        <i className="fas fa-envelope"></i>
                     </div>
                     <div className="media-body">
                        <h5 className="box-title">Email Address</h5>
                        <p className="box-text">
                           <a href="mailto:support24@Rotal.com">afms@azimgroup.qa</a>
                           {/* <a href="mailto:contact@Rotal.com">contact@Rotal.com</a> */}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactInfoArea;