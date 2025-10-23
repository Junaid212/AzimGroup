import React from 'react';
import Imagebg from '../../img/bg/booking_bg_1.jpg';
import CollIcon from '../../img/icon/call-icon.svg';
import Awards from '../../img/normal/awards.png';
import BookingForm from '../BookingForm/BookingForm';

const BookingAreaS2 = (props) => {
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${Imagebg})` }}>
         <div className="container">
            <div className="row gy-4 align-items-center">
               <div className="col-xl-5">
                  <div className="me-xl-4 pe-xl-3">
                  <BookingForm hclass={'booking-form2 ajax-contact'}/>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-5">
                     <div className="title-area mb-45 pe-xxl-5">
                        <span className="sub-title2 style1 ">OFFER PACKAGES</span>
                        <h2 className="sec-title text-white ">We offer varity of rooms and wellness special packages </h2>
                     </div>
                     <div className="awards">
                        <img src={Awards} alt="" />
                     </div>
                     <div className="call-info">
                        <div className="call-icon"><a href="tel:+00123456789"><img src={CollIcon} alt="" /></a></div>
                        <div className="media-body"><span className="call-label">Booking Now</span>
                           <p className="call-link"><a href="tel:+00123456789">+00123 456 789</a></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
};

export default BookingAreaS2;