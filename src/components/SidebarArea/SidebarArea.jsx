import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Logo from '../../img/logo.svg';
import widget_bg from '../../img/bg/widget_bg_1.jpg';

const SidebarArea = () => {

   const [formData, setFormData] = useState({
      checkIn: '',
      checkOut: '',
      adult: '',
      children: '',
   });

   const [forceUpdate, setForceUpdate] = useState(false);
   const validator = useRef(
      new SimpleReactValidator({
         autoForceUpdate: { forceUpdate: () => setForceUpdate(!forceUpdate) },
      })
   );

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value,
      }));
      validator.current.showMessageFor(name);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validator.current.allValid()) {
         console.log('Reservation data:', formData);
         setFormData({
            checkIn: '',
            checkOut: '',
            adult: '',
            children: '',
         });
         validator.current.hideMessages();
      } else {
         validator.current.showMessages();
         setForceUpdate(!forceUpdate);
      }
   };


   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <aside className="sidebar-area">
         <div className="widget widget_quote">
            <form onSubmit={handleSubmit} className="booking-form2 style4 ajax-contact">
               <div className="input-wrap">
                  <div className="title-area mb-40">
                     <span className="sub-title2 style1 mb-15">RESERVATION</span>
                     <h2 className="box-title text-white">Check availability</h2>
                  </div>
                  <div className="row gx-24 align-items-center justify-content-between">
                     <div className="form-group col-12">
                        <div className="form-item">
                           <label>Check In</label>
                           <input
                              type="date"
                              className="form-control"
                              name="checkIn"
                              value={formData.checkIn}
                              onChange={handleChange}
                           />
                           <i className="fa-solid fa-calendar-days"></i>
                           {validator.current.message('checkIn', formData.checkIn, 'required')}
                        </div>
                     </div>
                     <div className="form-group col-12">
                        <div className="form-item">
                           <label>Check Out</label>
                           <input
                              type="date"
                              className="form-control"
                              name="checkOut"
                              value={formData.checkOut}
                              onChange={handleChange}
                           />
                           <i className="fa-solid fa-calendar-days"></i>
                           {validator.current.message('checkOut', formData.checkOut, 'required')}
                        </div>
                     </div>
                     <div className="col-12 form-group">
                        <div className="form-item">
                           <label>Adult</label>
                           <select
                              name="adult"
                              className="form-select nice-select"
                              value={formData.adult}
                              onChange={handleChange}
                           >
                              <option value="" disabled hidden>Adult 01</option>
                              <option value="1">Adult 01</option>
                              <option value="2">Adult 02</option>
                              <option value="3">Adult 03</option>
                           </select>
                           {validator.current.message('adult', formData.adult, 'required')}
                           <i className="fa-solid fa-caret-down"></i>
                        </div>
                     </div>
                     <div className="col-12 form-group">
                        <div className="form-item">
                           <label>Children</label>
                           <select
                              name="children"
                              className="form-select nice-select"
                              value={formData.children}
                              onChange={handleChange}
                           >
                              <option value="" disabled hidden>Children 0</option>
                              <option value="0">Children 0</option>
                              <option value="1">Children 1</option>
                              <option value="2">Children 2</option>
                           </select>
                           {validator.current.message('children', formData.children, 'required')}
                           <i className="fa-solid fa-caret-down"></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 form-group mt-3">
                     <button type="submit" className="th-btn w-100">Check Availability</button>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
               </div>
            </form>
         </div>

         <div className="widget widget_offer  background-image" style={{ backgroundImage: `url(${widget_bg})` }}>
            <div className="offer-banner">
               <h5 className="banner-title">Need Help? We Are Here To Help You</h5>
               <div className="banner-logo">
                  <img src={Logo} alt="Rotal" />
               </div>
               <div className="offer">
                  <h6 className="offer-title">You Get Online support</h6>
                  <p className="offer-text"><a href="tel:+256214203215">+256 214 203 215</a></p>
               </div>
               <Link onClick={ClickHandler} to="/contact" className="th-btn">EXPLORE MORE</Link>
            </div>
         </div>
      </aside>
   );
};



export default SidebarArea;