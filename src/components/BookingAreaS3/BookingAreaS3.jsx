import React from 'react';
import Call from '../../img/icon/call-icon.svg'
import booking from '../../img/bg/booking_bg_2.jpg'
import BookingForm from '../BookingForm/BookingForm';

const BookingAreaS3 = (props) => {
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${booking})` }}>
         <div className="container">
            <div className="row gy-4 align-items-center">
               <div className="col-xl-5">
                  <div className="me-xl-4 pe-xl-3">
                     <BookingForm hclass={'booking-form2 style2 ajax-contact'} />
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-4">
                  <div className="ps-xl-5">
                     <div className="title-area mb-45 pe-xxl-5">
                        <span className="sub-title2 style1">BOOKING ROOM</span>
                        <h2 className="sec-title text-white ">Excellence In Every Moment Of Your Stay</h2>
                     </div>
                     <div className="call-info">
                        <div className="call-icon"><a href="tel:+00123456789"><img src={Call} alt="" /></a></div>
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

export default BookingAreaS3;