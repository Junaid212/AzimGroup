import React, { useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const BookingForm = (props) => {
   const [form, setForm] = useState({
      checkIn: '',
      checkOut: '',
      adults: '',
      children: '',
   });
   
   const [submitted, setSubmitted] = useState(false);
   const validator = useRef(new SimpleReactValidator());
   const [, forceUpdate] = useState();

   const handleChange = e => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));
      setSubmitted(false); 
   };

   const handleSubmit = e => {
      e.preventDefault();
      if (validator.current.allValid()) {

         setForm({
            checkIn: '',
            checkOut: '',
            adults: '',
            children: '',
         });

         validator.current.hideMessages();
         forceUpdate(1);
         setSubmitted(true);
      } else {
         validator.current.showMessages();
         forceUpdate(1);
      }
   };

   return (
      <form className={"" + props.hclass} onSubmit={handleSubmit}>
         <div className="hero-wrap">
            <div className="title-area mb-40">
               <span className="sub-title2 style1 mb-15">ROOMS RESERVATION</span>
               <h2 className="sec-title text-white">Check availability</h2>
            </div>
            <div className="row gx-24 align-items-center justify-content-between">
               <div className="form-group col-12">
                  <div className="form-item">
                     <label>Check In</label>
                     <input
                        type="date"
                        className="form-control"
                        name="checkIn"
                        value={form.checkIn}
                        onChange={handleChange}
                     />
                     {validator.current.message('checkIn', form.checkIn, 'required')}
                     <i className="fa-solid fa-calendar-days"></i>
                  </div>
               </div>

               <div className="form-group col-12">
                  <div className="form-item">
                     <label>Check Out</label>
                     <input
                        type="date"
                        className="form-control"
                        name="checkOut"
                        value={form.checkOut}
                        onChange={handleChange}
                     />
                     {validator.current.message('checkOut', form.checkOut, 'required')}
                     <i className="fa-solid fa-calendar-days"></i>
                  </div>
               </div>
               <div className="col-12 form-group">
                  <div className="form-item">
                     <label>Adult</label>
                     <select
                        name="adults"
                        className="form-select nice-select"
                        value={form.adults}
                        onChange={handleChange}
                     >
                        <option value="">Select Adults</option>
                        <option value="1">Adult 01</option>
                        <option value="2">Adult 02</option>
                        <option value="3">Adult 03</option>
                     </select>
                     {validator.current.message('adults', form.adults, 'required')}
                     <i className="fa-solid fa-caret-down"></i>
                  </div>
               </div>
               <div className="col-12 form-group">
                  <div className="form-item">
                     <label>Children</label>
                     <select
                        name="children"
                        className="form-select nice-select"
                        value={form.children}
                        onChange={handleChange}
                     >
                        <option value="">Select Children</option>
                        <option value="0">Children 0</option>
                        <option value="1">Children 1</option>
                        <option value="2">Children 2</option>
                     </select>
                     {validator.current.message('children', form.children, 'required')}
                     <i className="fa-solid fa-caret-down"></i>
                  </div>
               </div>

               <div className="btn-form">
                  <button type="submit" className="th-btn style1">CHECK AVAILABILITY</button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default BookingForm;
