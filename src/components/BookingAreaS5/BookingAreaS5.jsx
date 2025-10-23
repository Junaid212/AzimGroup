import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import title from '../../img/theme-img/title_icon_white2.svg';

const BookingForm = () => {
   const validator = useRef(new SimpleReactValidator());
   const [, forceUpdate] = useState();
   const [submitted, setSubmitted] = useState(false);

   const [formData, setFormData] = useState({
      location: "",
      arrival: "",
      departure: "",
      guests: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const isValidDate = (date) => !isNaN(new Date(date).getTime());

   const handleSubmit = (e) => {
      e.preventDefault();

      // Custom date validation
      const { arrival, departure } = formData;
      const validArrival = isValidDate(arrival);
      const validDeparture = isValidDate(departure);
      const arrivalBeforeDeparture = new Date(arrival) <= new Date(departure);

      if (
         validator.current.allValid() &&
         validArrival &&
         validDeparture &&
         arrivalBeforeDeparture
      ) {
         setFormData({
            location: "",
            arrival: "",
            departure: "",
            guests: "",
         });
         validator.current.hideMessages();
         setSubmitted(true);
         setTimeout(() => setSubmitted(false), 2000);
      } else {
         validator.current.showMessages();
         forceUpdate(1);
      }


   };

   return (
      <div className="booking-area style3">
         <div className="container">
            <form onSubmit={handleSubmit} className="booking-form style3">
               <div className="hero-wrap">
                  <div className="location-form-group">
                     <div className="box-icon">
                        <img src={title} alt="img" />
                     </div>
                     <i className="fas fa-map-marker-alt me-2"></i>
                     <input
                        type="text"
                        className="form-control"
                        name="location"
                        placeholder="45 New Eskaton Road, Copenhagen"
                        value={formData.location}
                        onChange={handleChange}
                     />

                  </div>

                  <div className="select-form-group">
                     <div className="form-group">
                        <label>Arrival/Departure</label>
                        <div className="input-group">
                           <input
                              type="date"
                              className="form-control"
                              name="arrival"
                              value={formData.arrival}
                              onChange={handleChange}
                           />
                           <input
                              type="date"
                              className="form-control"
                              name="departure"
                              value={formData.departure}
                              onChange={handleChange}
                           />
                        </div>

                     </div>

                     <div className="form-group">
                        <label>Guests</label>
                        <select
                           name="guests"
                           className="form-select"
                           value={formData.guests}
                           onChange={handleChange}
                        >
                           <option value="" disabled hidden>
                              Add Person
                           </option>
                           <option value="2 Adult Only">2 Adult Only</option>
                           <option value="2 Adult 1 Child">2 Adult 1 Child</option>
                           <option value="2 Adult 2 Child">2 Adult 2 Child</option>
                           <option value="3 or 4+ Person">3 or 4+ Person</option>
                        </select>
                        <i className="fa-solid fa-caret-down"></i>
                     </div>

                     <div className="form-btn">
                        <button type="submit" className="th-btn2 style1">
                           BOOK
                        </button>
                     </div>
                  </div>

                  <Link className="th-btn th-icon" to="/contact">
                     ACCOMMODATION
                  </Link>
               </div>
               {submitted && (
                  <div >
                     Booking submitted successfully!
                  </div>
               )}
            </form>
         </div>
      </div>
   );
};

export default BookingForm;
