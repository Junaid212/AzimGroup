import React from 'react';
import bg from '../../img/bg/booking_bg_3.jpg'
import call from '../../img/icon/call-icon2.svg'
import awards from '../../img/normal/awards.png'
import booking from '../../img/normal/booking-img.png'
import BookingForm from '../BookingForm/BookingForm';

const BookingAreaS7 = (props) => {
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${bg})` }} >

         <div className="container">
            <div className="row gy-4 align-items-center">
               <div className="col-xl-5">
                  <div className="me-xl-4 pe-xl-3 space">
                     <BookingForm hclass={'booking-form2 style3 ajax-contact'} />
                  </div>
               </div>

               <div className="col-xl-4">
                  <div className="ps-xl-5 space-extra2-bottom">
                     <div className="title-area mb-45 pe-xxl-5">
                        <span className="sub-title2 style1 ">BOOKING ROOM</span>
                        <h2 className="sec-title text-white ">Excellence In Every Moment Of Your Stay</h2>
                     </div>
                     <div className="awards">
                        <img src={awards} alt="" />
                     </div>
                     <div className="call-info">
                        <div className="call-icon"><a href="tel:+00123456789"><img src={call} alt="" /></a></div>
                        <div className="media-body"><span className="call-label text-theme">Booking Now</span>
                           <p className="call-link"><a href="tel:+00123456789">+00123 456 789</a></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3">
                  <div className="booking-img">
                     <img src={booking} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookingAreaS7;